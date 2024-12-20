
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import { Box, Text, Tooltip, Icon } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Slider } from 'antd';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [yearRange, setYearRange] = useState([0, 100]);

  useEffect(() => {
    fetch('/data/SeaLevel.json')
      .then(response => response.json())
      .then(data => {
        const formattedData = data
          .filter(item => {
            const year = parseInt(item.Time.split('-')[0]);
            return year % 10 === 0; // Only keep years divisible by 10
          })
          .map(item => ({
            date: new Date(item.Time),
            value: Math.abs(item.GMSL)
          }));
        setSeaLevelData(formattedData);
      });
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
    areaStyle: () => ({
      fill: 'l(270) 0:#ffffff 0.5:#73A5C6 1:#1E3F66',
    }),
    line: {
      style: { stroke: '#1E3F66' }
    },
    xAxis: {
      tickCount: 10,
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
      formatter: (datum) => {
        return { name: 'Förändring', value: `${datum.value.toFixed(1)} mm` };
      }
    }
  };

  return (
    <Box>
      <Box mb={4} display="flex" alignItems="center">
        <Text color="white" fontSize="xl" fontWeight="bold">Havsnivåns Förändring</Text>
        <Tooltip label="Grafen visar förändringen i den globala havsnivån över tid. Mätningarna är i millimeter (mm) relativt en referensnivå." bg="#1E3F66">
          <InfoOutlineIcon color="gray.400" ml={2} />
        </Tooltip>
      </Box>
      <Box height="400px" mb={6}>
        <Area {...config} />
      </Box>
      <Box mb={4}>
        <Text color="white" mb={2}>Filtrera År</Text>
        <Slider
          range
          defaultValue={[0, 100]}
          onChange={setYearRange}
          style={{ width: '100%' }}
          tooltip={{
            formatter: (value) => {
              if (seaLevelData.length) {
                const year = new Date(seaLevelData[Math.floor(seaLevelData.length * (value / 100))].date).getFullYear();
                return `${year}`;
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
