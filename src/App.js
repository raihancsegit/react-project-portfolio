import React from 'react';
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
