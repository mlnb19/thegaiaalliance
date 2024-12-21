import React, { useState, useEffect } from 'react';
import { Box, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image, VStack, Flex } from '@chakra-ui/react';

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
            havsnivå: parseFloat(item.GMSL),
          }))
          .filter(item => item.year >= 1900 && (item.year % 10 === 0 || item.year === 2013));
        setSeaLevelData(formattedData);

        // Sätt initial nivå till referensåret 1900
        const initialDataPoint = formattedData.find(point => point.year === 1900);
        if (initialDataPoint) {
          setCurrentLevel(initialDataPoint.havsnivå);
        }
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

  const calculateHeightPercentage = (level) => {
    const referencePercentage = 15; // 15% av höjden representerar 0 mm
    if (level >= 0) {
      return referencePercentage + (level / 200) * (85 - referencePercentage); // Positiva nivåer ökar uppåt
    } else {
      return referencePercentage + (level / 200) * referencePercentage; // Negativa nivåer går nedåt
    }
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      spacing={6}
      bg="#111"
      p={6}
      borderRadius="xl"
      w="100%"
      maxW="1000px"
      mx="auto"
    >
      {/* Vänster sida: Vattenanimation */}
      <Box position="relative" height="500px" flex="1" overflow="hidden" borderRadius="xl" bg="#222">
        {/* Stadsvy */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="1"
        >
          <Image
            src="/images/OceanAnime.svg"
            alt="Havsbild"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </Box>
        {/* Vattennivå */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height={`${calculateHeightPercentage(currentLevel)}%`}
          bgGradient="linear(to-b, rgba(0, 127, 255, 0.3), rgba(0, 127, 255, 0.5))"
          transition="height 0.8s ease-in-out"
          zIndex="0"
          borderRadius="md"
          _before={{
            content: '""',
            position: 'absolute',
            top: '-10px',
            left: 0,
            right: 0,
            height: '10px',
            background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)',
            backgroundSize: '20px 20px',
            animation: 'waveFlow 1s linear infinite',
          }}
          sx={{
            '@keyframes waveFlow': {
              '0%': { backgroundPosition: '0 0' },
              '100%': { backgroundPosition: '20px 0' },
            },
          }}
        />
      </Box>

      {/* Höger sida: Information */}
      <VStack
        align="flex-start"
        spacing={4}
        flex="1"
        ml={{ md: 6 }}
        mt={{ base: 6, md: 0 }}
        p={4}
        bg="#1a1a1a"
        borderRadius="xl"
      >
        <Text color="white" fontSize="2xl" fontWeight="bold">
          Havsnivå {currentLevel > 0 ? `+${currentLevel.toFixed(1)}` : currentLevel.toFixed(1)} mm
        </Text>
        <Text color="gray.400" fontSize="md">
          Referensvärdet (0 mm) är baserat på genomsnittlig havsnivå år 1900. Positiva värden visar hur mycket havsnivån har stigit över
          referensnivån, medan negativa värden visar hur mycket den ligger under.
        </Text>
        <Text color="gray.400" fontSize="md">
          Förändringar i havsnivån påverkar kustsamhällen, ekosystem och kan orsaka översvämningar som hotar både människor och djur.
        </Text>
      </VStack>

      {/* Slider */}
      <Box w="100%" mt={6}>
        <Text color="white" mb={2}>Välj år: {selectedYear}</Text>
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
    </Flex>
  );
};

export default SeaLevelChart;