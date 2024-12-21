
import React, { useState } from 'react';
import { Box, Button, Text, VStack, Progress, Radio, RadioGroup } from '@chakra-ui/react';

const questions = [
  {
    question: "Hur mycket stiger havsnivån varje år?",
    options: ["1.1 mm", "2.2 mm", "3.3 mm", "4.4 mm"],
    correct: 2
  },
  {
    question: "Hur mycket kan havsnivån stiga till år 2100?",
    options: ["0.5 meter", "1 meter", "1.5 meter", "2 meter"],
    correct: 1
  },
  {
    question: "Hur många människor kan påverkas av en meters havsnivåhöjning?",
    options: ["100 miljoner", "500 miljoner", "1 miljard", "2 miljarder"],
    correct: 2
  },
  {
    question: "Hur mycket har havsnivån ökat de senaste 10 åren?",
    options: ["10%", "20%", "30%", "40%"],
    correct: 2
  },
  {
    question: "Vad är det största hotet från stigande havsnivåer?",
    options: ["Översvämningar", "Torka", "Värmeböljor", "Skogsbränder"],
    correct: 0
  }
];

function QuizGame() {
  const [gameState, setGameState] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleStart = () => {
    setGameState('playing');
  };

  const handleAnswer = () => {
    if (parseInt(selectedAnswer) === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setGameState('finished');
    }
  };

  const handleRestart = () => {
    setGameState('intro');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
  };

  if (gameState === 'intro') {
    return (
      <VStack spacing={6} p={8} align="center">
        <Text fontSize="3xl" color="white" fontWeight="bold">Klimat Quiz</Text>
        <Text color="gray.300" textAlign="center">
          Testa dina kunskaper om havsnivåhöjning! 
          Alla svar finns på denna sida - kan du hitta dem?
        </Text>
        <Button colorScheme="blue" size="lg" onClick={handleStart}>
          Starta Quiz
        </Button>
      </VStack>
    );
  }

  if (gameState === 'playing') {
    return (
      <VStack spacing={6} p={8} align="stretch" w="100%">
        <Progress value={(currentQuestion / questions.length) * 100} colorScheme="blue" />
        <Text color="white" fontSize="sm">Fråga {currentQuestion + 1} av {questions.length}</Text>
        <Text color="white" fontSize="xl" fontWeight="bold">
          {questions[currentQuestion].question}
        </Text>
        <RadioGroup onChange={setSelectedAnswer} value={selectedAnswer}>
          <VStack spacing={4} align="stretch">
            {questions[currentQuestion].options.map((option, index) => (
              <Radio key={index} value={index.toString()} colorScheme="blue">
                <Text color="white">{option}</Text>
              </Radio>
            ))}
          </VStack>
        </RadioGroup>
        <Button 
          colorScheme="blue" 
          isDisabled={selectedAnswer === ''} 
          onClick={handleAnswer}
        >
          Nästa Fråga
        </Button>
      </VStack>
    );
  }

  return (
    <VStack spacing={6} p={8} align="center">
      <Text fontSize="3xl" color="white" fontWeight="bold">Quiz Avslutat!</Text>
      <Text fontSize="xl" color="cyan.200">
        Du fick {score} av {questions.length} rätt!
      </Text>
      <Button colorScheme="blue" onClick={handleRestart}>
        Spela Igen
      </Button>
    </VStack>
  );
}

export default QuizGame;
