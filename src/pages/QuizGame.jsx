
import React, { useState } from 'react';
import { Box, Button, Text, VStack, Progress, Radio, RadioGroup } from '@chakra-ui/react';

const questions = [
  {
    question: "Hur mycket har den globala havsnivån stigit sedan 1900?",
    options: ["10 cm", "20 cm", "23 cm", "30 cm"],
    correct: 2
  },
  {
    question: "Vad är den största orsaken till havsnivåhöjningen?",
    options: ["Smältande glaciärer", "Regn", "Undervattensvolkaner", "Vågor"],
    correct: 0
  },
  {
    question: "När förväntas havsnivån stiga med ytterligare 30cm?",
    options: ["2030", "2050", "2080", "2100"],
    correct: 3
  },
  {
    question: "Vilken är den största effekten av stigande havsnivåer?",
    options: ["Översvämningar", "Torka", "Värmeböljor", "Skogsbränder"],
    correct: 0
  },
  {
    question: "Hur många människor bor i kustområden som hotas av stigande havsnivåer?",
    options: ["100 miljoner", "500 miljoner", "1 miljard", "2 miljarder"],
    correct: 2
  },
  {
    question: "Vilken är den främsta orsaken till klimatförändringar?",
    options: ["Vulkaner", "Solaktivitet", "Växthusgaser", "Jordens lutning"],
    correct: 2
  },
  {
    question: "Hur mycket har den globala temperaturen ökat sedan 1880?",
    options: ["0.5°C", "1.0°C", "1.5°C", "2.0°C"],
    correct: 1
  },
  {
    question: "Vilket år var det varmaste uppmätta året hittills?",
    options: ["2016", "2018", "2020", "2023"],
    correct: 3
  },
  {
    question: "Hur mycket har glaciärerna minskat sedan 1980?",
    options: ["20%", "30%", "40%", "50%"],
    correct: 2
  },
  {
    question: "Vad kan vi göra för att minska klimatförändringarna?",
    options: ["Inget", "Bara regeringar kan hjälpa", "Individuella val spelar roll", "Det är för sent"],
    correct: 2
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
          Testa dina kunskaper om klimatförändringar och havsnivåhöjning. 
          Quizet innehåller 10 frågor - är du redo att anta utmaningen?
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
