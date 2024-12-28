
import React, { useState, useEffect } from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, SimpleGrid, Stat, StatLabel, StatNumber, StatArrow, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, VStack, UnorderedList, ListItem, Center } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';
import Navbar from './Navbar';
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WiDaySunny, WiThermometer } from "react-icons/wi";

function Temperature() {
  const [tempData, setTempData] = useState([]);
  const [isStatModalOpen, setIsStatModalOpen] = useState(false);
  const [isChattOpen, setIsChattOpen] = useState(false);
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);

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
              <Box 
                bg="#111" 
                borderRadius="xl" 
                p={6} 
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
                cursor="pointer"
                onClick={() => setIsStatModalOpen(true)}
                _hover={{ transform: 'scale(1.02)' }}
                transition="transform 0.2s"
              >
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

              <Modal isOpen={isStatModalOpen} onClose={() => setIsStatModalOpen(false)} size="4xl">
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent bg="gray.900" p={6}>
                  <ModalHeader color="white">Temperaturutveckling</ModalHeader>
                  <ModalCloseButton color="white" />
                  <ModalBody>
                    <Flex gap={6}>
                      <Box height="400px" flex="2">
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
                          enablePoints={true}
                          pointSize={8}
                          pointColor="#FFD4B4"
                          colors={["#FFD4B4"]}
                          theme={{
                            axis: {
                              ticks: {
                                text: { fill: "#fff" }
                              },
                              legend: {
                                text: { fill: "#fff" }
                              }
                            }
                          }}
                        />
                      </Box>
                      <Box flex="1" bg="#1a1a1a" p={4} borderRadius="xl">
                        <VStack spacing={4} align="start">
                          <Text color="white" fontSize="lg" fontWeight="bold">
                            Om Temperaturdatan
                          </Text>
                          <Text color="gray.300" fontSize="sm">
                            Grafen visar den globala temperaturökningen sedan början av 1900-talet.
                          </Text>
                          <Text color="gray.300" fontSize="sm">
                            Viktiga observationer:
                          </Text>
                          <UnorderedList color="gray.300" fontSize="sm" spacing={2}>
                            <ListItem>Snabb ökning efter 1980</ListItem>
                            <ListItem>Industri och fossila bränslen är huvudorsaker</ListItem>
                            <ListItem>Fortsatt uppåtgående trend</ListItem>
                          </UnorderedList>
                        </VStack>
                      </Box>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>

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

              <SimpleGrid columns={2} spacing={4}>
                <Box
                  bg="#111"
                  borderRadius="xl"
                  p={6}
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
                  cursor="pointer"
                  onClick={() => setIsChattOpen(true)}
                  _hover={{ bg: "#1a1a1a" }}
                >
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    🤖
                  </Center>
                  <Center color="gray.400" fontSize="sm" mt={4}>
                    Chatta med EcoEdith
                  </Center>
                </Box>

                <Box
                  bg="#111"
                  borderRadius="xl"
                  p={6}
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
                  cursor="pointer"
                  onClick={() => setIsDiscussionOpen(true)}
                  _hover={{ bg: "#1a1a1a" }}
                >
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    💭
                  </Center>
                  <Center color="gray.400" fontSize="sm" mt={4}>
                    Diskussionsfrågor
                  </Center>
                </Box>
              </SimpleGrid>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Modal isOpen={isChattOpen} onClose={() => setIsChattOpen(false)} size="lg">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="gray.900" h="600px">
          <ModalCloseButton color="white" />
          <ChatBot />
        </ModalContent>
      </Modal>

      <Modal isOpen={isDiscussionOpen} onClose={() => setIsDiscussionOpen(false)} size="xl">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="gray.900" p={6}>
          <ModalHeader color="orange.200">🌡️ Diskussionsfrågor om Temperatur</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              {[
                {
                  question: "Hur tror du att en temperaturökning på 2°C skulle påverka där du bor?",
                  followUp: "Tänk på växter, djur och ditt dagliga liv."
                },
                {
                  question: "Vilka förändringar i klimatet har du redan märkt av?",
                  followUp: "Till exempel varmare vintrar eller extremare väder."
                },
                {
                  question: "Vad kan vi göra i vardagen för att minska global uppvärmning?",
                  followUp: "Diskutera både små och stora förändringar."
                },
                {
                  question: "Hur påverkar temperaturökningen världens matproduktion?",
                  followUp: "Tänk på jordbruk och tillgång till vatten."
                },
                {
                  question: "Varför är det viktigt att begränsa temperaturökningen till 1.5°C?",
                  followUp: "Diskutera konsekvenserna av högre temperaturer."
                }
              ].map((item, index) => (
                <Box 
                  key={index}
                  p={4} 
                  bg="whiteAlpha.100" 
                  borderRadius="xl"
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  <Text color="white" fontSize="lg" fontWeight="bold" mb={2}>
                    {index + 1}. {item.question}
                  </Text>
                  <Text color="gray.400" fontSize="md">
                    {item.followUp}
                  </Text>
                </Box>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Temperature;
