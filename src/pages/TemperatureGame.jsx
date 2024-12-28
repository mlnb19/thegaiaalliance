
import React, { useState } from 'react';
import { Box, VStack, Text, Button, Progress, Center } from '@chakra-ui/react';

const scenarios = [
  {
    question: "Vilken åtgärd hjälper mest för att minska global uppvärmning?",
    choices: [
      { text: "Minska energiförbrukning", impact: 10 },
      { text: "Lämna lampor på", impact: -10 }
    ]
  },
  {
    question: "Hur kan du kyla ditt hem på sommaren?",
    choices: [
      { text: "Använd AC hela tiden", impact: -10 },
      { text: "Använd persienner och naturlig ventilation", impact: 10 }
    ]
  },
  {
    question: "Vilket val är bäst för klimatet?",
    choices: [
      { text: "Äta lokalt producerad mat", impact: 10 },
      { text: "Importerad mat från andra sidan jorden", impact: -10 }
    ]
  },
  {
    question: "Hur värmer du ditt hem?",
    choices: [
      { text: "Fossila bränslen", impact: -10 },
      { text: "Förnybar energi", impact: 10 }
    ]
  }
];

function TemperatureGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const handleChoice = (impact) => {
    setScore(score + impact);
    
    if (currentQuestion < scenarios.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameComplete(true);
    }
  };

  const getTemperatureRating = () => {
    if (score >= 30) return "Klimathjälte! 🌟";
    if (score >= 10) return "Klimatsmart! 🌡️";
    if (score >= -10) return "På väg! 🌿";
    return "Behöver förbättras! 🌍";
  };

  if (gameComplete) {
    return (
      <Box bg="#1a1a1a" p={8} borderRadius="xl" w="100%">
        <VStack spacing={6}>
          <Text color="white" fontSize="2xl" fontWeight="bold">
            Ditt Klimatresultat
          </Text>
          <Text color="white" fontSize="xl">
            {getTemperatureRating()}
          </Text>
          <Progress 
            value={(score + 50) / 100 * 100}
            colorScheme="orange"
            size="lg"
            w="100%"
            borderRadius="full"
          />
          <Text color="gray.300" textAlign="center">
            Dina val visar att du är {score > 0 ? "medveten om" : "behöver lära dig mer om"} klimatpåverkan.
            {score < 20 && " Tänk på hur dina dagliga val påverkar temperaturen på jorden!"}
          </Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Box bg="#1a1a1a" p={8} borderRadius="xl" w="100%">
      <VStack spacing={6}>
        <Text color="white" fontSize="2xl" fontWeight="bold">
          Temperaturspelet
        </Text>
        <Text color="white" fontSize="xl">
          Fråga {currentQuestion + 1} av {scenarios.length}
        </Text>
        <Text color="gray.300" fontSize="lg" textAlign="center">
          {scenarios[currentQuestion].question}
        </Text>
        <Center>
          <VStack spacing={4}>
            {scenarios[currentQuestion].choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(choice.impact)}
                colorScheme="orange"
                size="lg"
                w="300px"
              >
                {choice.text}
              </Button>
            ))}
          </VStack>
        </Center>
      </VStack>
    </Box>
  );
}

export default TemperatureGame;
