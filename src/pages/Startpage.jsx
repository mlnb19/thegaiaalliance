
import React from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Startpage() {
  return (
    <Box minH="100vh" bg="black" p={8}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{base: "1fr", md: "repeat(3, 1fr)"}}
          gap={6}
          py={8}
        >
          {/* Feature Card 1 */}
          <GridItem bg="#111" borderRadius="xl" p={6}>
            <Text color="#ff6b6b" mb={2}>Insert some statistic</Text>
            <Text color="white" fontSize="2xl" fontWeight="bold" mb={3}>
              Insert major feature name
            </Text>
            <Text color="gray.400" mb={4}>
              Insert some statistic or metric name
            </Text>
            <Box borderRadius="xl" overflow="hidden">
              <Image src="/images/profile.png" alt="Feature preview" />
            </Box>
          </GridItem>

          {/* Feature Card 2 */}
          <GridItem bg="#111" borderRadius="xl" p={6}>
            <Text color="white" fontSize="2xl" fontWeight="bold" mb={4}>
              Trusted by 500+ users
            </Text>
            <Flex gap={-3} mb={4}>
              <Box
                width="40px"
                height="40px"
                borderRadius="full"
                overflow="hidden"
                border="2px"
                borderColor="black"
              >
                <Image src="/images/profile.png" alt="User" objectFit="cover" />
              </Box>
              <Box
                width="40px"
                height="40px"
                borderRadius="full"
                overflow="hidden"
                border="2px"
                borderColor="black"
              >
                <Image src="/images/profile.png" alt="User" objectFit="cover" />
              </Box>
              <Box
                width="40px"
                height="40px"
                borderRadius="full"
                overflow="hidden"
                border="2px"
                borderColor="black"
              >
                <Image src="/images/profile.png" alt="User" objectFit="cover" />
              </Box>
            </Flex>
            <Text color="gray.400">Don't take our word for it...</Text>
            
            <Box
              mt={4}
              p={4}
              borderRadius="xl"
              bgGradient="linear(to-r, #ff6b6b, #4834d4)"
            >
              <Text color="white" fontSize="xl">Feature name</Text>
            </Box>
            
            <Flex align="center" mt={4} gap={2}>
              <Box as="span" color="white">○○○</Box>
              <Text color="gray.400">
                Lorem ipsum two-line feature descriptor here
              </Text>
            </Flex>
          </GridItem>

          {/* Small Feature Cards */}
          <Flex direction="column" gap={6}>
            <Box bg="#111" borderRadius="xl" p={6}>
              <Box as="span" color="white" fontSize="2xl" mb={2}>📅</Box>
              <Text color="white" fontSize="lg">Five-year warranty</Text>
            </Box>
            
            <Box bg="#111" borderRadius="xl" p={6}>
              <Box as="span" color="white" fontSize="2xl" mb={2}>🔗</Box>
              <Text color="white" fontSize="lg">Blockchain empowered</Text>
            </Box>
            
            <Box bg="#111" borderRadius="xl" p={6}>
              <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>
                Insert major feature name
              </Text>
              <Text color="gray.400" mb={4}>
                Insert some statistic or metric name
              </Text>
              <Button variant="outline" color="gray.400" size="sm">
                READ MORE
              </Button>
            </Box>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
}

export default Startpage;
