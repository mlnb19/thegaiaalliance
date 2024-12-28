
import React from 'react';
import { Box, VStack, IconButton, useDisclosure, Drawer, DrawerOverlay, 
         DrawerContent, DrawerCloseButton, DrawerBody, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FiUser, FiMenu } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";
import Faq from './Faq';

const NAV_ITEMS = [
  { icon: PiWaves, label: "Havsnivåer", path: '/sealevels', color: 'blue.300' },
  { icon: GiMountainCave, label: "Glaciärer", path: '/glaciers', color: 'cyan.300' },
  { icon: GiSmokeBomb, label: "Fossila Bränslen", path: '/co2', color: 'orange.300' },
  { icon: TbTemperatureCelsius, label: "Temperatur", path: '/temperature', color: 'red.300' },
  { icon: FiUser, label: "Profil", path: '/profile', color: 'green.300' },
  { icon: BsQuestionSquare, label: "FAQ", special: 'faq', color: 'green.300' },
  { icon: RiLogoutCircleRLine, label: "Logga ut", path: '/logout', color: 'green.300' }
];

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFaqOpen, setIsFaqOpen] = React.useState(false);

  const handleNavigation = (item) => {
    if (item.special === 'faq') {
      setIsFaqOpen(true);
    } else {
      navigate(item.path);
    }
    onClose();
  };

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
          {NAV_ITEMS.map((item, index) => (
            <Flex
              key={index}
              align="center"
              cursor="pointer"
              onClick={() => handleNavigation(item)}
              role="group"
              _hover={{ bg: item.color }}
              borderRadius="md"
              p={2}
            >
              <IconButton
                icon={<Box as={item.icon} size={20} />}
                aria-label={item.label}
                variant="ghost"
                color="white"
                _groupHover={{ bg: 'transparent', color: 'black' }}
              />
              <Text 
                color="white" 
                ml={2} 
                fontSize="sm"
                opacity={window.location.pathname === item.path ? 1 : 0}
                _groupHover={{ opacity: 1, color: 'black' }}
                transition="opacity 0.2s"
              >
                {item.label}
              </Text>
            </Flex>
          ))}
        </VStack>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blackAlpha.900" backdropFilter="blur(10px)">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack spacing={6} mt={8}>
              {NAV_ITEMS.map((item, index) => (
                <Flex 
                  key={index}
                  align="center" 
                  w="full"
                  onClick={() => handleNavigation(item)}
                  cursor="pointer"
                  role="group"
                  _hover={{ bg: item.color, color: 'black' }}
                  borderRadius="md"
                  p={2}
                >
                  <IconButton
                    icon={<Box as={item.icon} size={20} />}
                    aria-label={item.label}
                    variant="ghost"
                    color="white"
                    _groupHover={{ bg: 'transparent', color: 'black' }}
                  />
                  <Text color="white" ml={2} fontSize="sm" _groupHover={{ color: 'black' }}>
                    {item.label}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Faq isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </>
  );
};

export default Navbar;
