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
    const referencePercentage = 12; // 15% av höjden representerar 0 mm
    if (level >= 0) {
      return referencePercentage + (level / 200) * (85 - referencePercentage); // Positiva nivåer ökar uppåt
    } else {
      return referencePercentage + (level / 200) * referencePercentage; // Negativa nivåer går nedåt
    }
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}    
      borderRadius="xl"
      w="80%"
      maxW="80%"
      h="80%"
      maxH="80%"
      mx="auto"
      align={'center'}
    >
      {/* Vänster sektion: Graf */}
      <VStack flex="1" spacing={6} align="stretch">
        <Text color="white" fontSize="xl" fontWeight="bold">
          Havsnivå: {currentLevel > 0 ? `+${currentLevel.toFixed(1)}` : currentLevel.toFixed(1)} mm
        </Text>
        <Box position="relative" height="300px" overflow="hidden" borderRadius="xl">
          {/* Stadsvy */}
          <Image
            src="/images/quietstreet.svg"
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
            bgGradient="linear(to-t, rgba(0, 127, 255, 0.2), rgba(0, 127, 255, 1))"
            transition="height 0.8s ease-in-out"
            zIndex={2}
            borderRadius="md"
          >
            {/* Vågor */}
            <Box
              position="absolute"
              top="-20px"
              left="0"
              right="0"
              height="40px"
              background="url('/images/wave.jsx') repeat-x"
              animation="wave 3s linear infinite"
              zIndex={3}
            />
          </Box>
        </Box>
        <Box w="100%" >
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
        <Text fontSize="md" mb={4}>
          Havsnivån berättar en viktig historia om hur vi människor påverkar jorden – och vad vi kan göra för att skydda den!
        </Text>
      </Box>
    </Flex>
  );
};

export default SeaLevelChart;