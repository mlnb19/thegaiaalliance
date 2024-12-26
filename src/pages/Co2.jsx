
import React, { useState } from 'react';
import { Box, Container, Text, SimpleGrid, Flex, Center, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Progress, Button, VStack, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import Navbar from './Navbar';
import { Liquid } from '@ant-design/plots';
import { FaIndustry, FaCar, FaLeaf, FaRecycle } from "react-icons/fa";
import { GiForestCamp, GiFactory, GiWindmill, GiSolarPower } from "react-icons/gi";
import CO2Game from './CO2Game';

function Co2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [personalScore, setPersonalScore] = useState(65);

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
    <Box w="100vw" minH="100vh" bg="#0d0d0d" position="relative" overflow="hidden" pb={16}>
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
      <Container maxW="container.xl" pt={{base: 4, md: "80px"}} position="relative" zIndex={1}>
        <SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
          <Box bg="#111" borderRadius="xl" p={8} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
            <Text color="#FFB4B4" fontSize="sm">CO2 Utsläpp</Text>
            <Text color="white" fontSize="4xl" fontWeight="bold" mt={2}>
              Koldioxid Nivåer
            </Text>
            <SimpleGrid columns={2} spacing={4} mt={8}>
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

        <SimpleGrid columns={{base: 1, md: 2}} spacing={6} mt={6}>
          <Box 
            bg="#111" 
            borderRadius="xl" 
            p={8} 
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
            onClick={() => setShowTips(true)}
            cursor="pointer"
            _hover={{ bg: "#161616" }}
          >
            <Flex align="center" mb={4}>
              <Box as={FaLeaf} color="green.400" fontSize="24px" mr={3}/>
              <Text color="white" fontSize="xl">Minska ditt CO2-avtryck</Text>
            </Flex>
            <Text color="gray.400">Klicka här för tips om hur du kan hjälpa miljön</Text>
          </Box>

          <Box bg="#111" borderRadius="xl" p={8} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
            <Flex align="center" mb={4}>
              <Box as={FaRecycle} color="green.400" fontSize="24px" mr={3}/>
              <Text color="white" fontSize="xl">Ditt Miljöengagemang</Text>
            </Flex>
            <Stat mt={4}>
              <StatLabel color="gray.400">Din Miljöpoäng</StatLabel>
              <StatNumber color="white" fontSize="3xl">{personalScore}/100</StatNumber>
              <StatHelpText color="green.400">
                +5 poäng denna månad
              </StatHelpText>
            </Stat>
            <Progress value={personalScore} colorScheme="green" size="lg" borderRadius="full" mt={4}/>
          </Box>
        </SimpleGrid>

        <Box mt={8}>
          <CO2Game />
        </Box>
      </Container>

      <Modal isOpen={showTips} onClose={() => setShowTips(false)} size="xl">
        <ModalOverlay backdropFilter="blur(10px)"/>
        <ModalContent bg="gray.900" p={6}>
          <ModalHeader color="green.400">Tips för att minska CO2-utsläpp</ModalHeader>
          <ModalCloseButton color="white"/>
          <ModalBody>
            <VStack spacing={4} align="stretch">
              {tips.map((tip, index) => (
                <Flex 
                  key={index}
                  bg="#1a1a1a"
                  p={4}
                  borderRadius="xl"
                  align="center"
                >
                  <Box as={FaLeaf} color="green.400" fontSize="20px" mr={3}/>
                  <Text color="white">{tip}</Text>
                </Flex>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Co2;
