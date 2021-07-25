import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './allStyle.css';
import App from './App';
import Title from './Components/Title';
import Footer from './Components/Footer';
import { AppProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Title />
      <App />
      <Footer />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
