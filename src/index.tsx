import React from 'react';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import MainApp from './App';
import './index.css';

const container = document.getElementById('root');
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <MainApp />
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
