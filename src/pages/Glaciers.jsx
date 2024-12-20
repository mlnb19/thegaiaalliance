import React, { useState } from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Center, Image, Avatar, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { Liquid } from '@ant-design/plots';
import { FaIcicles, FaMountain } from "react-icons/fa";
import { GiIceberg } from "react-icons/gi";
import GlacierChart from './GlacierChart';

function Glaciers() {
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
        bgGradient="linear(to-bl, blue.200, cyan.100, blue.300)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px">
          <GridItem colSpan={5}>
            <Box bg="#111" borderRadius="xl" p={8} h="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
              <Text color="#B4E4FF" fontSize="sm">Glaciär Statistik</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2} mb={4}>
                Glaciärsmältning
              </Text>
              <Text color="gray.500" mb={8}>
                Global förändring i glaciärers massa
              </Text>
            </Box>
          </GridItem>

          <GridItem colSpan={4}>
            <Flex direction="column" gap={6} h="100%">
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="cyan.200"><FaIcicles size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Arktiska Glaciärer
                  </Text>
                </Flex>
              </Box>

              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="cyan.200"><FaMountain size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Bergskedjor
                  </Text>
                </Flex>
              </Box>

              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="cyan.200"><GiIceberg size={24}/></Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Grönland
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
                    <Box as="span" color="cyan.200" fontSize="2xl" mb={4}>
                      <GiIceberg size={24}/>
                    </Box>
                    <Text color="gray.400" fontSize="sm">STATUS</Text>
                  </Center>
                </Box>
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center flexDirection="column">
                    <Box as="span" color="cyan.200" fontSize="2xl" mb={4}>
                      <GiIceberg size={24}/>
                    </Box>
                    <Text color="gray.400" fontSize="sm">DATA</Text>
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
                  Glaciärer har minskat med 40% sedan 1980
                </Text>
                <Text color="gray.500" mt="4">Klicka för att lära dig mer</Text>
                <Box height="120px" mt={6}>
                  <Liquid 
                    percent={0.4}
                    outline={{
                      border: 2,
                      distance: 4,
                    }}
                    wave={{
                      length: 128,
                    }}
                    color="#B4E4FF"
                  />
                </Box>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="4xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="black" maxW="100vw" maxH="100vh" borderRadius="xl" overflow="hidden">
          <ModalCloseButton color="white" zIndex="10" />
          <Box w="100%" h="100%" p={6}>
            <GlacierChart />
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Glaciers;