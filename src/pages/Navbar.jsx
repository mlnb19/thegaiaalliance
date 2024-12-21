
import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PiWaves } from "react-icons/pi";
import { GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box position="fixed" top="0" right="2" p={1} zIndex={10} marginTop={2} fontWeight={5} >
      <Flex gap={2}>
        <IconButton
          icon={<Box as={PiWaves} size={16} strokeWidth={2} />}
          aria-label="Sea Levels"
          variant="ghost"
          color="white"
          title="Klimatdata om havsnivåer"
          _hover={{ bg: 'blue.300', color: 'black'}}
          onClick={() => navigate('/sealevels')}
        />
        <IconButton
          icon={<Box as={GiMountainCave} size={16} />}
          aria-label="Glacier"
          variant="ghost"
          color="white"
          title="Klimatdata om glaciärer"
          _hover={{ bg: 'cyan.300', color: 'black'}}
          onClick={() => navigate('/glaciers')}
        />
        <IconButton
          icon={<Box as={GiSmokeBomb} size={16} />}
          aria-label="Co2"
          variant="ghost"
          color="white"
          title="Klimatdata om Co2-utsläpp"
          _hover={{ bg: 'orange.300', color: 'black' }}
          onClick={() => navigate('/co2')}
        />
        <IconButton
          icon={<Box as={TbTemperatureCelsius} size={16} strokeWidth={2} />}
          aria-label="Temperature"
          variant="ghost"
          color="white"
          title="Klimatdata om tempereaturförändringar"
          _hover={{ bg: 'red.300', color: 'black' }}
          onClick={() => navigate('/temperature')}
        />
        <IconButton
          icon={<Box as={FiUser} size={16} />}
          aria-label="Profile"
          variant="ghost"
          color="white"
          title="Gå till profil"
          _hover={{ bg: 'green.300', color: 'black' }}
          onClick={() => navigate('/profile')}
        />
        <IconButton
          icon={<Box as={BsQuestionSquare} size={16} />}
          aria-label="FAQ"
          variant="ghost"
          color="white"
          title="Frågor och kontakt"
          _hover={{ bg: 'green.300', color: 'black' }}
          onClick={() => navigate('/faq')}
        />
        <IconButton
          icon={<Box as={RiLogoutCircleRLine} size={16} />}
          aria-label="Logout"
          alt="Logga ut"
          variant="ghost"
          color="white"
          title="Logga ut"
          _hover={{ bg: 'green.300', color: 'black' }}
          onClick={() => navigate('/logout')}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
