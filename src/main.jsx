import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//import './styles/index.css'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App tab="home" />);

//ReactDOM.render(<App />, container);
