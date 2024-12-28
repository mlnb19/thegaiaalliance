
import React, { useState } from 'react';
import { Box, Container, Heading, Stack, Link, Flex, Image, Input, Button, Text, VStack, keyframes, ScaleFade } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaLeaf, FaGlobeAmericas, FaTree } from 'react-icons/fa';

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
            p={8} 
            borderRadius="xl" 
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            maxW="400px"
            w="90%"
          >
            <Box 
              animation={`${float} 3s ease-in-out infinite`}
              display="flex"
              alignItems="center"
              gap={3}
            >
              <FaGlobeAmericas size={40} color="#48BB78"/>
              <Heading color="white" fontSize="4xl">KlimatKoll</Heading>
              <FaLeaf size={30} color="#48BB78"/>
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
                  Välkommen tillbaka till KlimatKoll! 🌍
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
        <Image 
          src="/images/profile.png" 
          alt="Logo" 
          boxSize="150px"
          borderRadius="full"
          objectFit="cover"
        />
        <Heading color="white" fontSize="9xl" fontWeight="bold" mb={8} fontFamily="bungee" marginTop="75px">
          VÄLKOMMEN,<br />ALICE
        </Heading>
        <Flex justify="flex-end" gap={8}>
          <Stack direction="row" spacing={8}>
            <Link href="/sealevels" color="white" _hover={{ color: 'blue.300' }}>HAVSNIVÅER</Link>
            <Link href="/glaciers" color="white" _hover={{ color: 'cyan.300' }}>GLACIÄRER</Link>
            <Link href="/co2" color="white" _hover={{ color: 'orange.300' }}>FOSSILA BRÄNSLEN</Link>
            <Link href="/temperature" color="white" _hover={{ color: 'red.300' }}>TEMPERATUR</Link>
            <Link href="/profile" color="white" _hover={{ color: 'green.300' }}>PROFIL</Link>
            <Box as="button" onClick={() => setIsFaqOpen(true)} color="white" _hover={{ color: 'green.300' }}>FRÅGOR OCH KONTAKT</Box>
            <Link href="/logout" color="white" _hover={{ color: 'green.300' }}>LOGGA UT</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Welcome;
