
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import SeaLevels from './pages/SeaLevels';
import Temperature from './pages/Temperature';
import Co2 from './pages/Co2';
import Glaciers from './pages/Glaciers';
import Welcome from './pages/Welcome';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sealevels" element={<SeaLevels />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/co2" element={<Co2 />} />
          <Route path="/glaciers" element={<Glaciers />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
