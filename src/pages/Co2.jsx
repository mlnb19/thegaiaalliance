
import React, { useState, useEffect } from 'react';
import { Box, Container, Text, SimpleGrid, Flex, Center, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Progress, Button, VStack, Stat, StatLabel, StatNumber, StatHelpText, Grid, GridItem, UnorderedList, ListItem } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';
import Navbar from './Navbar';
import { Liquid } from '@ant-design/plots';
import { FaIndustry, FaCar, FaLeaf, FaRecycle } from "react-icons/fa";
import { GiForestCamp, GiFactory, GiWindmill, GiSolarPower } from "react-icons/gi";
import CO2Game from './CO2Game';
import ChatBot from './ChatBot';

function Co2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isChattOpen, setIsChattOpen] = useState(false);
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);
  const [personalScore, setPersonalScore] = useState(65);
  const [fossilFuelData, setFossilFuelData] = useState([]);

  useEffect(() => {
    fetch('/data/FossilFuels.json')
      .then(response => response.json())
      .then(data => setFossilFuelData(data));
  }, []);

  const tips = [
    "Använd kollektivtrafik istället för bil när det är möjligt",
    "Plantera träd i din trädgård eller delta i lokala planteringsprojekt",
    "Minska energiförbrukningen genom att stänga av apparater",
    "Välj miljövänliga transportmedel som cykel eller elfordon"
  ];

  const sectorData = [
    { name: "Transport", percentage: 29, icon: FaCar, color: "orange.400" },
    { name: "Industri", percentage: 23, icon: FaIndustry, color: "red.400" },
    { name: "Energi", percentage: 32, icon: GiWindmill, color: "yellow.400" },
    { name: "Skogsbruk", percentage: 16, icon: GiForestCamp, color: "green.400" }
  ];

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
        bgGradient="linear(to-bl, red.600, orange.500, yellow.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"/>

          <Container
            maxW="container.xl"
            position="relative"
            zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px">
          {/* Left Column */}
          <GridItem colSpan={5}>
            <Box bg="#111" borderRadius="xl" p={8} h="100%" boxShadow="3px 2px 7px rgba(61, 61, 61)" border="0.5px">
              <Text color="#FFB4B4" fontSize="sm">CO2 Utsläpp</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2} mb={4}>
                Koldioxid Nivåer
              </Text>
              <Text color="gray.300" mb={8}>
                Koldioxidutsläpp är en av de största orsakerna till klimatförändringarna. 
                Genom att minska våra utsläpp kan vi hjälpa till att bromsa den globala uppvärmningen.
              </Text>
              <SimpleGrid columns={2} spacing={4}>
                {sectorData.map((sector, index) => (
                  <Box key={index} bg="#1a1a1a" p={4} borderRadius="lg">
                    <Flex align="center" mb={2}>
                      <Box as={sector.icon} color={sector.color} fontSize="24px" mr={3}/>
                      <Text color="white">{sector.name}</Text>
                    </Flex>
                    <Progress value={sector.percentage} colorScheme="orange" borderRadius="full"/>
                    <Text color="gray.400" fontSize="sm" mt={1}>{sector.percentage}%</Text>
                  </Box>
                ))}
              </SimpleGrid>
              <SimpleGrid columns={2} spacing={4} mt={6}>
                <Box
                  bg="#1a1a1a"
                  borderRadius="xl"
                  p={6}
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
                  cursor="pointer"
                  onClick={() => setIsChattOpen(true)}
                  _hover={{ bg: "#222" }}
                >
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    🤖
                  </Center>
                  <Center color="gray.400" fontSize="sm" mt={4}>
                    Chatta med EcoEdith
                  </Center>
                </Box>

                <Box
                  bg="#1a1a1a"
                  borderRadius="xl"
                  p={6}
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
                  cursor="pointer"
                  onClick={() => setIsDiscussionOpen(true)}
                  _hover={{ bg: "#222" }}
                >
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    💭
                  </Center>
                  <Center color="gray.400" fontSize="sm" mt={4}>
                    Diskussionsfrågor
                  </Center>
                </Box>
              </SimpleGrid>
            </Box>
          </GridItem>

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
              <ModalHeader color="red.200">🏭 Diskussionsfrågor om CO2</ModalHeader>
              <ModalCloseButton color="white" />
              <ModalBody>
                <VStack spacing={4} align="stretch">
                  {[
                    {
                      question: "Hur påverkar dina dagliga val CO2-utsläppen?",
                      followUp: "Tänk på transport, mat och energianvändning."
                    },
                    {
                      question: "Vilka är de största utmaningarna med att minska CO2-utsläpp?",
                      followUp: "Diskutera både personliga och samhälleliga utmaningar."
                    },
                    {
                      question: "Hur kan vi motivera fler att bry sig om CO2-utsläpp?",
                      followUp: "Fundera på olika sätt att sprida kunskap och engagemang."
                    },
                    {
                      question: "Vad tror du är det viktigaste vi kan göra för att minska utsläppen?",
                      followUp: "Tänk både kort- och långsiktigt."
                    },
                    {
                      question: "Hur kan teknik hjälpa oss att minska CO2-utsläpp?",
                      followUp: "Diskutera både befintlig och framtida teknologi."
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

          {/* Middle Column */}
          <GridItem colSpan={4}>
            <Flex direction="column" gap={6} h="100%">
              <Box 
                bg="#111" 
                borderRadius="xl" 
                p={8} 
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)" 
                cursor="pointer" 
                onClick={() => setIsModalOpen(true)} 
                transition="transform 0.2s" 
                _hover={{ transform: 'scale(1.02)' }}
              >
                <Text color="white" fontSize="2xl" fontWeight="bold">CO2 Utsläpp Statistik</Text>
                <SimpleGrid columns={2} spacing={4} mt={4}>
                  <Stat>
                    <StatLabel color="gray.400">Total Ökning</StatLabel>
                    <StatNumber color="red.400">
                      {fossilFuelData.length > 0 && `${(fossilFuelData[fossilFuelData.length-1].Total - fossilFuelData[0].Total).toFixed(1)}Mt`}
                    </StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel color="gray.400">Senaste Mätning</StatLabel>
                    <StatNumber color="orange.400">
                      {fossilFuelData.length > 0 && `${fossilFuelData[fossilFuelData.length-1].Total}Mt`}
                    </StatNumber>
                  </Stat>
                </SimpleGrid>
              </Box>

              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="4xl">
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent bg="gray.900" p={6}>
                  <ModalHeader color="white">Historisk CO2 Utveckling</ModalHeader>
                  <ModalCloseButton color="white" />
                  <ModalBody>
                    <Flex gap={6}>
                      <Box height="400px" flex="2">
                        <ResponsiveLine
                        data={[
                          {
                            id: "Total CO2",
                            data: fossilFuelData.map(d => ({
                              x: d.Year,
                              y: d.Total
                            }))
                          }
                        ]}
                        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', min: 0, max: 'auto' }}
                        enableGridX={false}
                        enableArea={true}
                        areaBaselineValue={0}
                        areaOpacity={0.15}
                        data={[
                          {
                            id: "Total CO2",
                            data: fossilFuelData
                              .filter(d => d.Year >= 1900 && d.Year % 10 === 0)
                              .map(d => ({
                                x: d.Year,
                                y: d.Total
                              }))
                          }
                        ]}
                        axisBottom={{
                          tickRotation: -45,
                          tickSize: 10,
                          legend: 'År',
                          legendOffset: 40
                        }}
                        axisLeft={{
                          legend: 'CO2 Utsläpp (Miljoner Ton)',
                          legendOffset: -50,
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0
                        }}
                        pointSize={8}
                        pointColor="#FFB4B4"
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        enableSlices="x"
                        colors={["#FFB4B4"]}
                        useMesh={true}
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
                      <Box flex="1" bg="#1a1a1a" p={4} borderRadius="xl">
                        <VStack spacing={4} align="start">
                          <Text color="white" fontSize="lg" fontWeight="bold">
                            Om Statistiken
                          </Text>
                          <Text color="gray.300" fontSize="sm">
                            Denna graf visar den historiska utvecklingen av CO2-utsläpp sedan 1900.
                          </Text>
                          <Text color="gray.300" fontSize="sm">
                            Viktiga observationer:
                          </Text>
                          <UnorderedList color="gray.300" fontSize="sm" spacing={2}>
                            <ListItem>Kraftig ökning efter 1950</ListItem>
                            <ListItem>Industrialiseringen har bidragit mest</ListItem>
                            <ListItem>Fortsatt uppåtgående trend</ListItem>
                          </UnorderedList>
                          <Text color="gray.300" fontSize="sm" mt={2}>
                            Värdena mäts i miljoner ton CO2 och visar den totala mängden utsläpp från fossila bränslen.
                          </Text>
                        </VStack>
                      </Box>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>

              <Box 
                bg="#111" 
                borderRadius="xl" 
                p={6}
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
              >
                <Text color="white" fontSize="xl" fontWeight="bold" mb={4}>
                  Höga CO2-nivåer leder till:
                </Text>
                <Text color="gray.300">
                  <ul>
                  <li>Ökad global uppvärmning som smälter glaciärer och höjer havsnivåer</li>
                  <li>Försurning av haven som skadar marina ekosystem</li>
                  <li>Extremare väder med fler naturkatastrofer</li>
                  <li>Förändringar i ekosystem som hotar både djur och växter</li>
                  </ul>
                </Text>
              </Box>
              
              <Box 
                bg="#111" 
                borderRadius="xl" 
                p={6} 
                flex={1} 
                cursor="pointer" 
                onClick={() => setIsGameOpen(true)}
                _hover={{ bg: "#1a1a1a" }}
              >
                <Text color="white" fontSize="2xl" fontWeight="bold">Spela CO2 Spelet! 🎮</Text>
                <Text color="gray.400" mt={2}>Klicka här för att testa dina miljöval</Text>
              </Box>
            </Flex>
          </GridItem>

          {/* Right Column */}
          <GridItem colSpan={3}>
            <Flex direction="column" gap={6} h="100%">
              <Box bg="#111" borderRadius="xl" p={8} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)" onClick={() => setShowTips(true)} cursor="pointer" _hover={{ bg: "#1a1a1a" }}>
                <Flex align="center" mb={4}>
                  <Box as={FaLeaf} color="green.400" fontSize="24px" mr={3}/>
                  <Text color="white" fontSize="xl">Minska ditt CO2-avtryck</Text>
                </Flex>
                <Text color="gray.400">Klicka här för tips om hur du kan hjälpa miljön</Text>
              </Box>

              <Box bg="#111" borderRadius="xl" p={8} flex={1} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Text color="white" fontSize="2xl" fontWeight="bold">
                  Visste du detta om CO2? 🌍
                </Text>
                <Text color="gray.500" mt="4">
                  • CO2-nivåerna är högre nu än någonsin under de senaste 800,000 åren
                  <br/>
                  • Havets pH-värde har sjunkit med 30% på grund av CO2
                  <br/>
                  • Varje år släpper vi ut över 36 miljarder ton CO2
                  <br/>
                  • Träd kan absorbera upp till 22 kg CO2 per år
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Modal isOpen={showTips} onClose={() => setShowTips(false)} size="xl">
        <ModalOverlay backdropFilter="blur(10px)"/>
        <ModalContent bg="gray.900" p={6}>
          <ModalHeader color="green.400">Tips för att minska CO2-utsläpp</ModalHeader>
          <ModalCloseButton color="white"/>
          <ModalBody>
            <VStack spacing={4} align="stretch">
              {tips.map((tip, index) => (
                <Flex key={index} bg="#1a1a1a" p={4} borderRadius="xl" align="center">
                  <Box as={FaLeaf} color="green.400" fontSize="20px" mr={3}/>
                  <Text color="white">{tip}</Text>
                </Flex>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} size="xl">
        <ModalOverlay backdropFilter="blur(10px)"/>
        <ModalContent bg="gray.900" p={6}>
          <ModalCloseButton color="white"/>
          <ModalBody>
            <CO2Game />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Co2;
