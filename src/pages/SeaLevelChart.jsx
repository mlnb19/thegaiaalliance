
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import { Box, Text } from '@chakra-ui/react';
import { Slider } from 'antd';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [yearRange, setYearRange] = useState([0, 100]);

  useEffect(() => {
    fetch('/data/SeaLevel.json')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(item => ({
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
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#73A5C6 1:#1E3F66',
      };
    },
    line: {
      style: {
        stroke: '#1E3F66',
      },
    },
  };

  return (
    <Box>
      <Box mb={4}>
        <Text color="white" mb={2}>Filter Years</Text>
        <Slider
          range
          defaultValue={[0, 100]}
          onChange={setYearRange}
          style={{ width: '100%' }}
        />
      </Box>
      <Area {...config} />
    </Box>
  );
};

export default SeaLevelChart;
