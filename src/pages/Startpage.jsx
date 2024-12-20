
import React from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Image, Button } from '@chakra-ui/react';

function Startpage() {
  return (
    <Box minH="100vh" bg="black" p={8}>
      <Container maxW="container.xl" h="calc(100vh - 4rem)">
        <Grid
          templateColumns="1fr 1fr 1fr"
          gap={6}
          h="100%"
        >
          {/* Left Column - Full Height */}
          <GridItem rowSpan={3} bg="#111" borderRadius="xl" p={6} h="100%">
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

          {/* Middle Column - Three Equal Boxes */}
          <GridItem display="flex" flexDirection="column" gap={6}>
            <Box bg="#111" borderRadius="xl" p={6} flex={1}>
              <Text color="white" fontSize="2xl" fontWeight="bold">
                Trusted by 500+ users
              </Text>
            </Box>
            
            <Box bg="#111" borderRadius="xl" p={6} flex={1}>
              <Box
                p={4}
                borderRadius="xl"
                bgGradient="linear(to-r, #ff6b6b, #4834d4)"
              >
                <Text color="white" fontSize="xl">Feature name</Text>
              </Box>
            </Box>
            
            <Box bg="#111" borderRadius="xl" p={6} flex={1}>
              <Text color="white" fontSize="2xl" fontWeight="bold">
                Insert major feature name
              </Text>
            </Box>
          </GridItem>

          {/* Right Column */}
          <GridItem>
            <Grid templateRows="auto 1fr" gap={6}>
              {/* Two small boxes in a row */}
              <Flex gap={6}>
                <Box bg="#111" borderRadius="xl" p={6} flex={1}>
                  <Box as="span" color="white" fontSize="2xl">📅</Box>
                  <Text color="white">Five-year warranty</Text>
                </Box>
                
                <Box bg="#111" borderRadius="xl" p={6} flex={1}>
                  <Box as="span" color="white" fontSize="2xl">🔗</Box>
                  <Text color="white">Blockchain empowered</Text>
                </Box>
              </Flex>
              
              {/* One large box spanning two rows */}
              <Box bg="#111" borderRadius="xl" p={6} height="100%">
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
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Startpage;
