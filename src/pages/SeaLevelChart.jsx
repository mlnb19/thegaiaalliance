import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/plots';
import { Box, Text, VStack, Grid, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Hämta datan
    fetch('/data/SeaLevel.json')
      .then((response) => response.json())
      .then((data) => {
        // Filtrera årtal och relevant information
        const formattedData = data.map((item) => ({
          year: item.Time.split('-')[0],
          GMSL: item.GMSL,
          uncertainty: item['GMSL uncertainty'],
        }));
        setSeaLevelData(formattedData);
      });
  }, []);

  const config = {
    data: seaLevelData,
    xField: 'year',
    yField: 'GMSL',
    colorField: 'year',
    radius: 0.85,
    tooltip: {
      fields: ['year', 'GMSL', 'uncertainty'],
      formatter: (datum) => ({
        name: `År ${datum.year}`,
        value: `${datum.GMSL.toFixed(1)} mm (±${datum.uncertainty.toFixed(1)} mm)`,
      }),
    },
    legend: { position: 'bottom' },
  };

  return (
    <Box bg="#000" minHeight="100vh" p={8}>
      <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6} maxWidth="1200px" mx="auto">
        {/* Diagramsektion */}
        <Box>
          <Text fontSize="2xl" color="white" mb={4} textAlign="center">
            Globala havsnivåförändringar
          </Text>
          <Rose {...config} />
          <Box mt={4} textAlign="center">
            <Text color="blue.400" cursor="pointer" onClick={onOpen}>
              Klicka här för mer information
            </Text>
          </Box>
        </Box>

        {/* Textsektion */}
        <Box bg="rgba(0, 0, 0, 0.7)" p={4} borderRadius="md" color="white">
          <Text fontSize="lg" fontWeight="bold">
            Information om data
          </Text>
          <Text mt={2}>
            Detta diagram visar globala havsnivåförändringar från 1880 till 2013 baserat på historiska observationer. Osäkerheter i mätningarna inkluderas i tooltip.
          </Text>
        </Box>
      </Grid>

      {/* Popup */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="#111" p={6} borderRadius="md" color="white">
          <ModalCloseButton />
          <Text fontSize="2xl" mb={4}>
            Detaljerad information om havsnivå
          </Text>
          <VStack align="start" spacing={4}>
            {seaLevelData.map((item) => (
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
