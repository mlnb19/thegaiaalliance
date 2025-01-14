
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Page imports
import SeaLevels from './pages/SeaLevels';
import Faq from './pages/Faq';
import Temperature from './pages/Temperature';
import Co2 from './pages/Co2';
import Glaciers from './pages/Glaciers';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

function App() {
  const [isFaqOpen, setIsFaqOpen] = React.useState(false);
  
  return (
    <ChakraProvider>
      <Router>
        <Faq isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
        <Routes>
          <Route path="/" element={<Welcome setIsFaqOpen={setIsFaqOpen} />} />
          <Route path="/sealevels" element={<SeaLevels setIsFaqOpen={setIsFaqOpen} />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/co2" element={<Co2 />} />
          <Route path="/glaciers" element={<Glaciers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
