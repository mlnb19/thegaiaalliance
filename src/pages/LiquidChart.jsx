
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/plots';
import { Box, Text } from '@chakra-ui/react';

const LiquidChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data/SeaLevel.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => {
          const year = parseInt(item.Time.split('-')[0]);
          return year % 10 === 0;
        });
        setSeaLevelData(filteredData);
      });
  }, []);

  if (seaLevelData.length === 0) return <Box color="white">Loading...</Box>;

  const currentData = seaLevelData[currentIndex];
  const minGMSL = Math.min(...seaLevelData.map((d) => d.GMSL));
  const maxGMSL = Math.max(...seaLevelData.map((d) => d.GMSL));
  const normalizedPercent = (currentData?.GMSL - minGMSL) / (maxGMSL - minGMSL);

  const config = {
    percent: normalizedPercent,
    style: {
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
    },
    statistic: {
      title: {
        formatter: () => currentData?.Time.split('-')[0],
        style: { color: '#fff', fontSize: '20px' }
      },
      content: {
        formatter: () => `${currentData?.GMSL.toFixed(1)} mm`,
        style: { color: '#fff', fontSize: '16px' }
      }
    }
  };

  return (
    <Box maxWidth="800px" margin="0 auto" padding="20px">
      <Text fontSize="2xl" color="white" textAlign="center" mb={4}>
        Havsnivåförändringar
      </Text>
      <Liquid {...config} />
      <input
        type="range"
        min={0}
        max={seaLevelData.length - 1}
        value={currentIndex}
        onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
        style={{ width: '100%', marginTop: '20px' }}
      />
    </Box>
  );
};

export default LiquidChart;
