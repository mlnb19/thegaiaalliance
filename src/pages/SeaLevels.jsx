import React, { useState } from 'react';
import QuizGame from './QuizGame';
import RecyclingGame from './RecyclingGame';
import { Box, Container, Text, Grid, GridItem, Flex, Center, Image, Avatar, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, VStack, Icon, Link } from '@chakra-ui/react';
import MemoryGame from './MemoryGame';
import Navbar from './Navbar';
import { Liquid, Area } from '@ant-design/plots';
import { GiBrain, GiNotebook } from "react-icons/gi";
import SeaLevelChart from './SeaLevelChart';
import { FaRegUserCircle, FaLightbulb, FaBiking, FaCarrot, FaGlobeEurope, FaUsers, FaShoppingBag, FaShare, FaLeaf, FaHandPeace, FaBook } from "react-icons/fa";
import { AiOutlineLogout } from 'react-icons/ai';
import PopupModal from './PopupModal';



function Startpage({ setIsFaqOpen }) {
  const [isTipsModalOpen, setIsTipsModalOpen] = useState(false);
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isRecyclingModalOpen, setIsRecyclingModalOpen] = useState(false);

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
        bgGradient="linear(to-bl, blue.600, cyan.500, blue.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"/>

      <Container
        maxW="container.xl"
        position="relative"
        zIndex={1}>

      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={6} h="600px">

      {/* Left Column - Major Feature */}
        <GridItem colSpan={5} >
          <Box
            bg="#111"
            borderRadius="xl"
            p={8}
            h="100%"
            boxShadow="3px 2px 7px rgba(61, 61, 61)"
            border="0.5px">

            <Text
              color="#ff6b6b"
              fontSize="sm">
                Havsnivån har ökat med 30% de senaste 10 åren
            </Text>

            <Text
              color="white"
              fontSize="4xl"
              fontWeight="bold"
              mt={2}
              mb={4}>
                Höjda Havsnivåer
            </Text>

            <Text
              color="gray.300"
              mb={8}>
                Den globala höjningen av havsnivåerna hotar miljontals                    människor med översvämningar, förlust av hem och                          ekosystem, och utgör ett allvarligt hot mot kustsamhällen                 och låglandsområden världen över.
                <br />
                <br />
                <strong>Men vet du att du kan göra skillnad?</strong>
                <br />             
                <Link
                  color='blue'
                  onClick={() => setIsTipsModalOpen(true)}
                  _hover={{ textDecoration: 'underline' }}>
                    Klicka här för att lära dig hur!
                </Link>
              </Text>

              <Box
                borderRadius="xl"
                overflow="hidden" 
                mt="auto">

                <Image
                  src="/images/Ocean.jpg"
                  alt="Feature preview"
                  w="100%" />
              </Box>
          </Box>
        </GridItem>

      {/* Middle Column */}
        <GridItem
          colSpan={4}>

          <Flex
            direction="column"
            gap={6} h="100%">

          <Box
            bg="#0d0d0d"
            borderRadius="xl"
            p={8} 
            boxShadow="0px 2px 7px rgba(61, 61, 61)" 
            border="0.5px"
            cursor="pointer"
            onClick={() => setIsChartModalOpen(true)}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
          >
            <Text 
              color="white"
              fontSize="3xl"
              fontWeight="bold"
              mb={4}>
              Havsnivåns förändring
            </Text>

            <Text 
              color="gray.500"
              mb={4}>
              Se hur havet har förändrats sen 1900-talet
            </Text>

            <Box position="relative" height="112px" overflow="hidden" borderRadius="xl">
              <Image
                src="/images/horizon.jpg"
                alt="Stadsvy"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                zIndex={1}
              />
            </Box>
          </Box>

          <Box 
            bg="#111" 
            borderRadius="xl" 
            p={6} 
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">

            <Flex
              align="center"
              gap={3}>

              <Box 
                as="span" 
                color="yellow.400">
                <GiNotebook />
              </Box>

              <Text 
                fontSize="2xl" 
                fontWeight="bold"
                bgGradient='linear(to-l, blue, #91BAD6 )'
                bgClip='text'
                cursor="pointer"
                onClick={() => setIsMemoryModalOpen(true)}>
                  Spel: Memory
              </Text>
            </Flex>
          </Box>

          <Modal isOpen={isMemoryModalOpen} onClose={() => setIsMemoryModalOpen(false)} size="xl">
            <ModalOverlay backdropFilter="blur(10px)" />
            <ModalContent bg="gray.900" p={4}>
              <ModalCloseButton color="white" />
              <MemoryGame />
            </ModalContent>
          </Modal>

      {/* Feature Name with Gradient */}
        <Box 
          borderRadius="xl" 
          p={6}
          bgGradient="linear(to-l, blue, #91BAD6)"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">

          <Text 
            color="white" 
            fontSize="2xl" 
            fontWeight="bold"
            cursor="pointer"
            onClick={() => setIsRecyclingModalOpen(true)}>
              ♻️ Spel: Återvinning
          </Text>

          <Modal isOpen={isRecyclingModalOpen} onClose={() => setIsRecyclingModalOpen(false)} size="xl">
            <ModalOverlay backdropFilter="blur(10px)" />
            <ModalContent bg="gray.900" p={4}>
              <ModalCloseButton color="white" />
              <RecyclingGame />
            </ModalContent>
          </Modal>
        </Box>

      {/* Bottom Feature */}
        <Box 
          bg="#111"
          borderRadius="xl"
          p={6} 
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">

          <Flex 
            align="center"
            gap={3}>

            <Box
              as="span"
              color="yellow.400"
              fontSize="xl">
                <GiBrain />
            </Box>

            <Text 
              bgGradient='linear(to-l, blue, #91BAD6)'
              bgClip='text' 
              fontSize="2xl"
              fontWeight="bold"
              cursor="pointer"
              onClick={() => setIsQuizModalOpen(true)}>
                Spel: Quiz
            </Text>

            <Modal isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} size="xl">
              <ModalOverlay backdropFilter="blur(10px)" />
              <ModalContent bg="gray.900" p={4}>
                <ModalCloseButton color="white" />
                <QuizGame />
              </ModalContent>
            </Modal>
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
                    🌊
                  </Center>
                  <Center color="gray.400" fontSize="l" mt={4} fontFamily={'monospace'}>
                    Diskussions-<br/>frågor
                  </Center>
                </Box>
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    🌊
                  </Center>
                  <Center color="gray.400" fontSize="l" mt={4} fontFamily={'monospace'}>
                    Chatt
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
    >
      <Text color="white" fontSize="2xl" fontWeight="bold">
        Visste du detta om havsnivån? 🌊
      </Text>
      <Text color="gray.500" mt="4">
        • En höjning på bara 1 meter kan översvämma områden där 1 miljard människor bor! 😮
        <br/>
        • Glaciärerna smälter snabbare nu än någonsin tidigare i historien ❄️
        <br/>
        • Visste du att havsnivån stiger med 3,3 mm per år?
        <br/>
        • År 2100 kan havsnivån vara 1 meter högre
      </Text>
    </Box>

    <Modal isOpen={isChartModalOpen} onClose={() => setIsChartModalOpen(false)} size="4xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg="gray.900" p={4} maxH="80vh" display="flex" alignItems="center" justifyContent="center">
        <ModalCloseButton color="white" />
        <Box w="100%" h="600px">
          <SeaLevelChart />
        </Box>
      </ModalContent>
    </Modal>

    <Modal isOpen={isTipsModalOpen} onClose={() => setIsTipsModalOpen(false)} size="4xl">
                  <ModalOverlay backdropFilter="blur(10px)" />
                  <ModalContent bg="gray.900" p={6} maxH="80vh" overflowY="auto">
                    <ModalHeader color="cyan.200">🌍 10 Coola sätt att rädda planeten! 🌱</ModalHeader>
                    <ModalCloseButton color="white" />
                    <ModalBody>
                      <VStack spacing={4} align="stretch">
                        {[
                          { title: "1. Släck och stäng av", text: "Släck lampor när du lämnar ett rum.\nStäng av elektroniska prylar istället för att låta dem stå i standby-läge.", icon: FaLightbulb },
                          { title: "2. Välj cykeln eller gå", text: "Cykla eller gå istället för att bli skjutsad i bil – det är både bättre för miljön och hälsan.", icon: FaBiking },
                          { title: "3. Ät smart", text: "Testa en köttfri dag i veckan – att äta mer grönsaker och mindre kött är bra för miljön.\nMinska matsvinnet genom att ta bara så mycket mat du orkar äta.", icon: FaCarrot },
                          { title: "4. Ta hand om vår planet", text: "Plocka upp skräp om du ser det på vägen hem eller i skolan.\nHjälp till vid skolprojekt som handlar om miljön.", icon: FaGlobeEurope },
                          { title: "5. Var med och påverka", text: "Snacka med din skola om att spara energi eller minska plastanvändningen.", icon: FaUsers },
                          { title: "6. Tänk på vad du köper", text: "Använd din vattenflaska istället för att köpa engångsflaskor.\nHandla begagnade kläder eller byta kläder med kompisar.", icon: FaShoppingBag },
                          { title: "7. Dela med dig av kunskap", text: "Prata med familj och kompisar om vad du lär dig om klimatet i skolan.\nGör ett TikTok eller inlägg om miljön.", icon: FaShare },
                          { title: "8. Använd mindre plast", text: "Ta med matlåda och återanvändbara bestick istället för engångsplast.\nSäg nej till sugrör och plastpåsar när det går.", icon: FaLeaf },
                          { title: "9. Stå upp för miljön", text: "Delta i skoldiskussioner och föreslå idéer för att göra skolan mer miljövänlig.", icon: FaHandPeace },
                          { title: "10. Var nyfiken och lär dig mer", text: "Läs om hur klimatförändringar påverkar havsnivåerna och andra delar av världen.", icon: FaBook }
                        ].map((tip, index) => (
                          <Box 
                            key={index}
                            p={4} 
                            bg="whiteAlpha.100" 
                            borderRadius="xl" 
                            _hover={{ transform: 'scale(1.01)', bg: 'whiteAlpha.200' }}
                            transition="all 0.2s"
                          >
                            <Flex align="center" gap={3}>
                              <Icon as={tip.icon} color="cyan.200" boxSize={6} />
                              <Text fontWeight="bold" color="white">{tip.title}</Text>
                            </Flex>
                            <Text color="gray.400" mt={2} fontSize="sm" whiteSpace="pre-line">
                              {tip.text}
                            </Text>
                          </Box>
                        ))}
                      </VStack>
                    </ModalBody>
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