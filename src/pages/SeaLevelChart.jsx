
import { Rose } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Slider } from 'antd';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [yearRange, setYearRange] = useState([0, 100]);

  useEffect(() => {
    fetch('/data/SeaLevel.json')
      .then(response => response.json())
      .then(data => {
        const formattedData = data
          .filter(item => parseInt(item.Time.split('-')[0]) % 10 === 0)
          .map(item => ({
            year: item.Time.split('-')[0],
            value: Math.abs(item.GMSL),
            category: 'Sea Level'
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
    xField: 'year',
    yField: 'value',
    colorField: 'year',
    radius: 0.9,
    theme: {
      defaultColor: '#73A5C6',
    },
    color: ['#73A5C6', '#1E3F66'],
    tooltip: {
      formatter: (datum) => {
        return { name: 'Sea Level Change', value: `${datum.value.toFixed(1)} mm` };
      },
    },
    legend: false,
    interactions: [{ type: 'element-active' }],
  };

  return (
    <Box>
      <Box mb={4}>
        <Text color="white" mb={2}>Filter Years</Text>
        <Slider
          range
          defaultValue={[0, 100]}
          onChange={setYearRange}
          style={{ 
            width: '100%',
          }}
        />
      </Box>
      <Rose {...config} />
    </Box>
  );
};

export default SeaLevelChart;
