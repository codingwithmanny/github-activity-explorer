// IMPORTS
// --------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

// Presentation Components
import AppContainer from './container/App';

// Styled Components
import GlobalStyles from './styles/GlobalStyles';

// MAIN RENDER
// --------------------------------------------------------
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
