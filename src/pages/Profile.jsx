
import React, { useState } from 'react';
import { Box, Container, Text, VStack, Avatar, Heading, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';
import Navbar from './Navbar';
import AvatarCreator from './AvatarCreator';

function Profile() {
  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" position="relative" overflow="hidden">
      <Navbar />
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, purple.400, blue.400)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" pt="80px" position="relative" zIndex={1}>
        <VStack spacing={8} align="center">
          <Avatar 
            size="2xl" 
            src="/images/profile.png"
            bg="gray.800"
          />
          <Heading color="white" size="xl">Min Profil</Heading>
          <Box bg="#111" borderRadius="xl" p={8} w="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
            <Text color="white" fontSize="lg">Användarnamn: Alice</Text>
            <Text color="gray.400" mt={4}>Medlem sedan: 2024</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Profile;
