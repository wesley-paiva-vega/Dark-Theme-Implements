import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  ThemeContext  from './contexts/ThemeContext'

import GlobalStyles from './styles/GlobalStyles'
const tema = 'Dark Theme'


ReactDOM.render(
  <React.StrictMode>
    
    <GlobalStyles/>
      <App theme={tema} />
  </React.StrictMode>,
  document.getElementById('root')
);

