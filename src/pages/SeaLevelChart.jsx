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
    const referencePercentage = 18; // 27% representerar 0 mm
    const maxLevel = 200; // Maximal havsnivå
    const minLevel = -400; // Minimal havsnivå

    if (level >= 0) {
      // Positiva nivåer ökar från referensnivån uppåt
      return Math.min(
        referencePercentage + (level / maxLevel) * (85 - referencePercentage),
        100
      );
    } else {
      // Negativa nivåer sjunker från referensnivån nedåt
      return Math.max(
        referencePercentage - (Math.abs(level) / Math.abs(minLevel)) * referencePercentage,
        0
      );
    }
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      borderRadius="xl"
      w="100%"
      maxW="100%"
      h="100%"
      maxH="100%"
      mx="auto"
      align="center"
      p={8}
    >
      {/* Vänster sektion: Graf */}
      <VStack flex="1" spacing={6} align="stretch">
        <Text color="white" fontSize="xl" fontWeight="bold">
          Havsnivå: {currentLevel > 0 ? `+${currentLevel.toFixed(1)}` : currentLevel.toFixed(1)} mm
        </Text>
        <Box position="relative" height="300px" overflow="hidden" borderRadius="xl">
          {/* Stadsvy */}
          <Image
            src="/images/horizon.jpg"
            alt="Stadsvy"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={1}
          />
          {/* Vattennivå */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height={`${calculateHeightPercentage(currentLevel)}%`}
            bgGradient="linear(to-t, rgba(0, 127, 255, 0.6), rgba(0, 127, 255, 1))"
            zIndex={2}
            borderRadius="md"
            sx={{
              '--mask':
                'radial-gradient(6.71px at 50% 9px,#000 99%,#0000 101%) calc(50% - 6px) 0/12px 100%, radial-gradient(22.36px at 50% -20px,#0000 99%,#000 101%) 50% 10px/20px 100% repeat-x',
              WebkitMask: 'var(--mask)',
              mask: 'var(--mask)',
              animation: 'waveAnimation 0s infinite linear',
              backgroundSize: '200% 100%',
              '@keyframes waveAnimation': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            }}
          />
        </Box>
        <Box w="100%">
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
          <Text color="white" fontSize="sm" mt={2}>
            År: {selectedYear}
          </Text>
        </Box>
      </VStack>

      {/* Höger sektion: Information */}
      <Box
        flex="1"
        borderRadius="xl"
        p={4}
        ml={{ md: 6 }}
        mt={{ base: 6, md: 0 }}
        color="gray.300"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="white">
          Vad är grejen med havsnivån?
        </Text>
        <Text fontSize="md" mb={4}>
          Havsnivån mäts utifrån ett referensvärde (0 mm) som fungerar som en jämförelsepunkt för att visa hur havsnivån har förändrats över tid. Om värdet är positivt betyder det att havsnivån har stigit över referensvärdet, och om det är negativt betyder det att den ligger under.
        </Text>
        <Text fontSize="md" mb={4}>
          När havsnivån ändras påverkar det mycket mer än bara stränderna. Höjda havsnivåer kan leda till översvämningar i städer nära havet, skada djur och växter i naturen och visar hur klimatförändringarna påverkar vår planet.
        </Text>
      </Box>
    </Flex>
  );
};

export default SeaLevelChart;