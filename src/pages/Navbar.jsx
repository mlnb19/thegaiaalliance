
import React, { useState } from 'react';
import { Box, Flex, IconButton, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BsQuestionSquare } from 'react-icons/bs';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Image } from '@chakra-ui/react';
import Faq from './Faq';

function Navbar() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Box position="fixed" right={4} top={4} p={{ base: 2, md: 4 }}>
        <Flex alignItems="center" gap={4}>
          <VStack spacing={1} as="button" onClick={() => navigate('/profile')} cursor="pointer" _hover={{ opacity: 0.8 }}>
            <Image src="/images/profile.png" alt="profile" boxSize="36px" objectFit="cover" borderRadius="full" />
            <Text color="white" fontSize="sm" fontWeight="bold">Alice</Text>
          </VStack>
          <VStack spacing={1} as="button" onClick={() => navigate('/logout')} cursor="pointer" _hover={{ opacity: 0.8 }}>
            <IconButton
              icon={<RiLogoutCircleRLine size={24} />}
              variant="ghost"
              color="white"
              aria-label="Logout"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
            <Text color="white" fontSize="sm" fontWeight="bold">Logga ut</Text>
          </VStack>
        </Flex>
      </Box>
      <IconButton
        icon={<Box as={BsQuestionSquare} size={24} />}
        onClick={() => setIsFaqOpen(true)}
        variant="ghost"
        color="white"
        position="fixed"
        bottom={4}
        right={20}
        aria-label="FAQ"
        cursor="pointer"
        zIndex={5}
      />
      <Faq isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </>
  );
}

export default Navbar;
