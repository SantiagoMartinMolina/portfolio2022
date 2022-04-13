import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LanguageProvider from "./context/LanguageContext";
// import { createRoot } from "react-dom/client";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const container = document.getElementById("root")!;
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <LanguageProvider>
//       <App />
//     </LanguageProvider>
//   </React.StrictMode>
// );
