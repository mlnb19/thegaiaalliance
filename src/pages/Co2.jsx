
import React, { useState } from 'react';
import { Box, Container, Text, SimpleGrid, Flex, Center, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';
import Navbar from './Navbar';
import { Liquid } from '@ant-design/plots';
import { FaIndustry, FaCar } from "react-icons/fa";
import { GiForestCamp, GiFactory } from "react-icons/gi";

function Co2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" position="relative" overflow="hidden">
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
      <Container maxW="container.xl" pt="80px">
        <SimpleGrid columns={2} spacing={6}>
          <Box bg="#111" borderRadius="xl" p={8} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
            <Text color="#FFB4B4" fontSize="sm">CO2 Utsläpp</Text>
            <Text color="white" fontSize="4xl" fontWeight="bold" mt={2}>
              Koldioxid Nivåer
            </Text>
            <SimpleGrid columns={2} spacing={4} mt={8}>
              <Flex align="center" bg="#1a1a1a" p={4} borderRadius="lg">
                <Box as="span" color="orange.300" mr={3}><FaIndustry size={24}/></Box>
                <Text color="white">Industriella Utsläpp</Text>
              </Flex>
              <Flex align="center" bg="#1a1a1a" p={4} borderRadius="lg">
                <Box as="span" color="orange.300" mr={3}><FaCar size={24}/></Box>
                <Text color="white">Transport</Text>
              </Flex>
              <Flex align="center" bg="#1a1a1a" p={4} borderRadius="lg">
                <Box as="span" color="orange.300" mr={3}><GiForestCamp size={24}/></Box>
                <Text color="white">Skogsavverkning</Text>
              </Flex>
              <Flex align="center" bg="#1a1a1a" p={4} borderRadius="lg">
                <Box as="span" color="orange.300" mr={3}><GiFactory size={24}/></Box>
                <Text color="white">Fabriker</Text>
              </Flex>
            </SimpleGrid>
          </Box>
          
          <Box 
            bg="#111" 
            borderRadius="xl" 
            p={8} 
            cursor="pointer"
            onClick={() => setIsModalOpen(true)}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
          >
            <Text color="white" fontSize="2xl" fontWeight="bold">
              CO2 nivåer har ökat med 45% sedan 1990
            </Text>
            <Text color="gray.500" mt="4">Klicka för att lära dig mer</Text>
            <Center height="300px" mt={6}>
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
            </Center>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Co2;
