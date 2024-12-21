
import React from 'react';
import { Box, Container, Heading, Stack, Link, Flex, Image } from '@chakra-ui/react';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaQuestionCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsQuestionSquare } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Welcome = ({ setIsFaqOpen }) => {
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
      <Container maxW="container.xl" position="relative" zIndex={1} mt="50px">
        <Image 
          src="/images/profile.png" 
          alt="Logo" 
          boxSize="150px" // Bredd och höjd
          borderRadius="full" // Gör bilden rund
          objectFit="cover" // Ser till att bilden inte sträcks ut
        />
        <Heading color="white" fontSize="9xl" fontWeight="bold" mb={8} fontFamily="bungee" marginTop="75px">
          VÄLKOMMEN,<br />ALICE
        </Heading>

        <Flex justify="flex-end" gap={8}>
          <Stack direction="row" spacing={8}>
            <Link href="/sealevels" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="14px" fontWeight="bold" _hover={{ color: 'blue.300' }}><Box as={PiWaves} size={14} strokeWidth={2} />HAVSNIVÅER</Link>
            <Link href="/glaciers" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="14px" fontWeight="bold" _hover={{ color: 'cyan.300' }}><Box as={GiMountainCave} size={14} />GLACIÄRER</Link>
            <Link href="/co2" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="14px" fontWeight="bold" _hover={{ color: 'orange.300' }}><Box as={GiSmokeBomb} size={14} />CO2</Link>
            <Link href="/temperature" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="14px" fontWeight="bold" _hover={{ color: 'red.300' }}><Box as={TbTemperatureCelsius} size={14} strokeWidth={2} />TEMPERATUR</Link>
            <Link href="/profile" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="14px" fontWeight="bold" _hover={{ color: 'green.300' }} borderLeft="1px" borderColor="white" paddingLeft="25px"><Box as={FiUser} size={14} />PROFIL</Link>
            <Box as="button" onClick={() => setIsFaqOpen(true)} display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="14px" fontWeight="bold" _hover={{ color: 'green.300' }}><Box as={BsQuestionSquare} size={16} />FRÅGOR OCH KONTAKT</Box>
            <Link href="/faq" display="flex" alignItems="center" gap={2} color="white" fontFamily="monospace" fontSize="14px" fontWeight="bold" _hover={{ color: 'green.300' }}><Box as={RiLogoutCircleRLine} size={14} />LOGGA UT</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Welcome;
