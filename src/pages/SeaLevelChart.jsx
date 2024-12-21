
import React, { useState, useEffect } from 'react';
import { Box, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image, VStack } from '@chakra-ui/react';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedYear, setSelectedYear] = useState(1900);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/SeaLevel.json');
        const data = await response.json();
        const formattedData = data
          .map(item => ({
            year: parseInt(item.Time.split('-')[0]),
            havsnivå: parseFloat(item.GMSL)
          }))
          .filter(item => item.year >= 1900 && (item.year % 10 === 0 || item.year === 2013));
        setSeaLevelData(formattedData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  const handleYearChange = (value) => {
    setSelectedYear(value);
    const dataPoint = seaLevelData.find(point => point.year === value);
    if (dataPoint) {
      setCurrentLevel(dataPoint.havsnivå);
    }
  };

  return (
    <VStack spacing={4} align="stretch" bg="#111" p={6} borderRadius="xl" w="100%" maxW="800px" mx="auto">
      <Text color="white" fontSize="xl" fontWeight="bold" mb={4}>
        Havsnivå {currentLevel > 0 ? `+${currentLevel.toFixed(1)}` : currentLevel.toFixed(1)} mm
      </Text>
      <Box position="relative" height="500px">
        <Image
          src="/images/quietstreet.svg"
          alt="Stadsvy"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height={`${Math.max(0, ((currentLevel + 200) * 1.5))}px`}
          bgGradient={`linear(to-b, 
            rgba(0, 127, 255, ${Math.min(0.6, Math.max(0.1, (currentLevel + 200) / 400))}), 
            rgba(0, 127, 255, ${Math.min(0.8, Math.max(0.3, (currentLevel + 200) / 300))})
          )`}
          transition="all 0.5s ease-in-out"
          backdropFilter="blur(2px)"
          animation="wave 2s ease-in-out infinite"
          _before={{
            content: '""',
            position: "absolute",
            top: "-10px",
            left: 0,
            right: 0,
            height: "10px",
            background: "linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
            backgroundSize: "20px 20px",
            animation: "waveFlow 1s linear infinite"
          }}
          sx={{
            "@keyframes wave": {
              "0%, 100%": {
                transform: "translateY(0)"
              },
              "50%": {
                transform: "translateY(-5px)"
              }
            },
            "@keyframes waveFlow": {
              "0%": {
                backgroundPosition: "0 0"
              },
              "100%": {
                backgroundPosition: "20px 0"
              }
            }
          }}
        />
      </Box>
      <Box pt={4}>
        <Text color="white" mb={2}>År: {selectedYear}</Text>
        <Slider
          min={1900}
          max={2013}
          step={10}
          value={selectedYear}
          onChange={handleYearChange}
          colorScheme="blue"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </VStack>
  );
};

export default SeaLevelChart;
