import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './UI';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/goose-track-react-project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
