
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/plots';
import { Box, Text, VStack, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

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
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
    statistic: {
      title: {
        formatter: () => currentData?.Time.split('-')[0],
        style: { color: '#fff', fontSize: '24px' }
      },
      content: {
        formatter: () => `${currentData?.GMSL.toFixed(1)} mm`,
        style: { color: '#fff', fontSize: '20px' }
      }
    }
  };

  const totalChange = currentData.GMSL - seaLevelData[0].GMSL;

  return (
    <Box position="relative bg-[#000]">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
        overflow="hidden"
      >
        <Box
          as="img"
          src="/images/OceanAnime.svg"
          position="absolute"
          width="370px"
          height="370px"
          top="34%"
          left="50%"
          borderRadius="50%"
          transform="translate(-50%, -50%)"
          draggable="true"
          onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", "");
          }}
          style={{ cursor: 'move' }}
        />
      </Box>
      <VStack spacing={4} position="relative" zIndex="1">
        <Text fontSize="2xl" color="white" textAlign="center" fontWeight="bold">
          Havsnivåförändringar
        </Text>
        
        <Box width="100%" maxWidth="400px">
          <Liquid {...config} />
        </Box>

        <VStack 
          spacing={3} 
          bg="rgba(0, 0, 0, 0.7)" 
          p={4} 
          borderRadius="md" 
          width="100%"
          color="white"
        >
          <Stat>
            <StatLabel>År</StatLabel>
            <StatNumber>{currentData.Time.split('-')[0]}</StatNumber>
          </Stat>
          
          <Stat>
            <StatLabel>Global havsnivå (GMSL)</StatLabel>
            <StatNumber>{currentData.GMSL.toFixed(1)} mm</StatNumber>
            <StatHelpText>±{currentData['GMSL uncertainty'].toFixed(1)} mm osäkerhet</StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Total förändring sedan 1880</StatLabel>
            <StatNumber>{totalChange.toFixed(1)} mm</StatNumber>
          </Stat>
        </VStack>

        <Box 
          width="100%" 
          padding="20px" 
          background="rgba(0, 0, 0, 0.7)"
          borderRadius="md"
          marginTop="20px"
        >
          <input
            type="range"
            min={0}
            max={seaLevelData.length - 1}
            value={currentIndex}
            onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
            style={{ 
              width: '100%',
              height: '20px',
              borderRadius: '10px',
              background: 'linear-gradient(to right, #2b6cb0, #4299e1)',
              cursor: 'pointer'
            }}
          />
          <Text color="white" textAlign="center" marginTop="10px">
            Drag to change year: {currentData.Time.split('-')[0]}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default LiquidChart;
