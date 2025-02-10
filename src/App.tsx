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
import CareHistoryContainer from "./components/careHistoryContainer";
import TestimonialCard from "./components/cardTestimonial";
import TestimonialCarousel from "./components/testimonialCarousel";
import Newsletter from "./components/Newsletter";
import Footer from "./components/footer";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <BonsaiRow />
      <CareHistoryContainer />
      <TestimonialCarousel />
      <Newsletter />
      <Footer />
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
