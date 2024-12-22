
import React, { useState } from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hej! Jag är din klimat-assistent. Fråga mig om havsnivåer, glaciärer eller andra klimatrelaterade ämnen!", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);

    // Simulate bot response (här kan du senare integrera en riktig AI-tjänst)
    const botResponses = {
      "hur mycket stiger havsnivån?": "Havsnivån stiger med ungefär 3,3 mm per år. Till år 2100 kan den ha stigit med upp till 1 meter!",
      "vad är växthuseffekten?": "Växthuseffekten är när gaser i atmosfären fångar värme från solen, ungefär som ett växthus. Detta är naturligt, men människans aktiviteter ökar effekten.",
      "hur påverkar det djuren?": "När havsnivån stiger påverkas många djur. Korallrev kan dö, sköldpaddors stränder försvinner, och många kustnära djur förlorar sina hem.",
    };

    setTimeout(() => {
      const response = botResponses[input.toLowerCase()] || 
        "Jag förstår inte riktigt den frågan. Kan du omformulera den? Du kan fråga om havsnivåer, klimatförändringar eller hur det påverkar djur och natur.";
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);

    setInput('');
  };

  return (
    <Box 
      w="100%" 
      h="100%" 
      bg="#111"
      borderRadius="xl"
      p={4}
    >
      <VStack h="100%" spacing={4}>
        <Box 
          flex={1} 
          w="100%" 
          overflowY="auto" 
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
              borderRadius: '24px',
            },
          }}
        >
          {messages.map((msg, index) => (
            <Flex
              key={index}
              justify={msg.isBot ? 'flex-start' : 'flex-end'}
              mb={2}
            >
              <Box
                maxW="80%"
                bg={msg.isBot ? 'blue.500' : 'green.500'}
                color="white"
                borderRadius="lg"
                px={3}
                py={2}
              >
                <Text>{msg.text}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Flex w="100%">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ställ en fråga..."
            bg="whiteAlpha.100"
            border="none"
            _focus={{ 
              border: "1px solid",
              borderColor: "blue.400"
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          <IconButton
            ml={2}
            icon={<FiSend />}
            onClick={handleSend}
            colorScheme="blue"
            aria-label="Send message"
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default ChatBot;
