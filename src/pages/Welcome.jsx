import React from 'react';
import { Box, Container, Heading, Flex, Link, Circle, Stack, Image } from '@chakra-ui/react';

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
        bgGradient="linear(to-bl, pink.600, red.500, purple.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />

      <Container maxW="container.xl" px={4} py={8} pos="relative">
        <Flex mb={6} gap="-8px">
          <Circle
            size="48px"
            border="2px"
            borderColor="black"
            overflow="hidden"
            backgroundImage="/images/profile.png"
            backgroundSize="cover"
            backgroundPosition="center"
          />
          <Circle
            size="48px"
            border="2px"
            borderColor="black"
            overflow="hidden"
          >
            <Image src="/images/logo.svg" alt="Logo" objectFit="contain"/>
          </Circle>
        </Flex>

        <Heading color="white" fontSize="5xl" fontWeight="bold" mb={8}>
          VÄLKOMMEN,<br />ALICE
        </Heading>

        <Flex justify="flex-end" gap={8}>
          <Stack direction="row" spacing={8}>
            <Link href="#profil" color="white" _hover={{ color: 'gray.300' }}>Profil</Link>
            <Link href="#faq" color="white" _hover={{ color: 'gray.300' }}>FAQ</Link>
            <Link href="#kontakt" color="white" _hover={{ color: 'gray.300' }}>KONTAKT</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
    </Box>
  )
};

export default Welcome;