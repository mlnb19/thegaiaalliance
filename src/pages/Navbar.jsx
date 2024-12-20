
import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaHome, FaUser, FaBell, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box position="fixed" top="0" right="0" p={4} zIndex={10}>
      <Flex gap={2}>
        <IconButton
          icon={<FaHome />}
          aria-label="Home"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/')}
        />
        <IconButton
          icon={<FaUser />}
          aria-label="Profile"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/pages/glaciers')}
        />
        <IconButton
          icon={<FaBell />}
          aria-label="Notifications"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/pages/co2')}
        />
        <IconButton
          icon={<FaCog />}
          aria-label="Settings"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => navigate('/pages/temperature')}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
