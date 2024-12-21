
import React, { useState, useEffect } from 'react';
import { ResponsiveStream } from '@nivo/stream';
import { Box, Text, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/SeaLevel.json');
        const data = await response.json();
        const formattedData = data.filter(item => {
          const year = parseInt(item.Time.split('-')[0]);
          return year % 10 === 0; // Filter för vart 5:e år för bättre läsbarhet
        }).map(item => ({
          year: item.Time.split('-')[0],
          havsnivå: Math.abs(item.GMSL)
        }));
        setSeaLevelData(formattedData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Box mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <Text color="white" fontSize="xl" fontWeight="bold">Havsnivåns Förändring</Text>
          <Tooltip label="Grafen visar förändringen i den globala havsnivån över tid. Mätningarna är i millimeter (mm) relativt en referensnivå." bg="#1E3F66">
            <InfoOutlineIcon color="blue.400" ml={2} />
          </Tooltip>
        </Box>
      </Box>
      <Box height="400px" mb={6}>
        {seaLevelData.length > 0 && (
          <ResponsiveStream
            data={seaLevelData}
            keys={['havsnivå']}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
              legend: 'År',
              legendOffset: 36,
              legendPosition: 'middle',
              format: v => v,
              color: "blue.400"
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Havsnivå (mm)',
              legendOffset: -40,
              legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={true}
            offsetType="none"
            colors={{ scheme: 'blues' }}
            fillOpacity={0.85}
            borderColor={{ theme: 'background' }}
            theme={{
              textColor: '#fff',
              fontSize: 11,
              axis: {
                domain: {
                  line: {
                    stroke: 'blue',
                    strokeWidth: 1
                  }
                },
                ticks: {
                  line: {
                    stroke: 'blue',
                    strokeWidth: 1
                  }
                }
              },
              grid: {
                line: {
                  stroke: 'white',
                  strokeWidth: 1
                }
              }
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default SeaLevelChart;
