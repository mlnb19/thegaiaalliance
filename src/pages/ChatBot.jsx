
import React, { useState } from 'react';
import {
  Box,
  VStack,
  Input,
  Text,
  Flex,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true
});

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hej! Jag är EcoEdith, din klimat-assistent. Fråga mig om havsnivåer, glaciärer eller andra klimatrelaterade ämnen!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { text: input, isBot: false }]);
      
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Du är EcoEdith, en pedagogisk klimatassistent som hjälper barn och ungdomar att förstå klimatförändringar. Svara kortfattat, enkelt och uppmuntrande. Fokusera på havsnivåer, glaciärer och klimatförändringar."
          },
          {
            role: "user",
            content: input
          }
        ]
      });

      const botResponse = response.choices[0].message.content;
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Ett fel uppstod",
        description: "Kunde inte få svar från EcoEdith just nu",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return (
    <Box w="100%" h="100%" bg="#111" borderRadius="xl" p={4}>
      <VStack h="100%" spacing={4}>
        <Box flex={1} w="100%" overflowY="auto" css={{
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-track': { width: '6px' },
          '&::-webkit-scrollbar-thumb': { background: 'gray', borderRadius: '24px' },
        }}>
          {messages.map((msg, index) => (
            <Flex key={index} justify={msg.isBot ? 'flex-start' : 'flex-end'} mb={2}>
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
            color="white"
            _focus={{ border: "1px solid", borderColor: "blue.400" }}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !isLoading) {
                handleSend();
              }
            }}
            isDisabled={isLoading}
          />
          <IconButton
            ml={2}
            icon={<FiSend />}
            onClick={handleSend}
            colorScheme="blue"
            aria-label="Send message"
            isLoading={isLoading}
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default ChatBot;
