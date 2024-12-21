
import React from 'react';
import { Box, Container, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import Navbar from './Navbar';

function Faq() {
  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" position="relative" overflow="hidden">
      <Navbar />
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, yellow.400, orange.400)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" pt="80px" position="relative" zIndex={1}>
        <Text color="white" fontSize="4xl" mb={8}>Vanliga Frågor</Text>
        <Accordion allowToggle>
          <AccordionItem border="none" mb={4}>
            <AccordionButton bg="#111" color="white" _hover={{ bg: '#222' }} borderRadius="xl">
              <Box flex="1" textAlign="left">
                Vad är syftet med denna applikation?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} bg="#111" color="gray.400" mt={2} borderRadius="xl">
              Denna applikation visar klimatförändringar genom olika visualiseringar.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
}

export default Faq;
