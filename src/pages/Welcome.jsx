
import React, { useState } from 'react';
import { Box, Container, Heading, Stack, Link, Flex, Image, Input, Button, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Welcome = ({ setIsFaqOpen }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'alice' && password === 'alice') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Fel användarnamn eller lösenord');
    }
  };

  if (!isLoggedIn) {
    return (
      <Box bg="#0d0d0d" minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} bg="blackAlpha.400" p={8} borderRadius="xl" backdropFilter="blur(10px)">
          <Heading color="white" fontSize="4xl" mb={6}>KlimatKoll</Heading>
          <Input
            placeholder="Användarnamn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            color="white"
            type="text"
          />
          <Input
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color="white"
            type="password"
          />
          {error && <Text color="red.300">{error}</Text>}
          <Button colorScheme="green" onClick={handleLogin} width="100%">
            Logga in
          </Button>
        </VStack>
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
            <Link href="/sealevels" color="white" title="Havsnivåer" _hover={{ color: 'blue.300' }}>HAVSNIVÅER</Link>
            <Link href="/glaciers" color="white" title="Glaciärer" _hover={{ color: 'cyan.300' }}>GLACIÄRER</Link>
            <Link href="/co2" color="white" title="Fossila bränslen" _hover={{ color: 'orange.300' }}>FOSSILA BRÄNSLEN</Link>
            <Link href="/temperature" color="white" title="Temperatur" _hover={{ color: 'red.300' }}>TEMPERATUR</Link>
            <Link href="/profile" color="white" title="Profil" _hover={{ color: 'green.300' }}>PROFIL</Link>
            <Box as="button" onClick={() => setIsFaqOpen(true)} color="white" title="Frågor, svar och kontaktinformation" _hover={{ color: 'green.300' }}>FRÅGOR OCH KONTAKT</Box>
            <Link href="/logout" color="white" title="Logga ut" _hover={{ color: 'green.300' }}>LOGGA UT</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Welcome;
