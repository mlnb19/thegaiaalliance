
import React, { useState, useEffect } from 'react';
import { ResponsiveStream } from '@nivo/stream';
import { Box, Text, Tooltip, VStack, Image, Grid } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/SeaLevel.json');
        const data = await response.json();
        const formattedData = data.map(item => ({
          year: item.Time.split('-')[0],
          havsnivå: parseFloat(item.GMSL)
        }));
        setSeaLevelData(formattedData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  const handleYearHover = (point) => {
    setCurrentLevel(point.havsnivå);
  };

  return (
    <Grid templateColumns="1fr 1fr" gap={6}>
      <VStack spacing={4} align="stretch" bg="#111" p={6} borderRadius="xl">
        <Box display="flex" alignItems="center" mb={2}>
          <Text color="white" fontSize="xl" fontWeight="bold">Havsnivåns Förändring</Text>
          <Tooltip label="Grafen visar förändringen i den globala havsnivån över tid." bg="#1E3F66">
            <InfoOutlineIcon color="blue.400" ml={2} />
          </Tooltip>
        </Box>
        <Box height="400px">
          {seaLevelData.length > 0 && (
            <ResponsiveStream
              data={seaLevelData}
              keys={['havsnivå']}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                format: d => d,
                legend: 'År',
                legendOffset: 36
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Havsnivå (mm)',
                legendOffset: -40
              }}
              enableGridX={false}
              enableGridY={true}
              colors={['#60a5fa']}
              fillOpacity={0.85}
              onMouseMove={(point) => handleYearHover(point)}
              theme={{
                textColor: '#ffffff',
                grid: {
                  line: {
                    stroke: '#334155'
                  }
                }
              }}
            />
          )}
        </Box>
      </VStack>

      <VStack spacing={4} align="stretch" bg="#111" p={6} borderRadius="xl">
        <Text color="white" fontSize="xl" fontWeight="bold" mb={4}>
          Klimatpåverkan {currentLevel > 0 ? `+${currentLevel.toFixed(1)}` : currentLevel.toFixed(1)} mm
        </Text>
        <Box position="relative" height="400px">
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
            height={`${Math.max(0, (currentLevel + 200) / 2)}px`}
            bg="rgba(0, 127, 255, 0.3)"
            transition="height 0.3s ease-in-out"
            backdropFilter="blur(2px)"
          />
        </Box>
      </VStack>
    </Grid>
  );
};

export default SeaLevelChart;
