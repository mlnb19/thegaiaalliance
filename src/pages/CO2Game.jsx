
import React, { useState } from 'react';
import { Box, VStack, Text, Button, Center, HStack, Progress } from '@chakra-ui/react';

const scenarios = [
  {
    question: "Hur tar du dig till jobbet/skolan?",
    choices: [
      { text: "Bil", impact: -10 },
      { text: "Cykel/Kollektivtrafik", impact: 10 }
    ]
  },
  {
    question: "Vad väljer du till lunch?",
    choices: [
      { text: "Hamburgare", impact: -10 },
      { text: "Vegetarisk måltid", impact: 10 }
    ]
  },
  {
    question: "Hur handlar du kläder?",
    choices: [
      { text: "Nya kläder ofta", impact: -10 },
      { text: "Second hand/Sällan", impact: 10 }
    ]
  },
  {
    question: "Hur hanterar du sopor?",
    choices: [
      { text: "Slänger allt i samma", impact: -10 },
      { text: "Källsorterar noggrant", impact: 10 }
    ]
  },
  {
    question: "Vad gör du på semestern?",
    choices: [
      { text: "Flyger utomlands", impact: -10 },
      { text: "Semester i Sverige", impact: 10 }
    ]
  }
];

function CO2Game() {
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

  const getEnvironmentalRating = () => {
    if (score >= 30) return "Miljöhjälte! 🌟";
    if (score >= 10) return "Miljömedveten! 🌱";
    if (score >= -10) return "På rätt väg! 🌿";
    return "Kan förbättras! 🌍";
  };

  if (gameComplete) {
    return (
      <Box bg="#1a1a1a" p={8} borderRadius="xl" w="100%">
        <VStack spacing={6}>
          <Text color="white" fontSize="2xl" fontWeight="bold">
            Ditt Miljöresultat
          </Text>
          <Text color="white" fontSize="xl">
            {getEnvironmentalRating()}
          </Text>
          <Progress 
            value={(score + 50) / 100 * 100}
            colorScheme="green"
            size="lg"
            w="100%"
            borderRadius="full"
          />
          <Text color="gray.300" textAlign="center">
            Dina val visar att du är {score > 0 ? "mer" : "mindre"} miljömedveten än genomsnittet.
            {score < 20 && " Fundera på hur du kan göra fler miljövänliga val i vardagen!"}
          </Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Box bg="#1a1a1a" p={8} borderRadius="xl" w="100%">
      <VStack spacing={6}>
        <Text color="white" fontSize="2xl" fontWeight="bold">
          Miljöval ({currentQuestion + 1}/{scenarios.length})
        </Text>
        <Text color="white" fontSize="xl" textAlign="center">
          {scenarios[currentQuestion].question}
        </Text>
        <Center w="100%" mt={4}>
          <HStack spacing={4}>
            {scenarios[currentQuestion].choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(choice.impact)}
                size="lg"
                variant="outline"
                colorScheme="blue"
                w="200px"
              >
                {choice.text}
              </Button>
            ))}
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
}

export default CO2Game;
