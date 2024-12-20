
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
        bgGradient="linear(to-bl, blue.600, cyan.500, blue.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Heading color="white" fontSize="9xl" fontWeight="bold" mb={8} fontFamily="bungee" marginTop="75px">
          VÄLKOMMEN,<br />ALICE
        </Heading>

        <Flex justify="flex-end" gap={8}>
          <Stack direction="row" spacing={8}>
            <Link href="/sealevels" color="white" fontFamily="monospace" fontSize="20px" _hover={{ color: 'gray.300' }}>HAVSNIVÅER</Link>
            <Link href="/glaciers" color="white" fontFamily="monospace" fontSize="20px" _hover={{ color: 'gray.300' }}>GLACIÄRER</Link>
            <Link href="/co2" color="white" fontFamily="monospace" fontSize="20px" _hover={{ color: 'gray.300' }}>CO2</Link>
            <Link href="/temperature" color="white" fontFamily="monospace" fontSize="20px" _hover={{ color: 'gray.300' }}>TEMPERATUR</Link>
          </Stack>
        </Flex>

        <Box position="absolute" bottom="40px" left="50%" transform="translateX(-50%)" textAlign="center">
          <motion.div
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              color: "white",
              fontSize: "40px",
            }}
          >
            ↓
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Welcome;
