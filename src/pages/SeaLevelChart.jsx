
import React, { useState, useEffect } from 'react';
import { ResponsiveStream } from '@nivo/stream';
import { Box, Text, Tooltip, VStack } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/SeaLevel.json');
        const data = await response.json();
        const formattedData = data.filter(item => {
          const year = parseInt(item.Time.split('-')[0]);
          return year % 10 === 0; // Filter för vart 10:e år
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

  const getYearDescription = (year) => {
    const descriptions = {
      '1880': 'Första mätningarna av havsnivån påbörjas. Havsnivån används som referenspunkt för framtida mätningar.',
      '1890': 'Tidigt skede av industrialiseringen. Havsnivån börjar visa små förändringar.',
      '1900': 'Början av 1900-talet. Industrialiseringen accelererar globalt.',
      '1910': 'Ökad användning av fossila bränslen påverkar gradvis klimatet.',
      '1920': 'Efter första världskriget. Industrin och utsläppen ökar markant.',
      '1930': 'Global industriell expansion fortsätter påverka havsnivåerna.',
      '1940': 'Under andra världskriget. Temporära förändringar i industriella aktiviteter.',
      '1950': 'Efterkrigstidens ekonomiska boom ökar påverkan på miljön.',
      '1960': 'Början av miljömedvetenhet. Tydligare tecken på stigande havsnivåer.',
      '1970': 'Första stora miljökonferensen i Stockholm 1972. Ökad medvetenhet om klimatförändringar.',
      '1980': 'Accelererande höjning av havsnivån observeras.',
      '1990': 'FN:s klimatpanel IPCC grundas. Mer precisa mätningar av havsnivåhöjningen.',
      '2000': 'Tydlig trend av stigande havsnivåer. Ökad global oro för klimatförändringar.',
      '2010': 'Dramatisk ökning i havsnivåhöjningen. Paris-avtalet 2015 sätter nya klimatmål.'
    };
    return descriptions[year] || '';
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box>
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
              format: d => d,
              color: "#ffffff"
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
            colors={['#60a5fa', '#3b82f6', '#2563eb']}
            fillOpacity={0.85}
            borderColor={{ theme: 'background' }}
            theme={{
              textColor: '#ffffff',
              fontSize: 12,
              axis: {
                domain: {
                  line: {
                    stroke: '#ffffff',
                    strokeWidth: 1
                  }
                },
                legend: {
                  text: {
                    fill: '#ffffff'
                  }
                },
                ticks: {
                  line: {
                    stroke: '#ffffff',
                    strokeWidth: 1
                  },
                  text: {
                    fill: '#ffffff'
                  }
                }
              },
              grid: {
                line: {
                  stroke: '#334155',
                  strokeWidth: 1
                }
              }
            }}
            onClick={(data) => setSelectedYear(data.data.year)}
          />
        )}
      </Box>
      {selectedYear && (
        <Box p={4} bg="whiteAlpha.100" borderRadius="xl">
          <Text color="white" fontSize="lg" fontWeight="bold">{selectedYear}</Text>
          <Text color="gray.300" mt={2}>
            {getYearDescription(selectedYear)}
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default SeaLevelChart;
