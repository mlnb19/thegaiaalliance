
import React, { useState, useEffect } from 'react';
import { Box, VStack, HStack, Button, Text, Image } from '@chakra-ui/react';
import { createAvatar } from '@dicebear/core';
import * as avataaars from '@dicebear/avataaars';

function AvatarCreator({ onSave }) {
  const [options, setOptions] = useState({
    hair: ['short', 'long', 'mohawk', 'hat'],
    hairColor: ['auburn', 'black', 'blonde', 'brown', 'red'],
    skinColor: ['light', 'dark', 'brown', 'yellow', 'pale'],
    accessories: ['none', 'roundGlasses', 'sunglasses'],
    facialHair: ['none', 'beardMedium', 'beardLight']
  });

  const [selected, setSelected] = useState({
    hair: 'short',
    hairColor: 'brown',
    skinColor: 'light',
    accessories: 'none',
    facialHair: 'none'
  });

  const [avatarSvg, setAvatarSvg] = useState('');

  useEffect(() => {
    const avatar = createAvatar(avataaars.style, {
      seed: 'custom-seed',
      hair: selected.hair,
      hairColor: selected.hairColor,
      skinColor: selected.skinColor,
      accessories: selected.accessories,
      facialHair: selected.facialHair
    });
    
    setAvatarSvg(avatar.toString());
  }, [selected]);

  return (
    <VStack spacing={4} p={4}>
      <Box w="200px" h="200px" borderRadius="xl" overflow="hidden">
        <Image src={avatarSvg} w="100%" h="100%" />
      </Box>
      
      {Object.entries(options).map(([feature, choices]) => (
        <Box key={feature} w="100%">
          <Text color="gray.300" mb={2} textTransform="capitalize">{feature}</Text>
          <HStack spacing={2} flexWrap="wrap">
            {choices.map((choice) => (
              <Button
                key={choice}
                onClick={() => setSelected(prev => ({ ...prev, [feature]: choice }))}
                bg={selected[feature] === choice ? "blue.500" : "gray.700"}
                _hover={{ bg: "blue.400" }}
                size="sm"
              >
                {choice}
              </Button>
            ))}
          </HStack>
        </Box>
      ))}
      
      <Button colorScheme="blue" onClick={() => onSave(avatarSvg)} w="100%">
        Save Avatar
      </Button>
    </VStack>
  );
}

export default AvatarCreator;
