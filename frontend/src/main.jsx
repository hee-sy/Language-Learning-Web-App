import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider } from "./Contexts/alert.context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AlertProvider>
        <App />
      </AlertProvider>
    </StrictMode>
  </BrowserRouter>
);
