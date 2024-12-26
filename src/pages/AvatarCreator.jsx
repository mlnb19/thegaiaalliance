
import React, { useState } from 'react';
import { Box, VStack, HStack, Button, Text } from '@chakra-ui/react';

const features = {
  hair: ['👱', '👨', '👩', '👴', '👵'],
  eyes: ['👀', '😊', '😉', '😎', '🙄'],
  nose: ['👃', '👃🏻', '👃🏼', '👃🏽', '👃🏾'],
  mouth: ['👄', '😀', '😊', '😐', '🙂'],
  skinColor: ['🟡', '🟤', '⚪', '🔴', '🟣']
};

function AvatarCreator({ onSave }) {
  const [selected, setSelected] = useState({
    hair: features.hair[0],
    eyes: features.eyes[0],
    nose: features.nose[0],
    mouth: features.mouth[0],
    skinColor: features.skinColor[0]
  });

  return (
    <VStack spacing={4} p={4}>
      <Box fontSize="6xl" p={4} bg="gray.800" borderRadius="xl">
        {selected.hair}{selected.eyes}{selected.nose}{selected.mouth}
      </Box>
      
      {Object.entries(features).map(([feature, options]) => (
        <Box key={feature} w="100%">
          <Text color="gray.300" mb={2} textTransform="capitalize">{feature}</Text>
          <HStack spacing={2}>
            {options.map((option, idx) => (
              <Button
                key={idx}
                onClick={() => setSelected(prev => ({ ...prev, [feature]: option }))}
                bg={selected[feature] === option ? "blue.500" : "gray.700"}
                _hover={{ bg: "blue.400" }}
                fontSize="2xl"
              >
                {option}
              </Button>
            ))}
          </HStack>
        </Box>
      ))}
      
      <Button colorScheme="blue" onClick={() => onSave(selected)}>
        Save Avatar
      </Button>
    </VStack>
  );
}

export default AvatarCreator;
