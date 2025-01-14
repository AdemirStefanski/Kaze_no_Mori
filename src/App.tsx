import React from "react";
import Header from "./components/header";
import { GlobalStyle } from "../src/styles/globalStyle";
import CardBonsai from "./components/cardBonsai";

function App() {
  const bonsais = [
    {
      id: 1,
      name: "Bonsai de Caliandra",
      images: [
        "https://cdn.awsli.com.br/2500x2500/1396/1396625/produto/293993240/img_9458-removebg-preview-4net407vhy.png",
        "https://cdn.awsli.com.br/2500x2500/1396/1396625/produto/293993240/img_9461-removebg-preview-pgldx85edm.png",
        "https://cdn.awsli.com.br/2500x2500/1396/1396625/produto/293993240/img_9460-removebg-preview-gp37pfirwq.png",
      ],
      age: "5 anos",
      height: "30 cm",
      price: "400,00",
    },
  ];
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "1000%",
          maxWidth: "1200px",
          margin: "20px auto",
        }}
      >
        {bonsais.map((bonsai) => (
          <CardBonsai key={bonsai.id} bonsai={bonsai} />
        ))}
      </div>
    </div>
  );
}

export default App;
