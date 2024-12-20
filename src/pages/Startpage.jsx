import React from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Center, Image } from '@chakra-ui/react';
import { GiBrain, GiNotebook } from "react-icons/gi";

function Startpage() {
  return (
    <Box minH="100vh" bg="black" display="flex" flexDirection="column" py={8}>
      <Container maxW="container.xl" h="100%">
        <Grid templateColumns="repeat(3, 1fr)" gap="25px" h="700px" p={6}>
          {/* Left Column */}
          <GridItem display="flex" flexDirection="column" justifyContent="space-between">
            <Box
              p="0.2%"
              bgGradient="linear(to-r, blue, green)"
              borderRadius="xl"
              overflow="hidden"
            >
              <Box bg="#111" borderRadius="inherit" p={6}>
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
          <GridItem display="flex" flexDirection="column" gap="25px">
            <Box
              p="0.2%"
              bgGradient="linear(to-r, blue, green)"
              borderRadius="xl"
              overflow="hidden"
            >
              <Box bg="#111" borderRadius="inherit" p={6}>
                <Text color="white" fontSize="2xl" fontWeight="bold">
                  Trusted by 500+ users
                </Text>
              </Box>
            </Box>
            <Box
              p="0.2%"
              bgGradient="linear(to-r, blue, green)"
              borderRadius="xl"
              overflow="hidden"
            >
              <Box bg="#111" borderRadius="inherit" p={6}>
                <Text color="white" fontSize="xl">Feature name</Text>
              </Box>
            </Box>
            <Box
              p="0.2%"
              bgGradient="linear(to-r, blue, green)"
              borderRadius="xl"
              overflow="hidden"
            >
              <Box bg="#111" borderRadius="inherit" p={6}>
                <Text color="white" fontSize="xl">New Feature Box</Text>
              </Box>
            </Box>
          </GridItem>

          {/* Right Column */}
          <GridItem display="flex" flexDirection="column" justifyContent="space-between">
            <Flex direction="column" gap="25px" h="100%">
              <Flex gap="25px" flex="2">
                <Box
                  p="0.2%"
                  bgGradient="linear(to-r, blue, green)"
                  borderRadius="xl"
                  overflow="hidden"
                  flex="1"
                >
                  <Box bg="#111" borderRadius="inherit" p={6}>
                    <Box as="span" color="white" fontSize="2xl" mb={2}>
                      <GiBrain />
                    </Box>
                    <Center color="white" mb="auto" fontSize="xl">
                      Memory
                    </Center>
                  </Box>
                </Box>
                <Box
                  p="0.2%"
                  bgGradient="linear(to-r, blue, green)"
                  borderRadius="xl"
                  overflow="hidden"
                  flex="1"
                >
                  <Box bg="#111" borderRadius="inherit" p={6}>
                    <Box as="span" color="white" fontSize="2xl" mb={2}>
                      <GiNotebook />
                    </Box>
                    <Center color="white" mb="auto" fontSize="xl">
                      Quiz
                    </Center>
                  </Box>
                </Box>
              </Flex>
              <Box
                p="0.2%"
                bgGradient="linear(to-r, blue, green)"
                borderRadius="xl"
                overflow="hidden"
              >
                <Box bg="#111" borderRadius="inherit" p={6}>
                  <Text color="white" fontSize="xl">New Box</Text>
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

