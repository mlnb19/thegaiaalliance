
import React from 'react';
import { Box, Container, Heading, Stack, Link, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaUserCircle, FaQuestionCircle } from "react-icons/fa";

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
            <Link href="/sealevels" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="16px" fontWeight="bold" _hover={{ color: 'gray.300' }}><PiWaves size={20} />HAVSNIVÅER</Link>
            <Link href="/glaciers" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="16px" fontWeight="bold" _hover={{ color: 'gray.300' }}><GiMountainCave size={20} />GLACIÄRER</Link>
            <Link href="/co2" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="16px" fontWeight="bold" _hover={{ color: 'gray.300' }}><GiSmokeBomb size={20} />CO2</Link>
            <Link href="/temperature" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="16px" fontWeight="bold" _hover={{ color: 'gray.300' }}><TbTemperatureCelsius size={20} />TEMPERATUR</Link>
            <Link href="/profile" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="16px" fontWeight="bold" _hover={{ color: 'gray.300' }} borderLeft="1px" borderColor="white" paddingLeft="25px"><FaUserCircle size={20} />PROFIL</Link>
            <Link href="/faq" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="16px" fontWeight="bold" _hover={{ color: 'gray.300' }}><FaQuestionCircle size={20} />FAQ</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Welcome;
