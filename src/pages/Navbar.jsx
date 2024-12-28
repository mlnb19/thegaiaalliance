
import React, { useState } from 'react';
import { Box, Flex, IconButton, Text, VStack, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BsQuestionSquare } from 'react-icons/bs';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Image } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import Faq from './Faq';

function Navbar() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="ghost"
        color="white"
        icon={<FiMenu />}
        position="fixed"
        left={4}
        top={4}
        zIndex={20}
        aria-label="Open menu"
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blackAlpha.900">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack spacing={6} mt={8}>
              <Link href="/sealevels" w="full" color="white" _hover={{ color: 'blue.300' }} display="flex" alignItems="center" gap={2}>
                <PiWaves /> HAVSNIVÅER
              </Link>
              <Link href="/glaciers" w="full" color="white" _hover={{ color: 'cyan.300' }} display="flex" alignItems="center" gap={2}>
                <GiMountainCave /> GLACIÄRER
              </Link>
              <Link href="/co2" w="full" color="white" _hover={{ color: 'orange.300' }} display="flex" alignItems="center" gap={2}>
                <GiSmokeBomb /> FOSSILA BRÄNSLEN
              </Link>
              <Link href="/temperature" w="full" color="white" _hover={{ color: 'red.300' }} display="flex" alignItems="center" gap={2}>
                <TbTemperatureCelsius /> TEMPERATUR
              </Link>
              <Link href="/profile" w="full" color="white" _hover={{ color: 'green.300' }} display="flex" alignItems="center" gap={2}>
                <FiUser /> PROFIL
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

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
