
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
  Box,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link
} from '@chakra-ui/react';
import { FaLightbulb, FaBiking, FaCarrot, FaGlobeEurope, FaUsers, FaShoppingBag, FaShare, FaLeaf, FaHandPeace, FaBook } from 'react-icons/fa';

function Faq({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg="gray.900" p={6} maxH="80vh" overflowY="auto">
        <ModalHeader color="cyan.200">🌍 FAQ och kontaktinformation 🌱</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Accordion allowToggle mb={8}>
            <AccordionItem border="none" mb={4}>
              <AccordionButton bg="#111" color="white" _hover={{ bg: '#222' }} borderRadius="xl">
                <Box flex="1" textAlign="left">
                  Vad är syftet med denna applikation?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bg="#111" color="gray.400" mt={2} borderRadius="xl">
                Denna applikation visualiserar klimatförändringar och dess effekter genom interaktiva visualiseringar och spel.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none" mb={4}>
              <AccordionButton bg="#111" color="white" _hover={{ bg: '#222' }} borderRadius="xl">
                <Box flex="1" textAlign="left">
                  Hur ofta uppdateras datan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bg="#111" color="gray.400" mt={2} borderRadius="xl">
                Datan uppdateras regelbundet baserat på senaste klimatforskningen och mätningar.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none" mb={4}>
              <AccordionButton bg="#111" color="white" _hover={{ bg: '#222' }} borderRadius="xl">
                <Box flex="1" textAlign="left">
                  Hur kan jag bidra till klimatarbetet?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bg="#111" color="gray.400" mt={2} borderRadius="xl">
                Du kan börja med små förändringar i din vardag. Kolla in våra tips nedan!
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <VStack mt={8} spacing={4} align="start">
            <Text color="white" fontSize="xl" fontWeight="bold">Kontakta Oss</Text>
            <Text color="gray.400">Email: klimat@exempel.se</Text>
            <Text color="gray.400">Telefon: 08-123 45 67</Text>
            <Text color="gray.400">Adress: Klimatgatan 1, 123 45 Stockholm</Text>
          </VStack>
          <VStack spacing={4} mt={8} align="stretch">
            {[
              { title: "1. Släck och stäng av", text: "Släck lampor när du lämnar ett rum.\nStäng av elektroniska prylar istället för att låta dem stå i standby-läge.", icon: FaLightbulb },
              { title: "2. Välj cykeln eller gå", text: "Cykla eller gå istället för att bli skjutsad i bil – det är både bättre för miljön och hälsan.", icon: FaBiking },
              { title: "3. Ät smart", text: "Testa en köttfri dag i veckan.\nMinska matsvinnet genom att ta bara så mycket mat du orkar äta.", icon: FaCarrot },
              { title: "4. Ta hand om vår planet", text: "Plocka upp skräp om du ser det.\nHjälp till vid skolprojekt som handlar om miljön.", icon: FaGlobeEurope },
              { title: "5. Var med och påverka", text: "Snacka med din skola om att spara energi eller minska plastanvändningen.", icon: FaUsers },
              { title: "6. Tänk på vad du köper", text: "Använd din vattenflaska istället för engångsflaskor.\nHandla begagnade kläder.", icon: FaShoppingBag },
              { title: "7. Dela med dig", text: "Prata med familj och kompisar om vad du lär dig om klimatet.", icon: FaShare },
              { title: "8. Använd mindre plast", text: "Ta med matlåda och återanvändbara bestick.", icon: FaLeaf },
              { title: "9. Stå upp för miljön", text: "Delta i skoldiskussioner om miljön.", icon: FaHandPeace },
              { title: "10. Var nyfiken", text: "Läs om hur klimatförändringar påverkar världen.", icon: FaBook }
            ].map((tip, index) => (
              <Box 
                key={index}
                p={4} 
                bg="whiteAlpha.100" 
                borderRadius="xl" 
                _hover={{ transform: 'scale(1.01)', bg: 'whiteAlpha.200' }}
                transition="all 0.2s"
              >
                <Box display="flex" alignItems="center" gap={3}>
                  <Icon as={tip.icon} color="cyan.200" boxSize={6} />
                  <Text fontWeight="bold" color="white">{tip.title}</Text>
                </Box>
                <Text color="gray.400" mt={2} fontSize="sm" whiteSpace="pre-line">
                  {tip.text}
                </Text>
              </Box>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Faq;
