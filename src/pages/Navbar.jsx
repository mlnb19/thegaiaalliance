import React from 'react';
import { Box, VStack, IconButton, useDisclosure, Drawer, DrawerOverlay, 
         DrawerContent, DrawerCloseButton, DrawerBody, Flex, Text, Stack, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FiUser, FiMenu } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import Faq from './Faq';

const NAV_ITEMS = [
  { icon: PiWaves, label: "Havsnivåer", path: '/sealevels', color: 'blue.300', title: 'Havsnivåer' },
  { icon: GiMountainCave, label: "Glaciärer", path: '/glaciers', color: 'cyan.300', title: 'Glaciärer' },
  { icon: GiSmokeBomb, label: "Fossila bränslen", path: '/co2', color: 'orange.300', title: 'Fossila bränslen' },
  { icon: TbTemperatureCelsius, label: "Temperatur", path: '/temperature', color: 'red.300', title: 'Temperaturer' }
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
      <Box display={{ base: 'block', md: 'none' }} position="fixed" left={4} top="50%" transform="translateY(-50%)" zIndex={20}>
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
        p={{ base: 2, md: 4 }}
        zIndex={10}
      >
        <Flex alignItems="center" mb={6}>
          <IconButton
            icon={<FaGlobeAmericas size={24} />}
            aria-label="Logo"
            variant="ghost"
            color="#4CAF50"
            _hover={{ bg: 'transparent' }}
          />
          <Text color="white" fontSize="sm" fontWeight="bold">
            The Gaia Alliance
          </Text>
        </Flex>
        <VStack spacing={6} mt={8} alignItems="flex-start">
          {NAV_ITEMS.map((item, index) => (
            <Flex
              key={index}
              alignItems="center"
              position="relative"
              role="group"
            >
              <IconButton
                icon={<Box as={item.icon} size={24} />}
                aria-label={item.label}
                variant="ghost"
                color="white"
                onClick={() => handleNavigation(item)}
                _hover={{ bg: item.color, color: 'black' }}
              />
              <Text
                ml={2}
                position="absolute"
                left="100%"
                whiteSpace="nowrap"
                color={item.color}
                opacity={window.location.pathname === item.path ? 1 : 0}
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.2s"
              >
                {item.title}
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
                  align="left" 
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
      <Box position="fixed" right={4} top={0} h="100vh" p={{ base: 2, md: 4 }}>
        <Flex alignItems="center" mb={6}>
          <Text color="white" fontSize="sm" fontWeight="bold">
            Inloggad
          </Text>
        </Flex>
        <VStack spacing={6} mt={8} alignItems="flex-end">
          <IconButton 
            icon={<Image src="/images/profile.png" alt="profile" boxSize="36px" objectFit="cover" borderRadius="full" />} 
            onClick={() => navigate('/profile')} 
            variant="ghost" 
            color="white"
            aria-label="Profile"
            title="Profil"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
          <Text color="white" fontSize="sm" fontWeight="bold" marginTop="-20px" marginRight="2px">
            Alice
          </Text>
          <IconButton 
            icon={<Box as={RiLogoutCircleRLine} size={24} />} 
            onClick={() => navigate('/logout')} 
            variant="ghost" 
            color="white"
            aria-label="Logout"
            cursor="pointer"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
        </VStack>
      </Box>
      <IconButton 
        icon={<Box as={BsQuestionSquare} size={24} />} 
        onClick={() => setIsFaqOpen(true)} 
        variant="ghost" 
        color="white"
        position="fixed"
        bottom={4}
        right={4}
        aria-label="FAQ"
        cursor="pointer"
      />
      <Faq isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </>
  );
};

export default Navbar;