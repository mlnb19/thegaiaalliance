
import React, { useState, useEffect } from 'react';
import { Box, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image, VStack, Flex } from '@chakra-ui/react';
import { Liquid } from '@ant-design/plots';

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

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}    
      borderRadius="xl"
      w="100%"
      maxW="100%"
      h="100%"
      maxH="100%"
      mx="auto"
      align={'center'}
      p={8}
    >
      <VStack flex="1" spacing={6} align="stretch">
        <Text color="white" fontSize="xl" fontWeight="bold">
          Havsnivå: {currentLevel > 0 ? `+${currentLevel.toFixed(1)}` : currentLevel.toFixed(1)} mm
        </Text>
        <Box height="300px">
          <Liquid 
            percent={Math.abs(currentLevel) / 200}
            outline={{
              border: 4,
              distance: 8,
            }}
            wave={{
              length: 128,
            }}
            color="#007FFF"
          />
        </Box>
        <Box w="100%" >
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
          <Text color="white" fontSize={'12'} mt={2}>År: {selectedYear}</Text>
          <Text color="white" mt={2} fontSize={'11'}>Dra i slidern för att se hur havsnivån ökar eller sänks beroende på år.</Text>
        </Box>
      </VStack>

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
