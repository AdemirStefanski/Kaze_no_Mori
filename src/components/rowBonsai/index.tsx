import React, { useEffect, useState, useRef } from "react";
import CardBonsai from "../cardBonsai";
import bonsaisData from "../../data/bonsai.json";
import { BonsaiRowContainer, BonsaiCardWrapper } from "./styles"; // Importando os estilos

const BonsaiRow: React.FC = () => {
  const [bonsais, setBonsais] = useState<any[]>([]);
  const rowRef = useRef<HTMLDivElement>(null);

  // Função para embaralhar o array de bonsais
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Função para gerar os bonsais de forma aleatória e garantir que não se repitam
  const generateRandomBonsais = () => {
    const shuffled = shuffleArray([...bonsaisData]); // Cria uma cópia do array embaralhado
    const rowWidth = rowRef.current?.offsetWidth || 1200; // Largura disponível da linha
    const cardWidth = 200; // Largura do CardBonsai
    const cardMargin = 20; // Margem entre os itens

    // Cálculo de quantos itens cabem na largura disponível
    const maxItems = Math.floor(
      (rowWidth + cardMargin) / (cardWidth + cardMargin)
    );

    const uniqueBonsais = shuffled.slice(0, maxItems); // Pega o máximo de bonsais que cabem na largura
    setBonsais(uniqueBonsais); // Atualiza o estado com os bonsais selecionados
  };

  useEffect(() => {
    generateRandomBonsais(); // Chama a função de geração de bonsais ao carregar a página
    window.addEventListener("resize", generateRandomBonsais); // Recalcula quando a tela for redimensionada
    return () => window.removeEventListener("resize", generateRandomBonsais); // Remove o evento ao desmontar
  }, []);

  return (
    <BonsaiRowContainer ref={rowRef}>
      {bonsais.map((bonsai) => (
        <BonsaiCardWrapper key={bonsai.id}>
          <CardBonsai bonsai={bonsai} />
        </BonsaiCardWrapper>
      ))}
    </BonsaiRowContainer>
  );
};

export default BonsaiRow;
