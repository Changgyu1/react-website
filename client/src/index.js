import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//indexJS가 최상위 js이기 때문에
//경로문제로 인해 제일 위에도 bootstrap을넣어줌
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
