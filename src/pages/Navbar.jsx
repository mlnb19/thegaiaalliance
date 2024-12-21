
import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaBell, FaCog, FaUserCircle, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box position="fixed" top="0" right="2" p={1} zIndex={10} marginTop={2} fontWeight={5} >
      <Flex gap={2}>
        <IconButton
          icon={<Box as={PiWaves} size={24} strokeWidth={2} />}
          aria-label="Sea Levels"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/sealevels')}
        />
        <IconButton
          icon={<Box as={GiMountainCave} size={24} />}
          aria-label="Glacier"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/glaciers')}
        />
        <IconButton
          icon={<Box as={GiSmokeBomb} size={24} />}
          aria-label="Co2"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/co2')}
        />
        <IconButton
          icon={<Box as={TbTemperatureCelsius} size={24} strokeWidth={2} />}
          aria-label="Temperature"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/temperature')}
        />
        <IconButton
          icon={<Box as={FaUserCircle} size={24} />}
          aria-label="Profile"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/profile')}
        />
        <IconButton
          icon={<Box as={FaQuestionCircle} size={24} />}
          aria-label="FAQ"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/faq')}
        />
        <IconButton
          icon={<Box as={FaSignOutAlt} size={24} />}
          aria-label="Logout"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/logout')}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
