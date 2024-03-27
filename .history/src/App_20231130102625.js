import React from "react";

import Header from "./components/Header";
import Header from "./pages/Home";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container"></div>
      </div>
    </div>
  );
}

export default App;
