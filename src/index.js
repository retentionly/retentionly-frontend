import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { store } from './app/store';
import './index.css';
import customTheme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
