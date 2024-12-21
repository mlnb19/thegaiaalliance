
import React, { useState, useEffect } from 'react';
import { Box, VStack, HStack, Text, Button, Image, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, name: 'Plastflaska', type: 'plast', emoji: '🥤' },
  { id: 2, name: 'Glasburk', type: 'glas', emoji: '🫙' },
  { id: 3, name: 'Tidning', type: 'papper', emoji: '📰' },
  { id: 4, name: 'Konservburk', type: 'metall', emoji: '🥫' },
  { id: 5, name: 'Äppelskrutt', type: 'kompost', emoji: '🍎' },
  { id: 6, name: 'Kartong', type: 'papper', emoji: '📦' },
  { id: 7, name: 'Plastpåse', type: 'plast', emoji: '🛍️' },
  { id: 8, name: 'Glasflaska', type: 'glas', emoji: '🍾' }
];

const bins = [
  { type: 'plast', name: 'Plast', color: 'blue.400' },
  { type: 'glas', name: 'Glas', color: 'green.400' },
  { type: 'papper', name: 'Papper', color: 'yellow.400' },
  { type: 'metall', name: 'Metall', color: 'red.400' },
  { type: 'kompost', name: 'Kompost', color: 'brown.400' }
];

function RecyclingGame() {
  const [currentItem, setCurrentItem] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [itemsLeft, setItemsLeft] = useState([...items]);
  const toast = useToast();

  useEffect(() => {
    if (itemsLeft.length > 0 && !currentItem) {
      const randomIndex = Math.floor(Math.random() * itemsLeft.length);
      setCurrentItem(itemsLeft[randomIndex]);
      setItemsLeft(prev => prev.filter((_, index) => index !== randomIndex));
    } else if (itemsLeft.length === 0 && !currentItem) {
      setGameOver(true);
    }
  }, [currentItem, itemsLeft]);

  const handleSort = (binType) => {
    if (!currentItem) return;

    if (binType === currentItem.type) {
      setScore(prev => prev + 1);
      toast({
        title: 'Rätt!',
        description: `${currentItem.name} hör hemma i ${binType}-återvinningen!`,
        status: 'success',
        duration: 2000,
      });
    } else {
      toast({
        title: 'Fel!',
        description: `${currentItem.name} ska sorteras som ${currentItem.type}`,
        status: 'error',
        duration: 2000,
      });
    }
    setCurrentItem(null);
  };

  const resetGame = () => {
    setItemsLeft([...items]);
    setScore(0);
    setGameOver(false);
    setCurrentItem(null);
  };

  return (
    <VStack spacing={6} p={8} align="center">
      <Text fontSize="3xl" color="white" fontWeight="bold">Sortera Rätt!</Text>
      <Text color="gray.300">Poäng: {score}/{items.length}</Text>

      {gameOver ? (
        <VStack spacing={4}>
          <Text fontSize="2xl" color="cyan.200">
            Spelet är slut! Du fick {score} av {items.length} rätt!
          </Text>
          <Button colorScheme="blue" onClick={resetGame}>
            Spela igen
          </Button>
        </VStack>
      ) : (
        <>
          {currentItem && (
            <Box
              as={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              fontSize="6xl"
              mb={4}
            >
              {currentItem.emoji}
            </Box>
          )}
          <Text color="white" mb={4}>{currentItem?.name}</Text>
          <HStack spacing={4} wrap="wrap" justify="center">
            {bins.map((bin) => (
              <Button
                key={bin.type}
                bg={bin.color}
                color="white"
                p={6}
                onClick={() => handleSort(bin.type)}
                _hover={{ transform: 'scale(1.05)' }}
              >
                {bin.name}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </VStack>
  );
}

export default RecyclingGame;
