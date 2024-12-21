import React, { useState } from 'react';
import { Box, VStack, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FiUser, FiMenu } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";
import Faq from './Faq';

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const NavContent = () => (
    <VStack spacing={6} mt={8}>
      <Flex 
        align="center" 
        w="full"
        onClick={() => {
          navigate('/sealevels');
          onClose();
        }}
        cursor="pointer"
        role="group"
        _hover={{ bg: 'blue.300', color: 'black' }}
        borderRadius="md"
        p={2}
      >
        <IconButton
          icon={<Box as={PiWaves} size={20} strokeWidth={2} />}
          aria-label="Sea Levels"
          variant="ghost"
          color="white"
          _groupHover={{ bg: 'transparent', color: 'black' }}
        />
        <Text color="white" ml={2} fontSize="sm" _groupHover={{ color: 'black' }}>Havsnivåer</Text>
      </Flex>
      <Flex 
        align="center" 
        w="full"
        onClick={() => {
          navigate('/glaciers');
          onClose();
        }}
        cursor="pointer"
        role="group"
        _hover={{ bg: 'cyan.300', color: 'black' }}
        borderRadius="md"
        p={2}
      >
        <IconButton
          icon={<Box as={GiMountainCave} size={20} />}
          aria-label="Glacier"
          variant="ghost"
          color="white"
          _groupHover={{ bg: 'transparent', color: 'black' }}
        />
        <Text color="white" ml={2} fontSize="sm" _groupHover={{ color: 'black' }}>Glaciärer</Text>
      </Flex>

      <Flex 
        align="center" 
        w="full"
        onClick={() => {
          navigate('/co2');
          onClose();
        }}
        cursor="pointer"
        role="group"
        _hover={{ bg: 'orange.300', color: 'black' }}
        borderRadius="md"
        p={2}
      >
        <IconButton
          icon={<Box as={GiSmokeBomb} size={20} />}
          aria-label="Co2"
          variant="ghost"
          color="white"
          _groupHover={{ bg: 'transparent', color: 'black' }}
        />
        <Text color="white" ml={2} fontSize="sm" _groupHover={{ color: 'black' }}>CO2 Utsläpp</Text>
      </Flex>

      <Flex 
        align="center" 
        w="full"
        onClick={() => {
          navigate('/temperature');
          onClose();
        }}
        cursor="pointer"
        role="group"
        _hover={{ bg: 'red.300', color: 'black' }}
        borderRadius="md"
        p={2}
      >
        <IconButton
          icon={<Box as={TbTemperatureCelsius} size={20} strokeWidth={2} />}
          aria-label="Temperature"
          variant="ghost"
          color="white"
          _groupHover={{ bg: 'transparent', color: 'black' }}
        />
        <Text color="white" ml={2} fontSize="sm" _groupHover={{ color: 'black' }}>Temperatur</Text>
      </Flex>

      <Flex 
        align="center" 
        w="full"
        onClick={() => {
          navigate('/profile');
          onClose();
        }}
        cursor="pointer"
        role="group"
        _hover={{ bg: 'green.300', color: 'black' }}
        borderRadius="md"
        p={2}
      >
        <IconButton
          icon={<Box as={FiUser} size={20} />}
          aria-label="Profile"
          variant="ghost"
          color="white"
          _groupHover={{ bg: 'transparent', color: 'black' }}
        />
        <Text color="white" ml={2} fontSize="sm" _groupHover={{ color: 'black' }}>Profil</Text>
      </Flex>

      <Flex 
        align="center" 
        w="full"
        onClick={() => setIsFaqOpen(true)}
        cursor="pointer"
        role="group"
        _hover={{ bg: 'green.300', color: 'black' }}
        borderRadius="md"
        p={2}
      >
        <IconButton
          icon={<Box as={BsQuestionSquare} size={20} />}
          aria-label="FAQ"
          variant="ghost"
          color="white"
          _groupHover={{ bg: 'transparent', color: 'black' }}
        />
        <Text color="white" ml={2} fontSize="sm" _groupHover={{ color: 'black' }}>Frågor</Text>
      </Flex>

      <Flex 
        align="center" 
        w="full"
        onClick={() => {
          navigate('/logout');
          onClose();
        }}
        cursor="pointer"
        role="group"
        _hover={{ bg: 'green.300', color: 'black' }}
        borderRadius="md"
        p={2}
      >
        <IconButton
          icon={<Box as={RiLogoutCircleRLine} size={20} />}
          aria-label="Logout"
          variant="ghost"
          color="white"
          _groupHover={{ bg: 'transparent', color: 'black' }}
        />
        <Text color="white" ml={2} fontSize="sm" _groupHover={{ color: 'black' }}>Logga ut</Text>
      </Flex>
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
          borderRadius="full"
          border="2px"
          borderColor="whiteAlpha.300"
          _hover={{ borderColor: 'whiteAlpha.500' }}
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
        <VStack spacing={6} mt={8}>
          {[
            { icon: PiWaves, label: "Sea Levels", path: '/sealevels', color: 'blue.300' },
            { icon: GiMountainCave, label: "Glacier", path: '/glaciers', color: 'cyan.300' },
            { icon: GiSmokeBomb, label: "Co2", path: '/co2', color: 'orange.300' },
            { icon: TbTemperatureCelsius, label: "Temperature", path: '/temperature', color: 'red.300' },
            { icon: FiUser, label: "Profile", path: '/profile', color: 'green.300' },
            { icon: BsQuestionSquare, label: "FAQ", path: '/faq', color: 'green.300' },
            { icon: RiLogoutCircleRLine, label: "Logout", path: '/logout', color: 'green.300' }
          ].map((item, index) => (
            <IconButton
              key={index}
              icon={<Box as={item.icon} size={20} strokeWidth={item.icon === TbTemperatureCelsius ? 2 : 1} />}
              aria-label={item.label}
              variant="ghost"
              color="white"
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
              _hover={{ bg: item.color, color: 'black' }}
            />
          ))}
        </VStack>
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
      <Faq isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </>
  );
};

export default Navbar;