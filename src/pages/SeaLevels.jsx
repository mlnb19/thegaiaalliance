import React, { useState } from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Center, Image, Avatar, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalCloseButton, Link } from '@chakra-ui/react';
import Navbar from './Navbar';
import { Liquid } from '@ant-design/plots';
import { GiBrain, GiNotebook } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import PopupModal from './PopupModal';



function Startpage() {
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
        bgGradient="linear(to-bl, blue.600, cyan.500, blue.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px" >
          {/* Left Column - Major Feature */}
          <GridItem colSpan={5} >
            <Box bg="#111" borderRadius="xl" p={8} h="100%" boxShadow="3px 2px 7px rgba(61, 61, 61)"
              border="0.5px">
              <Text color="#ff6b6b" fontSize="sm">Havsnivån har ökat med 30% de senaste 10 åren</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2} mb={4}>
                Höjda Havsnivåer
              </Text>
              <Text color="gray.300" mb={8}>
                Den globala höjningen av havsnivåerna hotar miljontals människor med översvämningar, förlust av hem och ekosystem, och utgör ett allvarligt hot mot kustsamhällen och låglandsområden världen över.<br /><br />Visste du att du kan göra skillnad? <Link color='blue'>Klicka för att lära dig hur!</Link>
              </Text>
              <Box borderRadius="xl" overflow="hidden" mt="auto">
                <Image src="/images/Ocean.jpg" alt="Feature preview" w="100%" />
              </Box>
            </Box>
          </GridItem>

          {/* Middle Column */}
          <GridItem colSpan={4}>
            <Flex direction="column" gap={6} h="100%">
              {/* Trusted by Users */}


              {/* Bottom Feature */}

                            <Box bg="#0d0d0d" borderRadius="xl" p={8} boxShadow="0px 2px 7px rgba(61, 61, 61)" border="0.5px">
                <Text color="white" fontSize="4xl" fontWeight="bold" mb={4}>
                  Rising Sea Levels
                </Text>
                <Text color="gray.500">The global sea level rise threatens coastal communities worldwide</Text>
                <Flex gap={2} mt={4}>
                  <Avatar size="md" src="/images/profile.png" />
                  <Avatar size="md" src="/images/profile.png" />
                  <Avatar size="md" src="/images/profile.png" />
                </Flex>
              </Box>
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="yellow.400"><GiNotebook /></Box>
                  <Text fontSize="2xl" fontWeight="bold" bgGradient='linear(to-l, #1E3F66, #91BAD6 )'
                    bgClip='text'>
                    Spel: Memory
                  </Text>
                </Flex>
              </Box>

              {/* Feature Name with Gradient */}
              <Box 
                borderRadius="xl" 
                p={6}
                bgGradient="linear(to-r,#73A5C6, #1E3F66)"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
              >
                <Text color="white" fontSize="2xl" fontWeight="bold">
                  ☀️ Spel: Nånting
                </Text>
              </Box>

              {/* Bottom Feature */}
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="yellow.400" fontSize="xl"><GiBrain /></Box>
                  <Text bgGradient='linear(to-l, #1E3F66, #91BAD6)'
                    bgClip='text' fontSize="2xl" fontWeight="bold">
                    Spel: Quiz
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </GridItem>

          {/* Right Column */}
          <GridItem colSpan={3}>
            <Flex direction="column" gap={6} h="100%">
              {/* Top Features */}
              <SimpleGrid columns={2} gap={6}>
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    <FaRegUserCircle />
                  </Center>
                  <Center color="gray.400" fontSize="l" mt={4} fontFamily={'monospace'}>
                    LOREM IPSUM
                  </Center>
                </Box>
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    <AiOutlineLogout />
                  </Center>
                  <Center color="gray.400" fontSize="l" mt={4} fontFamily={'monospace'}>
                    LOREM IPSUM
                  </Center>
                </Box>
              </SimpleGrid>

    {/* Percentage Display */}
    <Box 
      boxShadow="-1px 0px 7px rgba(61, 61, 61)"
      border="0.5px"
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
        Havsnivån har ökat med 30% de senaste 10 åren
      </Text>
      <Text color="gray.500" mt="4">Klicka för att lära dig mer om detta</Text>
      <Box height="120px" mt={6}>
        <Liquid 
          percent={0.3}
          outline={{
            border: 2,
            distance: 4,
          }}
          wave={{
            length: 128,
          }}
          statistic={false}
          style={{
            height: '100%',
          }}
        />
      </Box>
    </Box>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="4xl" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent 
        bg="black" 
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.5)"
        maxW="100vw"
        maxH="100vh"
        borderRadius="xl"
        overflow="hidden"
      >
        <ModalCloseButton color="white" zIndex="10" />
        <Box w="100%" h="100%" p={6}>
          <PopupModal />
        </Box>
      </ModalContent>
    </Modal>
    </Flex>
    </GridItem>
    </Grid>
    </Container>
    </Box>
  );
}

export default Startpage;