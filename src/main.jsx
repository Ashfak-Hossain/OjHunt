import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App.jsx';
import theme from './theme.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
