
import React, { useState } from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Center, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { Liquid } from '@ant-design/plots';
import { FaIndustry, FaCar } from "react-icons/fa";
import { GiForestCamp, GiFactory } from "react-icons/gi";

function Co2() {
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
        bgGradient="linear(to-bl, orange.400, red.300, orange.500)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px">
          <GridItem colSpan={5}>
            <Box bg="#111" borderRadius="xl" p={8} h="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
              <Text color="#FFB4B4" fontSize="sm">CO2 Utsläpp</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2} mb={4}>
                Koldioxid Nivåer
              </Text>
              <Text color="gray.500" mb={8}>
                Globala CO2 utsläpp över tid
              </Text>
            </Box>
          </GridItem>

          <GridItem colSpan={4}>
            <Flex direction="column" gap={6} h="100%">
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="orange.300"><FaIndustry size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Industriella Utsläpp
                  </Text>
                </Flex>
              </Box>
              
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="orange.300"><FaCar size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Transport
                  </Text>
                </Flex>
              </Box>

              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="orange.300"><GiForestCamp size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Skogsavverkning
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
                    <Box as="span" color="orange.300" fontSize="2xl" mb={4}>
                      <GiFactory size={24}/>
                    </Center>
                    <Text color="gray.400" fontSize="sm">NIVÅER</Text>
                  </Center>
                </Box>
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center flexDirection="column">
                    <Box as="span" color="orange.300" fontSize="2xl" mb={4}>
                      <FaIndustry size={24}/>
                    </Center>
                    <Text color="gray.400" fontSize="sm">TREND</Text>
                  </Center>
                </Box>
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
                  CO2 nivåer har ökat med 45% sedan 1990
                </Text>
                <Text color="gray.500" mt="4">Klicka för att lära dig mer</Text>
                <Box height="120px" mt={6}>
                  <Liquid 
                    percent={0.45}
                    outline={{
                      border: 2,
                      distance: 4,
                    }}
                    wave={{
                      length: 128,
                    }}
                    color="#FFB4B4"
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

export default Co2;
