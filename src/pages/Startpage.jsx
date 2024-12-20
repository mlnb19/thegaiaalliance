import React from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Image, Button, Center } from '@chakra-ui/react';
import { GiBrain, GiNotebook } from "react-icons/gi";

function Startpage() {
  return (
    <Box minH="100vh" bg="black" p={8}>
      <Container maxW="container.xl" h="calc(100vh - 5rem)" my={2}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} h="100%" alignItems="stretch">
          {/* Left Column */}
          <GridItem>
            <Box position="relative" borderRadius="xl" p="2px" bgGradient="linear(to-b, whiteAlpha.200, transparent)" borderRadius="xl" _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderRadius: 'xl',
              zIndex: -1,
            }}>
              <Box bg="#111" borderRadius="xl" p={6}>
                <Text color="#ff6b6b" mb={2}>Här är lite statistik</Text>
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={3}>
                  Nåt om glaciär eller havsnivån
                </Text>
                <Text color="gray.400" mb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Box borderRadius="xl" overflow="hidden" mt="auto">
                  <Image src="/images/profile.png" alt="Feature preview" />
                </Box>
              </Box>
            </Box>
          </GridItem>

          {/* Middle Column */}
          <GridItem display="flex" flexDirection="column" gap={6}>
            <Box position="relative" borderRadius="xl" p="2px" flex={1} bgGradient="linear(to-b, whiteAlpha.200, transparent)" borderRadius="xl" _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderRadius: 'xl',
              zIndex: -1,
            }}>
              <Box bg="#111" borderRadius="xl" p={6} h="100%">
                <Text color="white" fontSize="2xl" fontWeight="bold">
                  Trusted by 500+ users
                </Text>
              </Box>
            </Box>
            <Box position="relative" borderRadius="xl" p="2px" flex={1} bgGradient="linear(to-b, whiteAlpha.200, transparent)" borderRadius="xl" _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderRadius: 'xl',
              zIndex: -1,
            }}>
              <Box bg="#111" borderRadius="xl" p={6} h="100%">
                <Text color="white" fontSize="xl">Feature name</Text>
              </Box>
            </Box>
          </GridItem>

          {/* Right Column */}
          <GridItem>
            <Flex gap={6} h="100%">
              <Box position="relative" borderRadius="xl" p="2px" flex={1} bgGradient="linear(to-b, whiteAlpha.200, transparent)" borderRadius="xl" _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: 'xl',
                zIndex: -1,
              }}>
                <Box bg="#111" borderRadius="xl" p={6} h="100%">
                  <Box as="span" color="white" fontSize="2xl" mb={2}>
                    <GiBrain />
                  </Box>
                  <Center color="white" mb="auto" fontSize="xl">
                    Memory
                  </Center>
                </Box>
              </Box>
              <Box position="relative" borderRadius="xl" p="2px" flex={1} bgGradient="linear(to-b, whiteAlpha.200, transparent)" borderRadius="xl" _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: 'xl',
                zIndex: -1,
              }}>
                <Box bg="#111" borderRadius="xl" p={6} h="100%">
                  <Box as="span" color="white" fontSize="2xl" mb={2}>
                    <GiNotebook />
                  </Box>
                  <Center color="white" mb="auto" fontSize="xl">
                    Quiz
                  </Center>
                </Box>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Startpage;