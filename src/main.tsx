import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

import { LanguageProvider } from "./context/LanguageContext";

createRoot(rootElement).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
