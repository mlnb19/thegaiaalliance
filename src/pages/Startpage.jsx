
import React from 'react';
import { Box, Container, Text, Grid, GridItem, Flex, Center, Image, Avatar, SimpleGrid } from '@chakra-ui/react';
import { GiBrain, GiNotebook } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";



function Startpage() {
  return (
    <Box w="100vw" h="100vh" bg="#0d0d0d" display="flex" alignItems="center" justifyContent="center" position="relative" overflow="hidden">
      <Box
        pos="absolute"
        top="25%"
        left="75%"
        transform="translate(-50%, -50%)"
        w="80%"
        h="80%"
        bgGradient="linear(to-bl, blue.600, green.500, blue.700)"
        filter="blur(100px)"
        opacity="0.5"
        borderRadius="full"
        zIndex={0}
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6} h="600px" >
          {/* Left Column - Major Feature */}
          <GridItem colSpan={5} >
            <Box bg="#111" borderRadius="xl" p={8} h="100%" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
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
          <GridItem colSpan={4}>
            <Flex direction="column" gap={6} h="100%">
              {/* Trusted by Users */}


              {/* Bottom Feature */}

                            <Box bg="#0d0d0d" borderRadius="xl" p={8} boxShadow="0px 2px 7px rgba(61, 61, 61)" border="0.5px">
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
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="yellow.400"><GiNotebook /></Box>
                  <Text fontSize="2xl" fontWeight="bold" bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'>
                    Spel: Memory
                  </Text>
                </Flex>
              </Box>
              
              {/* Feature Name with Gradient */}
              <Box 
                borderRadius="xl" 
                p={6}
                bgGradient="linear(to-r, #FF0080, #7928CA)"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
              >
                <Text color="white" fontSize="2xl" fontWeight="bold">
                  ☀️ Spel: Nånting
                </Text>
              </Box>

              {/* Bottom Feature */}
              <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                <Flex align="center" gap={3}>
                  <Box as="span" color="yellow.400" fontSize="xl"><GiBrain /></Box>
                  <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text' fontSize="2xl" fontWeight="bold">
                    Spel: Quiz
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
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    <FaRegUserCircle />
                  </Center>
                  <Center color="gray.400" fontSize="l" mt={4} fontFamily={'monospace'}>
                    PROFIL
                  </Center>
                </Box>
                <Box bg="#111" borderRadius="xl" p={6} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)">
                  <Center as="span" color="white" fontSize="2xl" mb={4}>
                    <AiOutlineLogout />
                  </Center>
                  <Center color="gray.400" fontSize="l" mt={4} fontFamily={'monospace'}>
                    LOGGA UT
                  </Center>
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
