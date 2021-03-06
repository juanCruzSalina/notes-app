import React from 'react';
import App from './App';
import { store } from './app/store';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App 
      />
    </BrowserRouter>
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
