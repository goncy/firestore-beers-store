import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider as SessionProvider } from "./session/context";
import { Provider as BeerProvider } from "./beer/context";
import { Provider as CartProvider } from "./cart/context";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <SessionProvider>
    <BeerProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </BeerProvider>
  </SessionProvider>,
  document.getElementById("root")
);
