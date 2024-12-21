
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
            bgGradient="linear(to-b, rgba(0, 127, 255, 0.1), rgba(0, 127, 255, 0.4))"
            transition="height 0.3s ease-in-out"
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
      </VStack>
    </Grid>
  );
};

export default SeaLevelChart;
