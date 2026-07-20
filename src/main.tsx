import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./final-site.css";
import "./final-polish.css";
import "./funnel-final.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const applyMaskedPortrait = () => {
  const portrait = document.querySelector<HTMLImageElement>(".portrait-wrap img");
  if (!portrait) {
    requestAnimationFrame(applyMaskedPortrait);
    return;
  }

  const fallback = portrait.src;
  portrait.onerror = () => {
    portrait.onerror = null;
    portrait.src = fallback;
  };
  portrait.src = `${import.meta.env.BASE_URL}assets/alina-portrait-cutout.svg`;
};

requestAnimationFrame(applyMaskedPortrait);
