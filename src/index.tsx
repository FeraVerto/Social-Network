import React from 'react';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import MainApp from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/Social-Network">
        <MainApp />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root container');
}

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
