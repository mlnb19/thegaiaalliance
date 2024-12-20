
import React, { useState } from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Center, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { Liquid } from '@ant-design/plots';
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WiDaySunny, WiThermometer } from "react-icons/wi";

function Temperature() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" display="flex" alignItems="center" justifyContent="center" position="relative" overflow="hidden">
      <Navbar />
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, red.500, yellow.300, red.600)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px">
          <GridItem colSpan={5}>
            <Box bg="#111" borderRadius="xl" p={8} h="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
              <Text color="#FFD4B4" fontSize="sm">Global Uppvärmning</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2} mb={4}>
                Temperatur Förändring
              </Text>
              <Text color="gray.500" mb={8}>
                Global medeltemperatur över tid
              </Text>
            </Box>
          </GridItem>

          <GridItem colSpan={4}>
            <Flex direction="column" gap={6} h="100%">
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="red.300"><FaTemperatureHigh size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Värmeböljor
                  </Text>
                </Flex>
              </Box>
              
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="red.300"><WiDaySunny size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Extremväder
                  </Text>
                </Flex>
              </Box>

              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="red.300"><FaTemperatureLow size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Medeltemperatur
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </GridItem>

          <GridItem colSpan={3}>
            <Flex direction="column" gap={6} h="100%">
              <SimpleGrid columns={2} gap={6}>
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center flexDirection="column">
                    <Box as="span" color="red.300" fontSize="2xl" mb={4}>
                      <WiThermometer size={24}/>
                    </Box>
                    <Text color="gray.400" fontSize="sm">ÖKNING</Text>
                  </Center>
                </Box>
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center flexDirection="column">
                    <Box as="span" color="red.300" fontSize="2xl" mb={4}>
                      <FaTemperatureHigh size={24}/>
                    </Box>
                    <Text color="gray.400" fontSize="sm">PROGNOS</Text>
                  </Box>
                </Center>
              </SimpleGrid>

              <Box 
                bg="#111" 
                borderRadius="xl" 
                p={8} 
                flex={1} 
                cursor="pointer"
                onClick={() => setIsModalOpen(true)}
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.02)' }}
              >
                <Text color="white" fontSize="2xl" fontWeight="bold">
                  Temperaturen har ökat med 1.1°C sedan 1900
                </Text>
                <Text color="gray.500" mt="4">Klicka för att lära dig mer</Text>
                <Box height="120px" mt={6}>
                  <Liquid 
                    percent={0.35}
                    outline={{
                      border: 2,
                      distance: 4,
                    }}
                    wave={{
                      length: 128,
                    }}
                    color="#FFD4B4"
                  />
                </Box>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Temperature;
