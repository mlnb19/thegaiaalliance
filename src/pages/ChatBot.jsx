
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

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

// Mockade svar för när API:t inte är tillgängligt
const MOCK_RESPONSES = {
  default: "Tyvärr är jag överbelastad just nu. Här är lite information om klimatet: Havsnivån stiger med cirka 3,3 mm per år på grund av global uppvärmning.",
  climate: "Klimatförändringen är ett stort problem. Temperaturen har ökat med cirka 1°C sedan förindustriell tid.",
  sea: "Havsnivåerna stiger på grund av två huvudfaktorer: smältande isar och vattnets värmeexpansion.",
  glaciers: "Glaciärerna smälter i en alarmerande takt. Mellan 2000 och 2019 förlorade glaciärerna 267 miljarder ton is per år!"
};

const getRelevantMockResponse = (input) => {
  const lowercaseInput = input.toLowerCase();
  if (lowercaseInput.includes('hav')) return MOCK_RESPONSES.sea;
  if (lowercaseInput.includes('klimat')) return MOCK_RESPONSES.climate;
  if (lowercaseInput.includes('glaciär')) return MOCK_RESPONSES.glaciers;
  return MOCK_RESPONSES.default;
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hej! Jag är EcoEdith, din klimat-assistent. Fråga mig om havsnivåer, glaciärer eller andra klimatrelaterade ämnen!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiCallCount, setApiCallCount] = useState(0);
  const MAX_API_CALLS = 3;
  const toast = useToast();

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { text: input, isBot: false }]);

      let response;
      if (apiCallCount < MAX_API_CALLS) {
        // Använd riktiga API:t för de första anropen
        response = await openai.chat.completions.create({
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
        setApiCallCount(prev => prev + 1);
        const botResponse = response.choices[0].message.content;
        setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      } else {
        // Använd mockade svar efter max antal anrop
        const mockedResponse = getRelevantMockResponse(input);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulera fördröjning
        setMessages(prev => [...prev, { text: mockedResponse, isBot: true }]);
      }
    } catch (error) {
      console.error('Error:', error);
      const mockedResponse = getRelevantMockResponse(input);
      setMessages(prev => [...prev, { text: mockedResponse, isBot: true }]);
      
      toast({
        title: "Information",
        description: "Använder förinspelade svar just nu för att spara på API-anrop.",
        status: "info",
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
