import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./ma-1.css";
import "./ma-2.css";
import "./ma-3.css";
import "./ma-4.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode><App /></StrictMode>,
);
