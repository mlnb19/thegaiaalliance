
import React, { useState } from 'react';
import { Box, VStack, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FiUser, FiMenu } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavContent = () => (
    <VStack spacing={6} mt={8}>
      <IconButton
        icon={<Box as={PiWaves} size={20} strokeWidth={2} />}
        aria-label="Sea Levels"
        variant="ghost"
        color="white"
        title="Klimatdata om havsnivåer"
        _hover={{ bg: 'blue.300', color: 'black'}}
        onClick={() => {
          navigate('/sealevels');
          onClose();
        }}
      />
      <IconButton
        icon={<Box as={GiMountainCave} size={20} />}
        aria-label="Glacier"
        variant="ghost"
        color="white"
        title="Klimatdata om glaciärer"
        _hover={{ bg: 'cyan.300', color: 'black'}}
        onClick={() => {
          navigate('/glaciers');
          onClose();
        }}
      />
      <IconButton
        icon={<Box as={GiSmokeBomb} size={20} />}
        aria-label="Co2"
        variant="ghost"
        color="white"
        title="Klimatdata om Co2-utsläpp"
        _hover={{ bg: 'orange.300', color: 'black'}}
        onClick={() => {
          navigate('/co2');
          onClose();
        }}
      />
      <IconButton
        icon={<Box as={TbTemperatureCelsius} size={20} strokeWidth={2} />}
        aria-label="Temperature"
        variant="ghost"
        color="white"
        title="Klimatdata om tempereaturförändringar"
        _hover={{ bg: 'red.300', color: 'black'}}
        onClick={() => {
          navigate('/temperature');
          onClose();
        }}
      />
      <IconButton
        icon={<Box as={FiUser} size={20} />}
        aria-label="Profile"
        variant="ghost"
        color="white"
        title="Gå till profil"
        _hover={{ bg: 'green.300', color: 'black'}}
        onClick={() => {
          navigate('/profile');
          onClose();
        }}
      />
      <IconButton
        icon={<Box as={BsQuestionSquare} size={20} />}
        aria-label="FAQ"
        variant="ghost"
        color="white"
        title="Frågor och kontakt"
        _hover={{ bg: 'green.300', color: 'black'}}
        onClick={() => {
          navigate('/faq');
          onClose();
        }}
      />
      <IconButton
        icon={<Box as={RiLogoutCircleRLine} size={20} />}
        aria-label="Logout"
        variant="ghost"
        color="white"
        title="Logga ut"
        _hover={{ bg: 'green.300', color: 'black'}}
        onClick={() => {
          navigate('/logout');
          onClose();
        }}
      />
    </VStack>
  );

  return (
    <>
      <Box display={{ base: 'block', md: 'none' }} position="fixed" top={4} left={4} zIndex={20}>
        <IconButton
          icon={<FiMenu />}
          onClick={onOpen}
          variant="ghost"
          color="white"
          size="lg"
        />
      </Box>

      <Box 
        display={{ base: 'none', md: 'block' }} 
        position="fixed" 
        left="0" 
        top="0" 
        h="100vh" 
        p={4} 
        bg="blackAlpha.400" 
        backdropFilter="blur(10px)" 
        zIndex={10}
      >
        <NavContent />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blackAlpha.900" backdropFilter="blur(10px)">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <NavContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
