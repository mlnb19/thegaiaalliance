
import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/plots';
import { Box, Text, VStack, Grid, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [yearRange, setYearRange] = useState([0, 100]); // Percentage of data range
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetch('/data/SeaLevel.json')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          year: item.Time.split('-')[0],
          GMSL: item.GMSL,
          uncertainty: item['GMSL uncertainty'],
        }));
        setSeaLevelData(formattedData);
      });
  }, []);

  const filteredData = seaLevelData.slice(
    Math.floor(seaLevelData.length * (yearRange[0] / 100)),
    Math.floor(seaLevelData.length * (yearRange[1] / 100))
  );

  const config = {
    data: filteredData,
    xField: 'year',
    yField: 'GMSL',
    colorField: 'year',
    radius: 0.85,
    color: ['#e6f7ff', '#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff', '#1890ff', '#096dd9', '#0050b3'],
    tooltip: {
      fields: ['year', 'GMSL', 'uncertainty'],
      formatter: (datum) => ({
        name: `År ${datum.year}`,
        value: `${datum.GMSL.toFixed(1)} mm (±${datum.uncertainty.toFixed(1)} mm)`,
      }),
    },
    legend: { 
      position: 'bottom',
      color: {
        length: 400,
        layout: { justifyContent: 'center' }
      }
    },
    axis: false,
  };

  return (
    <Box bg="#000" minHeight="100vh" p={8}>
      <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6} maxWidth="1200px" mx="auto">
        <Box>
          <Text fontSize="2xl" color="white" mb={4} textAlign="center">
            Globala havsnivåförändringar
          </Text>
          <Rose {...config} />
          <Box px={8} mt={4}>
            <Slider
              aria-label="year-range"
              defaultValue={[0, 100]}
              onChange={setYearRange}
              min={0}
              max={100}
              step={1}
            >
              <SliderTrack bg="blue.100">
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb index={0} />
              <SliderThumb index={1} />
            </Slider>
          </Box>
          <Box mt={4} textAlign="center">
            <Text color="blue.400" cursor="pointer" onClick={onOpen}>
              Klicka här för mer information
            </Text>
          </Box>
        </Box>

        <Box bg="rgba(0, 0, 0, 0.7)" p={4} borderRadius="md" color="white">
          <Text fontSize="lg" fontWeight="bold">
            Information om data
          </Text>
          <Text mt={2}>
            Detta diagram visar globala havsnivåförändringar från 1880 till 2013 baserat på historiska observationer. Använd reglaget för att justera tidsperioden.
          </Text>
        </Box>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="#111" p={6} borderRadius="md" color="white">
          <ModalCloseButton />
          <Text fontSize="2xl" mb={4}>
            Detaljerad information om havsnivå
          </Text>
          <VStack align="start" spacing={4}>
            {filteredData.map((item) => (
              <Box key={item.year}>
                <Text>
                  År: {item.year}, Havsnivå: {item.GMSL.toFixed(1)} mm (±{item.uncertainty.toFixed(1)} mm)
                </Text>
              </Box>
            ))}
          </VStack>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SeaLevelChart;
