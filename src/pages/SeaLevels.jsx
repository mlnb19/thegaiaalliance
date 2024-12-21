
import React, { useState } from 'react';
import { Box, Container, Text, Flex, Image, Avatar, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, VStack, Icon, Link } from '@chakra-ui/react';
import Navbar from './Navbar';
import { Liquid } from '@ant-design/plots';
import { GiBrain, GiNotebook } from "react-icons/gi";
import SeaLevelChart from './SeaLevelChart';
import { FaRegUserCircle, FaLightbulb, FaBiking, FaCarrot, FaGlobeEurope, FaUsers, FaShoppingBag, FaShare, FaLeaf, FaHandPeace, FaBook } from "react-icons/fa";
import { AiOutlineLogout } from 'react-icons/ai';
import PopupModal from './PopupModal';

function Startpage() {
  const [isTipsModalOpen, setIsTipsModalOpen] = useState(false);
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);

  return (
    <Box w="100vw" minH="100vh" bg="#0d0d0d" position="relative" overflow="hidden">
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
      <Container maxW="container.xl" position="relative" zIndex={1} py={{base: 4, md: 8}}>
        <Flex direction={{base: "column", md: "row"}} gap={6}>
          {/* Main Content */}
          <Box flex="1" bg="#111" borderRadius="xl" p={{base: 4, md: 8}} boxShadow="3px 2px 7px rgba(61, 61, 61)" border="0.5px">
            <Text color="#ff6b6b" fontSize={{base: "xs", md: "sm"}}>Havsnivån har ökat med 30% de senaste 10 åren</Text>
            <Text color="white" fontSize={{base: "2xl", md: "4xl"}} fontWeight="bold" mt={2} mb={4}>
              Höjda Havsnivåer
            </Text>
            <Text color="gray.300" mb={8} fontSize={{base: "sm", md: "md"}}>
              Den globala höjningen av havsnivåerna hotar miljontals människor med översvämningar, förlust av hem och ekosystem, och utgör ett allvarligt hot mot kustsamhällen och låglandsområden världen över.<br /><br />
              Visste du att du kan göra skillnad? <Link color='blue' onClick={() => setIsTipsModalOpen(true)} _hover={{ textDecoration: 'underline' }}>Klicka här för att lära dig hur!</Link>
            </Text>
            <Box borderRadius="xl" overflow="hidden">
              <Image src="/images/Ocean.jpg" alt="Feature preview" w="100%" />
            </Box>
          </Box>

          {/* Side Content */}
          <Flex direction="column" gap={4} w={{base: "100%", md: "350px"}}>
            <Box bg="#111" borderRadius="xl" p={4} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
              <Text fontSize={{base: "xl", md: "2xl"}} fontWeight="bold" color="white" mb={2}>
                Spel och Aktiviteter
              </Text>
              <SimpleGrid columns={2} gap={4}>
                <Box p={3} bg="whiteAlpha.100" borderRadius="lg" _hover={{bg: "whiteAlpha.200"}}>
                  <Box as={GiNotebook} color="yellow.400" size="24px" mb={2}/>
                  <Text color="white" fontSize={{base: "sm", md: "md"}}>Memory</Text>
                </Box>
                <Box p={3} bg="whiteAlpha.100" borderRadius="lg" _hover={{bg: "whiteAlpha.200"}}>
                  <Box as={GiBrain} color="yellow.400" size="24px" mb={2}/>
                  <Text color="white" fontSize={{base: "sm", md: "md"}}>Quiz</Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Box 
              bg="#111" 
              borderRadius="xl" 
              p={4} 
              cursor="pointer"
              onClick={() => setIsChartModalOpen(true)}
              _hover={{ transform: 'scale(1.02)' }}
              transition="transform 0.2s"
            >
              <Text color="white" fontSize={{base: "lg", md: "xl"}} fontWeight="bold">
                Havsnivåns förändring
              </Text>
              <Text color="gray.500" fontSize={{base: "sm", md: "md"}} mt={2}>
                Statistik om havsnivån sen 1880
              </Text>
              <Box height="120px" mt={4}>
                <Liquid 
                  percent={0.3}
                  outline={{border: 2, distance: 4}}
                  wave={{length: 128}}
                  statistic={false}
                />
              </Box>
            </Box>
          </Flex>
        </Flex>

        {/* Modals */}
        <Modal isOpen={isChartModalOpen} onClose={() => setIsChartModalOpen(false)} size="4xl">
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent bg="gray.900" p={6} maxW="90vw">
            <ModalCloseButton color="white" />
            <Box w="100%" h={{base: "400px", md: "600px"}}>
              <SeaLevelChart />
            </Box>
          </ModalContent>
        </Modal>

        <Modal isOpen={isTipsModalOpen} onClose={() => setIsTipsModalOpen(false)} size="4xl">
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent bg="gray.900" p={6} maxH="80vh" overflowY="auto">
            <ModalHeader color="cyan.200" fontSize={{base: "xl", md: "2xl"}}>
              🌍 10 Coola sätt att rädda planeten! 🌱
            </ModalHeader>
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
                      <Icon as={tip.icon} color="cyan.200" boxSize={{base: 5, md: 6}} />
                      <Text fontWeight="bold" color="white" fontSize={{base: "sm", md: "md"}}>{tip.title}</Text>
                    </Flex>
                    <Text color="gray.400" mt={2} fontSize={{base: "xs", md: "sm"}} whiteSpace="pre-line">
                      {tip.text}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}

export default Startpage;
