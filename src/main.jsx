import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// async function f1() {
//   const res = await fetch("http://localhost:9000/cities");
//   const data = await res.json();
//   console.log(data);
// }
// f1();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
