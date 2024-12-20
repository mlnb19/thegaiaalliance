
import React from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Center, Image, Avatar, SimpleGrid } from '@chakra-ui/react';
import { GiBrain, GiNotebook } from "react-icons/gi";

function Startpage() {
  return (
    <Box minH="100vh" bg="black" display="flex" alignItems="center">
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="700px">
          {/* Left Column - Major Feature */}
          <GridItem colSpan={4}>
            <Box bg="#111" borderRadius="xl" p={8} h="100%">
              <Text color="#ff6b6b" fontSize="sm">Insert some statistic</Text>
              <Text color="white" fontSize="4xl" fontWeight="bold" mt={2} mb={4}>
                Insert major feature name
              </Text>
              <Text color="gray.500" mb={8}>
                Insert some statistic or metric name
              </Text>
              <Box borderRadius="xl" overflow="hidden" mt="auto">
                <Image src="/images/profile.png" alt="Feature preview" w="100%" />
              </Box>
            </Box>
          </GridItem>

          {/* Middle Column */}
          <GridItem colSpan={5}>
            <Flex direction="column" gap={6} h="100%">
              {/* Trusted by Users */}
              <Box bg="#111" borderRadius="xl" p={8}>
                <Text color="white" fontSize="4xl" fontWeight="bold" mb={4}>
                  Trusted by 500+ users
                </Text>
                <Text color="gray.500">Don't take our word for it...</Text>
                <Flex gap={2} mt={4}>
                  <Avatar size="md" src="/images/profile.png" />
                  <Avatar size="md" src="/images/profile.png" />
                  <Avatar size="md" src="/images/profile.png" />
                </Flex>
              </Box>

              {/* Feature Name with Gradient */}
              <Box 
                borderRadius="xl" 
                p={6}
                bgGradient="linear(to-r, #FF0080, #7928CA)"
              >
                <Text color="white" fontSize="2xl" fontWeight="bold">
                  ☀️ Feature name
                </Text>
              </Box>

              {/* Bottom Feature */}
              <Box bg="#111" borderRadius="xl" p={6}>
                <Flex align="center" gap={3}>
                  <Box as="span" color="gray.400">⭕</Box>
                  <Text color="gray.400">
                    Lorem ipsum two-line feature descriptor here
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </GridItem>

          {/* Right Column */}
          <GridItem colSpan={3}>
            <Flex direction="column" gap={6} h="100%">
              {/* Top Features */}
              <SimpleGrid columns={2} gap={6}>
                <Box bg="#111" borderRadius="xl" p={6}>
                  <Box as="span" color="white" fontSize="2xl" mb={4}>
                    📅
                  </Box>
                  <Text color="gray.400" fontSize="sm" mt={4}>
                    Up to three line feature description
                  </Text>
                </Box>
                <Box bg="#111" borderRadius="xl" p={6}>
                  <Box as="span" color="white" fontSize="2xl" mb={4}>
                    🔄
                  </Box>
                  <Text color="gray.400" fontSize="sm" mt={4}>
                    Up to three line feature description
                  </Text>
                </Box>
              </SimpleGrid>

              {/* Percentage Display */}
              <Box bg="#111" borderRadius="xl" p={8} flex={1}>
                <Text color="white" fontSize="6xl" fontWeight="bold">
                  00%
                </Text>
                <Text color="gray.500">Higher lorem ipsum rate</Text>
                <SimpleGrid columns={5} gap={2} mt={6}>
                  {[...Array(30)].map((_, i) => (
                    <Box key={i} w="100%" h="8px" bg={i % 2 ? '#222' : 'white'} borderRadius="full" />
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Startpage;
