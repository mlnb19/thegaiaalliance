
import React from 'react';
import { Box, Container, Grid, GridItem, Flex, Text, Switch } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const SettingsPage = () => {
  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" display="flex" alignItems="center" justifyContent="center" position="relative" overflow="hidden">
      <Navbar />
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, red.500, pink.400, red.600)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px">
          <GridItem colSpan={12}>
            <Text color="white" fontSize="4xl" fontWeight="bold" mb={8}>
              Settings
            </Text>
            <Flex direction="column" gap={6}>
              {['Notifications', 'Dark Mode', 'Sound Effects'].map((setting) => (
                <Box key={setting} bg="#111" p={6} borderRadius="xl">
                  <Flex justify="space-between" align="center">
                    <Text color="white" fontSize="xl">{setting}</Text>
                    <Switch colorScheme="red" />
                  </Flex>
                </Box>
              ))}
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default SettingsPage;
