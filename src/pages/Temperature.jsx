
import React, { useState, useEffect } from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, SimpleGrid, Stat, StatLabel, StatNumber, StatArrow } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';
import Navbar from './Navbar';
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WiDaySunny, WiThermometer } from "react-icons/wi";

function Temperature() {
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    fetch('/data/Temperature.json')
      .then(response => response.json())
      .then(data => setTempData(data));
  }, []);

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="#0d0d0d"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden">

      <Navbar />

      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, red.600, red.500, orange.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"/>
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px">
          <GridItem colSpan={5}>
            <Box bg="#111" borderRadius="xl" p={8} h="100%" boxShadow="3px 2px 7px rgba(61, 61, 61)" border="0.5px">
              <Text color="#FFD4B4" fontSize="sm">Global Uppvärmning</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2} mb={4}>
                Temperatur Förändring
              </Text>
              <Text color="gray.500" mb={8}>
                Den globala medeltemperaturen har ökat markant sedan industrialiseringen började.
              </Text>
              <Box height="300px">
                <ResponsiveLine
                  data={[
                    {
                      id: "Global Temperature",
                      data: tempData.map(d => ({
                        x: d.Year,
                        y: d.Temperature
                      }))
                    }
                  ]}
                  margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                  curve="monotoneX"
                  axisBottom={{
                    tickRotation: -45,
                    legend: 'År',
                    legendOffset: 40
                  }}
                  axisLeft={{
                    legend: 'Temperaturförändring (°C)',
                    legendOffset: -50
                  }}
                  enablePoints={false}
                  colors={["#FFD4B4"]}
                />
              </Box>
            </Box>
          </GridItem>

          <GridItem colSpan={4}>
            <Flex direction="column" gap={6} h="100%">
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Text color="white" fontSize="2xl" fontWeight="bold">Temperatur Statistik</Text>
                <SimpleGrid columns={2} spacing={4} mt={4}>
                  <Stat>
                    <StatLabel color="gray.400">Högsta Ökning</StatLabel>
                    <StatNumber color="red.400">
                      <StatArrow type="increase" />
                      1.5°C
                    </StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel color="gray.400">Genomsnittlig Förändring</StatLabel>
                    <StatNumber color="orange.400">+0.8°C</StatNumber>
                  </Stat>
                </SimpleGrid>
              </Box>

              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Text color="white" fontSize="xl" mb={4}>Konsekvenser</Text>
                <Text color="gray.400">
                  • Stigande havsnivåer
                  <br/>
                  • Extrema väderhändelser
                  <br/>
                  • Förändrade ekosystem
                  <br/>
                  • Smältande glaciärer
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem colSpan={3}>
            <Flex direction="column" gap={6} h="100%">
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Text color="white" fontSize="xl" mb={4}>Åtgärder</Text>
                <Text color="gray.400">
                  • Minska fossila bränslen
                  <br/>
                  • Öka förnybar energi
                  <br/>
                  • Energieffektivisering
                  <br/>
                  • Hållbar transport
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Temperature;
