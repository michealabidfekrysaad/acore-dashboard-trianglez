import React from "react";
import ReactDOM from "react-dom/client";
import "../src/App.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./config/providers/UserProvider/UserProvider";
import ToastifyProvider from "./config/providers/ToastifyProvider/ToastifyProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <ToastifyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastifyProvider>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
