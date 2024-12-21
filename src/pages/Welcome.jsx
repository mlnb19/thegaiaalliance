
import React from 'react';
import { Box, Container, Heading, Stack, Link, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <Box bg="#0d0d0d" minH="100vh" position="relative" w="100vw" overflow="hidden" m="0" p="0">
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, green.600, blue.500, red.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <img src="/images/profile.png" alt="Logo" width="25%" height="auto" />
        <Heading color="white" fontSize="9xl" fontWeight="bold" mb={8} fontFamily="bungee" marginTop="75px">
          VÄLKOMMEN,<br />ALICE
        </Heading>

        <Flex justify="flex-end" gap={8}>
          <Stack direction="row" spacing={8}>
            <Link href="/sealevels" color="white" fontFamily="monospace" fontSize="16px" _hover={{ color: 'gray.300' }}>HAVSNIVÅER</Link>
            <Link href="/glaciers" color="white" fontFamily="monospace" fontSize="16px" _hover={{ color: 'gray.300' }}>GLACIÄRER</Link>
            <Link href="/co2" color="white" fontFamily="monospace" fontSize="16px" _hover={{ color: 'gray.300' }}>CO2</Link>
            <Link href="/temperature" color="white" fontFamily="monospace" fontSize="16px" _hover={{ color: 'gray.300' }}>TEMPERATUR</Link>
            <Link href="/profile" color="white" fontFamily="monospace" fontSize="16px" _hover={{ color: 'gray.300' }} borderLeft="1px" borderColor="white" paddingLeft="25px" color="white" >PROFIL</Link>
            <Link href="/faq" color="white" fontFamily="monospace" fontSize="16px" _hover={{ color: 'gray.300' }}>FAQ</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Welcome;
