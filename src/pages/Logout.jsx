
import React, { useEffect } from 'react';
import { Box, Container, Text, Spinner, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add logout logic here
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" display="flex" alignItems="center" justifyContent="center">
      <Center flexDirection="column">
        <Spinner size="xl" color="white" mb={4} />
        <Text color="white" fontSize="xl">Loggar ut...</Text>
      </Center>
    </Box>
  );
}

export default Logout;
