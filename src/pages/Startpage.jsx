
import React from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Image, Button } from '@chakra-ui/react';

function Startpage() {
  return (
    <Box minH="100vh" bg="black" p={8}>
      <Container maxW="container.xl" h="calc(100vh - 4rem)" my={2}>
        <Grid
          templateColumns="1fr 1fr 1fr"
          gap={6}
          h="100%"
          templateRows="1fr"
        >
          {/* Left Column - Full Height */}
          <GridItem rowSpan={3} bg="#111" borderRadius="xl" p={6} h="100%">
            <Text color="#ff6b6b" mb={2}>Här är lite statistik</Text>
            <Text color="white" fontSize="2xl" fontWeight="bold" mb={3}>
              Nåt om glaciär eller havsnivån
            </Text>
            <Text color="gray.400" mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at odio non urna efficitur commodo in ac turpis. In ut massa vel mauris eleifend tincidunt. Donec bibendum magna mattis augue tincidunt placerat. Fusce sit amet posuere ipsum. Etiam lacinia, dui ut suscipit tincidunt, lorem metus vulputate dolor, vitae faucibus leo magna vitae diam. Proin scelerisque luctus odio vitae ultrices. Suspendisse et pulvinar metus. Aenean nec leo ut eros vehicula rhoncus vel ac purus.
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
          <GridItem h="100%">
            <Grid templateRows="auto 1fr" gap={6} h="100%">
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
