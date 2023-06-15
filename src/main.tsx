import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from "./redux/store";
import { Provider } from "react-redux";
import { CartProvider } from "react-use-cart";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Provider store={store}>
    <CartProvider>
        <App />
    </CartProvider>
    </Provider>
  </React.StrictMode>,
)
