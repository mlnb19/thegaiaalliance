
import React from 'react';
import { Box, Container, Grid, GridItem, Flex, Text, Avatar, SimpleGrid } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" display="flex" alignItems="center" justifyContent="center" position="relative" overflow="hidden">
      <Navbar />
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, blue.300, cyan.200, blue.400)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px">
          <GridItem colSpan={12}>
            <Flex direction="column" align="center" gap={6}>
              <Avatar size="2xl" src="/images/profile.png" />
              <Text color="white" fontSize="4xl" fontWeight="bold">
                User Profile
              </Text>
              <SimpleGrid columns={3} spacing={10} w="100%">
                <Box bg="#111" p={6} borderRadius="xl" textAlign="center">
                  <Text color="blue.300" fontSize="2xl" fontWeight="bold">Statistics</Text>
                </Box>
                <Box bg="#111" p={6} borderRadius="xl" textAlign="center">
                  <Text color="blue.300" fontSize="2xl" fontWeight="bold">Progress</Text>
                </Box>
                <Box bg="#111" p={6} borderRadius="xl" textAlign="center">
                  <Text color="blue.300" fontSize="2xl" fontWeight="bold">Achievements</Text>
                </Box>
              </SimpleGrid>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;
