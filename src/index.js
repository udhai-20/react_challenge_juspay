import React from "react";
import ReactDOM from "react-dom";
// import '../app.css';
import App from "./App";
import "tailwindcss/tailwind.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

console.log("hi");

ReactDOM.render(
  <React.StrictMode>
     <DndProvider backend={HTML5Backend}>
    <App />
     </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
