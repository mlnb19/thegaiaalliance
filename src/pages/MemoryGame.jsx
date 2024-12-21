
import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text, Button, VStack, Center } from '@chakra-ui/react';

const cards = [
  { id: 1, content: '🌊', matched: false },
  { id: 2, content: '🌊', matched: false },
  { id: 3, content: '🌍', matched: false },
  { id: 4, content: '🌍', matched: false },
  { id: 5, content: '🏊', matched: false },
  { id: 6, content: '🏊', matched: false },
  { id: 7, content: '🐋', matched: false },
  { id: 8, content: '🐋', matched: false },
  { id: 9, content: '🐟', matched: false },
  { id: 10, content: '🐟', matched: false },
  { id: 11, content: '🏖️', matched: false },
  { id: 12, content: '🏖️', matched: false },
];

function MemoryGame() {
  const [gameCards, setGameCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffled = [...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, matched: false }));
    setGameCards(shuffled);
    setFlipped([]);
    setSolved([]);
    setMoves(0);
  };

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || solved.includes(index)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (gameCards[first].content === gameCards[second].content) {
        setSolved([...solved, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl" color="white" mb={4}>Memory Spel</Text>
      <Text color="gray.300" mb={2}>Antal drag: {moves}</Text>
      <SimpleGrid columns={4} spacing={4} maxW="400px">
        {gameCards.map((card, index) => (
          <Box
            key={index}
            h="80px"
            bg={flipped.includes(index) || solved.includes(index) ? "blue.500" : "gray.700"}
            borderRadius="lg"
            cursor="pointer"
            onClick={() => handleClick(index)}
            transition="all 0.3s"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="2xl"
            transform={flipped.includes(index) ? "rotateY(180deg)" : ""}
          >
            {(flipped.includes(index) || solved.includes(index)) ? card.content : "❓"}
          </Box>
        ))}
      </SimpleGrid>
      <Button colorScheme="blue" onClick={shuffleCards} mt={4}>
        Starta om
      </Button>
    </VStack>
  );
}

export default MemoryGame;
