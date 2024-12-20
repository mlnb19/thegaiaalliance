
import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaHome, FaUser, FaBell, FaCog } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Box position="fixed" top="0" right="0" p={4} zIndex={10}>
      <Flex gap={2}>
        <IconButton
          icon={<FaHome />}
          aria-label="Home"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
        />
        <IconButton
          icon={<FaUser />}
          aria-label="Profile"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
        />
        <IconButton
          icon={<FaBell />}
          aria-label="Notifications"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
        />
        <IconButton
          icon={<FaCog />}
          aria-label="Settings"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
