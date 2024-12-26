
import React, { useState } from 'react';
import { Box, VStack, Text, Button, Progress, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaCar, FaBus, FaBicycle, FaLeaf, FaHamburger, FaCarrot } from 'react-icons/fa';

const choices = [
  { id: 1, icon: FaCar, text: "Köra bil", impact: 30 },
  { id: 2, icon: FaBus, text: "Åka kollektivt", impact: 10 },
  { id: 3, icon: FaBicycle, text: "Cykla", impact: 0 },
  { id: 4, icon: FaHamburger, text: "Äta kött", impact: 25 },
  { id: 5, icon: FaCarrot, text: "Äta vegetariskt", impact: 5 },
  { id: 6, icon: FaLeaf, text: "Plantera träd", impact: -15 }
];

function CO2Game() {
  const [co2Level, setCo2Level] = useState(50);
  const [message, setMessage] = useState("Gör dina val och se hur de påverkar CO2-nivån!");

  const handleChoice = (impact) => {
    const newLevel = Math.max(0, Math.min(100, co2Level + impact));
    setCo2Level(newLevel);
    
    if (impact > 0) {
      setMessage("Detta val ökade CO2-utsläppen!");
    } else {
      setMessage("Bra val för miljön!");
    }
  };

  return (
    <Box bg="#1a1a1a" p={6} borderRadius="xl" w="100%">
      <VStack spacing={6}>
        <Text color="white" fontSize="2xl" fontWeight="bold">
          CO2 Påverkan Spel
        </Text>
        <Text color="gray.300">
          {message}
        </Text>
        <Box w="100%">
          <Progress 
            value={co2Level} 
            colorScheme={co2Level > 75 ? "red" : co2Level > 50 ? "yellow" : "green"}
            size="lg"
            borderRadius="full"
          />
          <Text color="white" textAlign="center" mt={2}>
            CO2 Nivå: {co2Level}%
          </Text>
        </Box>
        <SimpleGrid columns={{base: 2, md: 3}} spacing={4} w="100%">
          {choices.map((choice) => (
            <Button
              key={choice.id}
              onClick={() => handleChoice(choice.impact)}
              leftIcon={<Icon as={choice.icon} />}
              colorScheme={choice.impact > 0 ? "red" : "green"}
              variant="outline"
              size="lg"
            >
              {choice.text}
            </Button>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default CO2Game;
