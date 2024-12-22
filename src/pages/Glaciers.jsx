
import React, { useState } from 'react';
import { Box, Container, Text, VStack, HStack, Flex, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';
import Navbar from './Navbar';
import { Liquid } from '@ant-design/plots';
import { FaIcicles, FaMountain } from "react-icons/fa";
import { GiIceberg } from "react-icons/gi";
import GlacierChart from './GlacierChart';

function Glaciers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChattOpen, setIsChattOpen] = useState(false);
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);

  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" position="relative" overflow="hidden">
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
      <Container maxW="container.xl" pt={{base: 4, md: "80px"}} position="relative" zIndex={1}>
        <Flex 
          direction={{base: "column", md: "row"}} 
          gap={6} 
          align="stretch"
        >
          <VStack flex={1} spacing={6}>
            <Box bg="#111" borderRadius="xl" p={8} w="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
              <Text color="#B4E4FF" fontSize="sm">Glaciär Statistik</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2}>
                Glaciärsmältning
              </Text>
              <Text color="gray.500" mt={4}>
                Global förändring i glaciärers massa
              </Text>
            </Box>
            <Box 
              bg="#111" 
              borderRadius="xl" 
              p={8} 
              w="100%"
              flex={1}
              cursor="pointer"
              onClick={() => setIsModalOpen(true)}
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
            >
              <Text color="white" fontSize="2xl" fontWeight="bold">
                Glaciärer har minskat med 40% sedan 1980
              </Text>
              <Text color="gray.500" mt="4">Klicka för att lära dig mer</Text>
              <Box height="200px" mt={6}>
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
          </VStack>

          <VStack flex={1} spacing={6}>
            <Box bg="#111" borderRadius="xl" p={6} w="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
              <Flex align="center" gap={3}>
                <Box as="span" color="cyan.200"><FaIcicles size={24}/></Box>
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  Arktiska Glaciärer
                </Text>
              </Flex>
              <Text color="gray.500" mt={4}>Status: Kritisk</Text>
            </Box>

            <Box bg="#111" borderRadius="xl" p={6} w="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
              <Flex align="center" gap={3}>
                <Box as="span" color="cyan.200"><FaMountain size={24}/></Box>
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  Bergskedjor
                </Text>
              </Flex>
              <Text color="gray.500" mt={4}>Status: Varning</Text>
            </Box>

            <Box bg="#111" borderRadius="xl" p={6} w="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
              <Flex align="center" gap={3}>
                <Box as="span" color="cyan.200"><GiIceberg size={24}/></Box>
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  Grönland
                </Text>
              </Flex>
              <Text color="gray.500" mt={4}>Status: Allvarlig</Text>
            </Box>
          <SimpleGrid columns={2} spacing={6} mt={6}>
              <Box
                bg="#111"
                borderRadius="xl"
                p={6}
                cursor="pointer"
                onClick={() => setIsChattOpen(true)}
                _hover={{ bg: "#1a1a1a" }}
              >
                <Center as="span" color="white" fontSize="2xl" mb={4}>
                  🤖
                </Center>
                <Center color="gray.400" fontSize="l" mt={4} fontFamily={'monospace'}>
                  Chatta med EcoEdith
                </Center>
              </Box>

              <Box
                bg="#111"
                borderRadius="xl"
                p={6}
                cursor="pointer"
                onClick={() => setIsDiscussionOpen(true)}
                _hover={{ bg: "#1a1a1a" }}
              >
                <Center as="span" color="white" fontSize="2xl" mb={4}>
                  💭
                </Center>
                <Center color="gray.400" fontSize="l" mt={4} fontFamily={'monospace'}>
                  Diskussionsfrågor
                </Center>
              </Box>
            </SimpleGrid>
          </VStack>
        </Flex>
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
          <ModalHeader color="cyan.200">❄️ Diskussionsfrågor om Glaciärer</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              {[
                {
                  question: "Varför är glaciärer viktiga för vår planet?",
                  followUp: "Tänk på hur de påverkar havsnivåer och klimatet."
                },
                {
                  question: "Vad händer med djurlivet när glaciärer smälter?",
                  followUp: "Fundera på isbjörnar och andra arktiska djur."
                },
                {
                  question: "Hur påverkar smältande glaciärer människor som bor i närheten?",
                  followUp: "Tänk på dricksvatten och översvämningsrisker."
                },
                {
                  question: "Vad kan vi göra för att bromsa glaciärsmältningen?",
                  followUp: "Diskutera både små och stora åtgärder."
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
