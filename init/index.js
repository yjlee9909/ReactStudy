import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// npx create-react-app my-app --template basic-react
// npx create-react-app react-complete-guide --template basic-react
