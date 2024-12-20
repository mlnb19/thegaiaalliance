
import React from 'react';
import { Box, Container, Grid, GridItem, Flex, Text, SimpleGrid } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const NotificationsPage = () => {
  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" display="flex" alignItems="center" justifyContent="center" position="relative" overflow="hidden">
      <Navbar />
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="50%"
        h="50%"
        bgGradient="linear(to-bl, orange.400, yellow.300, orange.500)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px">
          <GridItem colSpan={12}>
            <Text color="white" fontSize="4xl" fontWeight="bold" mb={8}>
              Notifications
            </Text>
            <SimpleGrid spacing={4}>
              {[1, 2, 3].map((item) => (
                <Box key={item} bg="#111" p={6} borderRadius="xl">
                  <Text color="orange.300" fontSize="xl" fontWeight="bold">
                    New Update Available
                  </Text>
                  <Text color="gray.400" mt={2}>
                    Check out the latest features and improvements
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotificationsPage;
