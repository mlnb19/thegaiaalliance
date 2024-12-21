
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
          icon={<PiWaves />}
          aria-label="Sea Levels"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/sealevels')}
        />
        <IconButton
          icon={<GiMountainCave />}
          aria-label="Glacier"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/glaciers')}
        />
        <IconButton
          icon={<GiSmokeBomb />}
          aria-label="Co2"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/co2')}
        />
        <IconButton
          icon={<TbTemperatureCelsius />}
          aria-label="Temperature"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/temperature')}
        />
        <IconButton
          icon={<FaUserCircle />}
          aria-label="Profile"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/profile')}
        />
        <IconButton
          icon={<FaQuestionCircle />}
          aria-label="FAQ"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/faq')}
        />
        <IconButton
          icon={<FaSignOutAlt />}
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
