import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import ViewProyect from './pages/ViewProyect';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDrawer = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log('Cerrando sesión...');
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <Sidebar 
          onLogout={handleLogout} 
          isCollapsed={isCollapsed} 
          toggleDrawer={toggleDrawer} 
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<ViewProyect />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
