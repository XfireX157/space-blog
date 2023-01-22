import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDom from './Router';
import './Styles/stylesGlobais.scss'
import { Provider } from 'react-redux';
import store from 'Store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterDom />
    </Provider>
  </React.StrictMode>
);
