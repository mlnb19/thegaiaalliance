
import React, { useState, useEffect } from "react";
import { Box, Text, Slider, Image } from "@chakra-ui/react";

const ClimateImpactVisualization = () => {
  const [seaLevel, setSeaLevel] = useState(0); // Havsnivå i mm
  const [year, setYear] = useState(1880);

  const data = [
    { year: 1880, gmsl: -158.7 },
    { year: 1900, gmsl: -133.7 },
    { year: 1950, gmsl: -76.1 },
    { year: 2000, gmsl: 20.5 },
    { year: 2020, gmsl: 67.7 },
  ]; // Exempeldata

  useEffect(() => {
    const currentData = data.find((d) => d.year === year);
    if (currentData) {
      setSeaLevel(currentData.gmsl);
    }
  }, [year]);

  return (
    <Box position="relative" bg="#0d0d0d" w="100%" h="600px" borderRadius="xl" overflow="hidden">
      {/* Vattennivå */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h={`${(seaLevel + 200) / 4}%`} // Normaliserad höjd baserat på havsnivån
        bg="blue.400"
        transition="height 1s ease-in-out"
      />

      {/* Bakgrundslandskap */}
      <Image
        src="/images/quietstreet.svg"
        alt="Landskap"
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="100%"
        opacity={1 - (seaLevel + 200) / 400} // Minskande synlighet av landskap
        transition="opacity 1s ease-in-out"
      />

      {/* Text och förklaring */}
    </Box>
  );
};

export default ClimateImpactVisualization;
