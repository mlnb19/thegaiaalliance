
import React, { useState } from 'react';
import { Box, Container, Heading, Stack, Link, Flex, Image, Input, Button, Text, VStack, keyframes, ScaleFade, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaLeaf, FaGlobeAmericas, FaTree } from 'react-icons/fa';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FiUser, FiMenu } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";
import { useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Welcome = ({ setIsFaqOpen }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'alice' && password === 'alice') {
      setShowWelcome(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        setError('');
      }, 1500);
    } else {
      setError('Fel användarnamn eller lösenord');
    }
  };

  if (!isLoggedIn) {
    return (
      <Box bg="#0d0d0d" minH="100vh" display="flex" alignItems="center" justifyContent="center" position="relative">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="radial(circle at 50% 50%, green.900, transparent)"
          opacity={0.4}
        />
        
        <ScaleFade in={true} initialScale={0.9}>
          <VStack 
            spacing={6} 
            bg="blackAlpha.600" 
            p={{ base: 4, md: 8 }}
            borderRadius="xl" 
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            maxW={{ base: "90%", md: "400px" }}
            w="100%"
          >
            <Box 
              animation={`${float} 3s ease-in-out infinite`}
              display="flex"
              alignItems="center"
              gap={3}
            >
              <Image src="/images/Logga1.svg" alt="Logo" boxSize="36px" objectFit="cover"></Image>
              <Heading color="white" fontSize="3xl">The Gaia Alliance</Heading>
              <FaLeaf size={20} color="#48BB78"/>
            </Box>
            
            <Text color="gray.300" textAlign="center" fontSize="xs">
              Utforska klimatet och lär dig göra skillnad!
            </Text>
            
            <Input
              placeholder="Användarnamn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              color="white"
              type="text"
              bg="blackAlpha.300"
              border="1px solid"
              borderColor="whiteAlpha.400"
              _hover={{ borderColor: 'green.400' }}
              _focus={{ borderColor: 'green.400', boxShadow: '0 0 0 1px #48BB78' }}
            />
            <Input
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              color="white"
              type="password"
              bg="blackAlpha.300"
              border="1px solid"
              borderColor="whiteAlpha.400"
              _hover={{ borderColor: 'green.400' }}
              _focus={{ borderColor: 'green.400', boxShadow: '0 0 0 1px #48BB78' }}
            />
            {error && <Text color="red.300">{error}</Text>}
            <Button 
              colorScheme="green" 
              onClick={handleLogin} 
              width="100%"
              _hover={{ transform: 'scale(1.02)' }}
              transition="all 0.2s"
            >
              Logga in
            </Button>
            
            {showWelcome && (
              <ScaleFade in={showWelcome}>
                <Text color="green.400" fontSize="xl" textAlign="center">
                  Alliance for a Greener Tomorrow! 🌍
                </Text>
              </ScaleFade>
            )}
            
            <Text color="gray.400" fontSize="xs" mt={4} textAlign="center">
              Tillsammans kan vi göra skillnad för klimatet
            </Text>
          </VStack>
        </ScaleFade>
      </Box>
    );
  }

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
        <Flex direction="column" align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }}>
          <Flex justify={{ base: "center", md: "flex-start" }} align="center" w="full" position="relative">
            <IconButton
              position="absolute"
              left="0"
              display={{ base: 'flex', md: 'none' }}
              icon={<FiMenu />}
              onClick={onOpen}
              variant="ghost"
              color="white"
              size="lg"
              aria-label="Open menu"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
            <Image 
              src="/images/profile.png" 
              alt="Logo" 
              boxSize={{ base: "100px", md: "150px" }}
              borderRadius="full"
              objectFit="cover"
              ml={{ md: "8" }}
            />
          </Flex>
          <VStack align={{ base: "center", md: "flex-start" }} ml={{ md: "8" }} spacing={2}>
            <Text 
              color="green.400" 
              fontSize={{ base: "xl", md: "2xl" }}
              fontFamily="bungee"
            >
              THE GAIA ALLIANCE
            </Text>
            <Heading 
              color="white" 
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl", lg: "8xl" }} 
              fontWeight="bold" 
              mb={8} 
              fontFamily="bungee" 
              marginTop={{ base: "10px", md: "20px" }}
              textAlign={{ base: "center", md: "left" }}
            >
              VÄLKOMMEN,<br />ALICE
            </Heading>
          </VStack>
        </Flex>
        
        <Stack 
          display={{ base: 'none', md: 'flex' }} 
          direction="row" 
          spacing={8} 
          align="center" 
          justify="flex-end"
          marginTop={24}
        >
          <Link href="/sealevels" color="white" _hover={{ color: 'blue.300' }} display="flex" alignItems="center" gap={2}>
            <PiWaves fontSize="24px" color="blue"/> HAVSNIVÅER
          </Link>
          <Link href="/glaciers" color="white" _hover={{ color: 'cyan.300' }} display="flex" alignItems="center" gap={2}>
            <GiMountainCave fontSize="24px" color="cyan"/> GLACIÄRER
          </Link>
          <Link href="/co2" color="white" _hover={{ color: 'orange.300' }} display="flex" alignItems="center" gap={2}>
            <GiSmokeBomb fontSize="24px" color="orange"/> FOSSILA BRÄNSLEN
          </Link>
          <Link href="/temperature" color="white" _hover={{ color: 'red.300' }} display="flex" alignItems="center" gap={2}>
            <TbTemperatureCelsius fontSize="26px" color="red"/> TEMPERATUR
          </Link>
          <Link href="/profile" color="white" _hover={{ color: 'green.300' }} display="flex" alignItems="center" gap={2}>
            <FiUser fontSize="24px" color="green"/> PROFIL
          </Link>
          <Box as="button" onClick={() => setIsFaqOpen(true)} color="white" _hover={{ color: 'green.300' }} display="flex" alignItems="center" gap={2}>
            <BsQuestionSquare fontSize="18px" color="green"/> FRÅGOR OCH KONTAKT
          </Box>
          <Link href="/logout" color="white" _hover={{ color: 'green.300' }} display="flex" alignItems="center" gap={2}>
            <RiLogoutCircleRLine fontSize="24px" color="green"/> LOGGA UT
          </Link>
        </Stack>
      </Container>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blackAlpha.900" backdropFilter="blur(10px)">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack spacing={6} mt={8}>
              <Link href="/sealevels" w="full" color="white" _hover={{ color: 'blue.300' }} display="flex" alignItems="center" gap={2}>
                <PiWaves /> HAVSNIVÅER
              </Link>
              <Link href="/glaciers" w="full" color="white" _hover={{ color: 'cyan.300' }} display="flex" alignItems="center" gap={2}>
                <GiMountainCave /> GLACIÄRER
              </Link>
              <Link href="/co2" w="full" color="white" _hover={{ color: 'orange.300' }} display="flex" alignItems="center" gap={2}>
                <GiSmokeBomb /> FOSSILA BRÄNSLEN
              </Link>
              <Link href="/temperature" w="full" color="white" _hover={{ color: 'red.300' }} display="flex" alignItems="center" gap={2}>
                <TbTemperatureCelsius /> TEMPERATUR
              </Link>
              <Link href="/profile" w="full" color="white" _hover={{ color: 'green.300' }} display="flex" alignItems="center" gap={2}>
                <FiUser /> PROFIL
              </Link>
              <Box as="button" w="full" onClick={() => { setIsFaqOpen(true); onClose(); }} color="white" _hover={{ color: 'green.300' }} display="flex" alignItems="center" gap={2}>
                <BsQuestionSquare /> FRÅGOR OCH KONTAKT
              </Box>
              <Link href="/logout" w="full" color="white" _hover={{ color: 'green.300' }} display="flex" alignItems="center" gap={2}>
                <RiLogoutCircleRLine /> LOGGA UT
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Welcome;
