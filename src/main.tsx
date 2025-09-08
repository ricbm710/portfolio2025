import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//App
import App from "./App.tsx";
//rrd
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
