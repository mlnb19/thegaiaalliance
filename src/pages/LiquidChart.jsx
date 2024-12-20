import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/plots';
import { Box, Text, VStack, Stat, StatLabel, StatNumber, StatHelpText, Grid } from '@chakra-ui/react';

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
        style: { color: '#fff', fontSize: '24px' },
      },
      content: {
        formatter: () => `${currentData?.GMSL.toFixed(1)} mm`,
        style: { color: '#fff', fontSize: '20px' },
      },
    },
  };

  const totalChange = currentData.GMSL - seaLevelData[0].GMSL;

  return (
    <Box
      position="relative"
      bg="#000"
      padding="20px"
      maxHeight="100vh"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="xl"
    >
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={4}
        maxWidth="1000px"
        width="100%"
        maxHeight="700px"
      >
        {/* Left Section */}
        <Box>
          <VStack spacing={6}>
            <Text
              fontSize="2xl"
              color="white"
              textAlign="center"
              fontWeight="bold"
            >
              Havsnivåförändringar
            </Text>
            <Box width="100%" maxWidth="400px">
              <Liquid {...config} />
            </Box>
            <Box
              width="100%"
              padding="20px"
              background="rgba(0, 0, 0, 0.7)"
              borderRadius="md"
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
                  cursor: 'pointer',
                }}
              />
              <Text color="white" textAlign="center" marginTop="10px">
                Drag to change year: {currentData.Time.split('-')[0]}
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Right Section */}
        <VStack
          spacing={4}
          alignItems="stretch"
          bg="rgba(0, 0, 0, 0.7)"
          p={4}
          borderRadius="md"
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

          {/* Information Section */}
          <Box marginTop="20px">
            <Text>
              Information om datan: Detta är en visualisering av globala
              havsnivåförändringar över tid baserat på data från XYZ. Datan
              uppdateras vart tionde år för att ge en långsiktig överblick.
            </Text>
          </Box>
        </VStack>
      </Grid>
    </Box>
  );
};

export default LiquidChart;