import React, { useState, useEffect } from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, SimpleGrid, Stat, StatLabel, StatNumber, StatArrow, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, VStack, UnorderedList, ListItem, Center } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';
import Navbar from './Navbar';
import ChatBot from './ChatBot';
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
      
      <Container maxW="container.xl" position="relative" zIndex={1} pl={{ base: 4, md: "75px" }}>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(12, 1fr)" }} gap={6} minH={{ base: "auto", md: "600px" }}>
          <GridItem colSpan={{ base: 12, md: 5 }}>
            <Box bg="#111" borderRadius="xl" p={8} h="100%" boxShadow="3px 2px 7px rgba(61, 61, 61)" border="0.5px">
              <Text color="#FFD4B4" fontSize="sm">Global Uppvärmning</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2} mb={4}>
                Temperatur Förändring
              </Text>
              <Text color="gray.500" mb={8}>
                Den globala medeltemperaturen har ökat markant sedan industrialiseringen började.
              </Text>
              <Box 
                height="300px" 
                cursor="pointer" 
                onClick={() => setIsStatModalOpen(true)}
                _hover={{ transform: 'scale(1.02)' }}
                transition="transform 0.2s"
              >
                <ResponsiveLine
                  data={[
                    {
                      id: "Global Temperature",
                      data: tempData
                        .filter(d => d.Year >= 1900 && d.Year % 10 === 0)
                        .map(d => ({
                          x: d.Year,
                          y: d.Mean
                        }))
                    }
                  ]}
                  margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: -0.5, max: 1 }}
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
                    grid: {
                      line: {
                        stroke: "#444",
                        strokeDasharray: "2 2"
                      }
                    },
                    axis: {
                      ticks: {
                        text: {
                          fill: "#fff",
                          fontSize: 12
                        }
                      },
                      legend: {
                        text: {
                          fill: "#fff",
                          fontSize: 14
                        }
                      }
                    }
                  }}
                />
              </Box>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 12, md: 4 }}>
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
                              data: tempData
                                .filter(d => d.Year >= 1900 && d.Year % 10 === 0)
                                .map(d => ({
                                  x: d.Year,
                                  y: d.Mean
                                }))
                            }
                          ]}
                          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                          xScale={{ type: 'point' }}
                          yScale={{ type: 'linear', min: -0.5, max: 1 }}
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
                      <Box flex="1" bg="#1a1a1a" p={6} borderRadius="xl">
                        <VStack spacing={6} align="start">
                          <Box>
                            <Text color="white" fontSize="xl" fontWeight="bold" mb={2}>
                              Om Temperaturdatan
                            </Text>
                            <Text color="gray.300" fontSize="sm">
                              Grafen visar den globala temperaturökningen sedan år 1900, med mätpunkter var tionde år.
                            </Text>
                          </Box>
                          
                          <Box>
                            <Text color="white" fontSize="md" fontWeight="bold" mb={2}>
                              Viktiga milstolpar:
                            </Text>
                            <VStack color="gray.300" fontSize="sm" spacing={3} align="start">
                              <Box>
                                <Text color="orange.300" fontWeight="bold">1900-1950:</Text>
                                <Text>Långsam ökning på grund av tidig industrialisering</Text>
                              </Box>
                              <Box>
                                <Text color="orange.300" fontWeight="bold">1950-1980:</Text>
                                <Text>Accelererande uppvärmning med ökad industrialisering</Text>
                              </Box>
                              <Box>
                                <Text color="orange.300" fontWeight="bold">1980-2020:</Text>
                                <Text>Dramatisk ökning med över 0.8°C genomsnittlig temperaturhöjning</Text>
                              </Box>
                            </VStack>
                          </Box>
                          
                          <Box>
                            <Text color="white" fontSize="md" fontWeight="bold" mb={2}>
                              Konsekvenser:
                            </Text>
                            <UnorderedList color="gray.300" fontSize="sm" spacing={2}>
                              <ListItem>Ökad frekvens av extremväder</ListItem>
                              <ListItem>Hotade ekosystem och artutrotning</ListItem>
                              <ListItem>Stigande havsnivåer</ListItem>
                              <ListItem>Påverkan på jordbruk och matproduktion</ListItem>
                            </UnorderedList>
                          </Box>
                        </VStack>
                      </Box>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>

              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)" mb={4}>
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

          <GridItem colSpan={{ base: 12, md: 3 }}>
            <Flex direction="column" gap={6} h="100%">
              <Box 
                bg="#111" 
                borderRadius="xl" 
                p={6} 
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
                cursor="pointer"
                onClick={() => setIsGameOpen(true)}
                _hover={{ transform: 'scale(1.02)' }}
                transition="transform 0.2s"
              >
                <Text color="white" fontSize="xl" fontWeight="bold" mb={4}>
                  Spela Temperaturspelet! 🎮
                </Text>
                <Text color="gray.400">
                  Testa dina kunskaper om klimatförändringar och gör klimatsmarta val!
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
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