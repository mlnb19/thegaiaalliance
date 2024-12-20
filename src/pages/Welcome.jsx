import React from 'react';
import { Box, Container, Heading, Flex, Link, Circle, Stack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Welcome() {
  return (
    <Box minH="100vh" bg="black" pos="relative" overflow="hidden" p="50px">
  <Box border="1px solid" borderColor="gray" borderRadius="50px" w="100%" h="85vh" pos="relative">
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, blue.600, green.500, blue.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />

      <Container maxW="container.xl" px={4} py={8} pos="relative">
        <Flex mb={6} gap="-8px">
                    <Circle
            size="100px"
            border="2px"
            borderColor="black"
            overflow="hidden"
          >
            <Image src="/images/logo.svg" alt="Logo" objectFit="contain"/>
          </Circle>
          <Box
            width="110px"
            height="75px"
            position="relative"
            clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            overflow="hidden"
            border="2px"
            borderColor="black"
            marginLeft= "-35px"
            marginTop ="25px"
          >
            <Image 
              src="/images/profile.png" 
              alt="Profile"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>

        </Flex>

        <Heading color="white" fontSize="9xl" fontWeight="bold" mb={8} fontFamily="bungee" marginTop="75px">
          VÄLKOMMEN,<br />ALICE
        </Heading>

        <Flex justify="flex-end" gap={8}>
          <Stack direction="row" spacing={8}>
            <Link href="#profil" color="white" fontFamily="monospace" fontSize="20px" _hover={{ color: 'gray.300' }}>Profil</Link>
            <Link href="#faq" color="white" fontFamily="monospace" fontSize="20px" _hover={{ color: 'gray.300' }}>FAQ</Link>
            <Link href="#kontakt" color="white" fontFamily="monospace" fontSize="20px" _hover={{ color: 'gray.300' }}>KONTAKT</Link>
          </Stack>
        </Flex>

        <Box position="absolute" bottom="40px" left="50%" transform="translateX(-50%)" textAlign="center">
          <Box
            as={motion.div}
            animation="bounce"
            animate={{
              y: [0, 8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            color="white"
            fontSize="40px"
          >
            ↓
          </Box>
        </Box>
      </Container>
    </Box>
    </Box>
  )
};

export default Welcome;