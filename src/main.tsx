import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./fresh-site.css";
import "./fresh-polish.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
