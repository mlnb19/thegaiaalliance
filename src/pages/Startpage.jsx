import React from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Image, Button, Center, Square, Circle } from '@chakra-ui/react';
import { GiBrain } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";


function Startpage() {
  return (
    <Box minH="100vh" bg="black" p={8}>
      <Container maxW="container.xl" h="calc(100vh - 5rem)" my={2} >
        <Grid
          templateColumns="repeat(3, 1fr)" // Tre lika stora kolumner
          gap={6}
          h="100%"
          alignItems="stretch" // Alla kolumner och deras innehåll sträcks ut vertikalt
        >
          {/* Left Column - Full Height */}
          <GridItem 
            bg="#111" 
            borderRadius="xl" 
            p={6} 
            display="flex" 
            flexDirection="column"
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              top: '-1px',
              right: '-1px',
              bottom: '-1px',
              left: '-1px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(217,217,217,0) 100%)',
              borderRadius: 'xl',
              zIndex: -1,
            }}
          >
            <Text color="#ff6b6b" mb={2}>Här är lite statistik</Text>
            <Text color="white" fontSize="2xl" fontWeight="bold" mb={3}>
              Nåt om glaciär eller havsnivån
            </Text>
            <Text color="gray.400" mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at odio non urna efficitur commodo in ac turpis.
            </Text>
            <Box borderRadius="xl" overflow="hidden" mt="auto">
              <Image src="/images/profile.png" alt="Feature preview" />
            </Box>
          </GridItem>

          {/* Middle Column - Three Equal Boxes */}
          <GridItem display="flex" flexDirection="column" gap={6}>
            <GridItem 
              bg="#111" 
              borderRadius="xl" 
              p={6} 
              flex={1} 
              display="flex" 
              flexDirection="column"
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-1px',
                right: '-1px',
                bottom: '-1px',
                left: '-1px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(217,217,217,0) 100%)',
                borderRadius: 'xl',
                zIndex: -1,
              }}
            >
              <Text color="white" fontSize="2xl" fontWeight="bold" mb="auto">
                Trusted by 500+ users
              </Text>
            </GridItem>

            <GridItem 
              bg="#111" 
              borderRadius="xl" 
              p={6} 
              flex={1} 
              display="flex" 
              flexDirection="column"
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-1px',
                right: '-1px',
                bottom: '-1px',
                left: '-1px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(217,217,217,0) 100%)',
                borderRadius: 'xl',
                zIndex: -1,
              }}
            >
              <Box
                p={4}
                borderRadius="xl"
                bgGradient="linear(to-r, #ff6b6b, #4834d4)"
                mb="auto"
              >
                <Text color="white" fontSize="xl">Feature name</Text>
              </Box>
            </GridItem>

            <GridItem 
              bg="#111" 
              borderRadius="xl" 
              p={6} 
              flex={1} 
              display="flex" 
              flexDirection="column"
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-1px',
                right: '-1px',
                bottom: '-1px',
                left: '-1px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(217,217,217,0) 100%)',
                borderRadius: 'xl',
                zIndex: -1,
              }}
            >
              <Text color="white" fontSize="2xl" fontWeight="bold" mb="auto">
                Insert major feature name
              </Text>
            </GridItem>
          </GridItem>

          {/* Right Column */}
          <GridItem>
            <Grid templateRows="auto 1fr" gap={6} h="100%">
              {/* Two small boxes in a row */}
              <Flex gap={6} h="auto">
                <GridItem 
                  bg="#111" 
                  borderRadius="xl" 
                  p={6} 
                  flex={1} 
                  display="flex" 
                  flexDirection="column"
                  position="relative"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    bottom: '-1px',
                    left: '-1px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(217,217,217,0) 100%)',
                    borderRadius: 'xl',
                    zIndex: -1,
                  }}
                >
                  <Box as="span" color="white" fontSize="2xl" mb={2}><GiBrain /></Box>
                  <Center color="white" mb="auto" fontSize='xl' >Memory</Center>
                </GridItem>

                <GridItem 
                  bg="#111" 
                  borderRadius="xl" 
                  p={6} 
                  flex={1} 
                  display="flex" 
                  flexDirection="column"
                  position="relative"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    bottom: '-1px',
                    left: '-1px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(217,217,217,0) 100%)',
                    borderRadius: 'xl',
                    zIndex: -1,
                  }}
                >
                  <Box as="span" color="white" fontSize="2xl" mb={2}><GiNotebook /> 
                  </Box>
                  <Center color="white" mb="auto" alignItems="center" fontSize='xl' >Quiz</Center>
                </GridItem>
              </Flex>

              {/* One large box spanning two rows */}
              <GridItem 
                bg="#111" 
                borderRadius="xl" 
                p={6} 
                height="100%" 
                display="flex" 
                flexDirection="column"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: '-1px',
                  right: '-1px',
                  bottom: '-1px',
                  left: '-1px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(217,217,217,0) 100%)',
                  borderRadius: 'xl',
                  zIndex: -1,
                }}
              >
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>
                  Insert major feature name
                </Text>
                <Text color="gray.400" mb={4}>
                  Insert some statistic or metric name
                </Text>
                <Button variant="outline" color="gray.400" size="sm" mt="auto">
                  READ MORE
                </Button>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Startpage;