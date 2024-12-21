
import React from 'react';
import { Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, VStack, Link } from '@chakra-ui/react';

function Faq({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg="gray.900" p={4}>
        <ModalHeader color="white">Vanliga Frågor & Kontakt</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Accordion allowToggle>
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
                Du kan börja med små förändringar i din vardag. Kolla in våra tips i appen!
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <VStack mt={8} spacing={4} align="start">
            <Text color="white" fontSize="xl" fontWeight="bold">Kontakta Oss</Text>
            <Text color="gray.400">Email: klimat@exempel.se</Text>
            <Text color="gray.400">Telefon: 08-123 45 67</Text>
            <Text color="gray.400">Adress: Klimatgatan 1, 123 45 Stockholm</Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Faq;
