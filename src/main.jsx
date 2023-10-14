import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context/AppConetxt.jsx";
import { BrowserRouter } from "react-router-dom";
import { FormContextProvider } from "./context/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
