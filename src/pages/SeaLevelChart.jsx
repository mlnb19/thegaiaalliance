
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import { Box, Text, Tooltip, Icon } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Slider } from 'antd';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [yearRange, setYearRange] = useState([0, 100]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/SeaLevel.json');
        const data = await response.json();
        const formattedData = data
          .filter(item => {
            const year = parseInt(item.Time.split('-')[0]);
            return year % 10 === 0;
          })
          .map(item => ({
            date: item.Time,
            value: Math.abs(item.GMSL)
          }));
        setSeaLevelData(formattedData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredData = seaLevelData.slice(
    Math.floor(seaLevelData.length * (yearRange[0] / 100)),
    Math.ceil(seaLevelData.length * (yearRange[1] / 100))
  );

  const config = {
    data: filteredData,
    xField: 'date',
    yField: 'value',
    smooth: true,
    areaStyle: {
      fill: 'l(270) 0:#ffffff 0.5:#73A5C6 1:#1E3F66',
    },
    line: {
      style: { stroke: '#1E3F66' }
    },
    xAxis: {
      label: {
        style: { fill: '#fff' }
      }
    },
    yAxis: {
      label: {
        style: { fill: '#fff' }
      }
    },
    tooltip: {
      title: 'Havsnivå',
      formatter: (datum) => ({
        name: 'Förändring',
        value: `${datum.value.toFixed(1)} mm`
      })
    }
  };

  return (
    <Box>
      <Box mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <Text color="white" fontSize="xl" fontWeight="bold">Havsnivåns Förändring</Text>
          <Tooltip label="Grafen visar förändringen i den globala havsnivån över tid. Mätningarna är i millimeter (mm) relativt en referensnivå." bg="#1E3F66">
            <InfoOutlineIcon color="gray.400" ml={2} />
          </Tooltip>
        </Box>
        {seaLevelData.length > 0 && (
          <Box>
            <Text color="gray.400" fontSize="sm">
              Tidsperiod: {seaLevelData[0].date} till {seaLevelData[seaLevelData.length - 1].date}
            </Text>
            <Text color="gray.400" fontSize="sm">
              Total förändring: {seaLevelData[seaLevelData.length - 1].value.toFixed(1)} mm sedan {seaLevelData[0].date}
            </Text>
          </Box>
        )}
      </Box>
      <Box height="400px" mb={6}>
        {filteredData.length > 0 && <Area {...config} />}
      </Box>
      <Box mb={4}>
        <Text color="white" mb={2}>Filtrera År</Text>
        <Slider
          range
          defaultValue={[0, 100]}
          onChange={setYearRange}
          tooltip={{
            formatter: (value) => {
              if (seaLevelData.length) {
                const index = Math.floor(seaLevelData.length * (value / 100));
                return seaLevelData[index]?.date.split('-')[0] || value;
              }
              return value;
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default SeaLevelChart;
