import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { GlobalStyle } from "../src/styles/globalStyle";

import Header from "./components/header";
import Banner from "./components/banner";
import BonsaiRow from "./components/rowBonsai";
import BonsaiCare from "./pages/bonsaiCare";
import BonsaiHistory from "./pages/bonsaiHistory";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <BonsaiRow />
      <button
        onClick={() => navigate("/bonsai-care")}
        style={{
          marginLeft: "1rem",
          padding: "0.5rem 1rem",
          border: "2px solid #007BFF",
          borderRadius: "8px",
        }}
      >
        Ir para Cuidados com Bonsai
      </button>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/bonsai-care" element={<BonsaiCare />} />
      <Route path="/bonsai-history" element={<BonsaiHistory />} />
    </Routes>
  </Router>
);

export default App;
