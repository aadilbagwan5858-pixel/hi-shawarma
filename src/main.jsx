import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

// Google Analytics
ReactGA.initialize("G-MQCJTY1W66");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname + window.location.search,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);