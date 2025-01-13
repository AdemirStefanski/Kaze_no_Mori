import React from "react";
import Header from "./components/header";
import { GlobalStyle } from "../src/styles/globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
