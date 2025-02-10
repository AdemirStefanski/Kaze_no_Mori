import styled from "styled-components";

import SubscribeImage from "../../assets/icons/Subscribe.png";

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  padding: 20px;
  max-width: 1200px;
  margin: 20px auto;
  background-color: #bfd9a3;
  border-radius: 10px;
`;

export const LeftSection = styled.div`
  font-size: 20px;
  font-weight: bold;
  max-width: 40%;
  color: #517970;
  /* Remove flex: 1 para não expandir, permitindo a centralização */
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row; /* Alinha os elementos verticalmente */
  align-items: center; /* Alinha os itens ao centro horizontalmente */
  justify-content: center; /* Alinha os itens verticalmente no centro */
  gap: 15px; /* Adiciona uma distância de 15px entre os elementos */
  margin-left: 25px; /* Distância de 15px entre LeftSection e RightSection */
  height: 100%; /* Garante que a RightSection ocupe toda a altura disponível */
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha os inputs à esquerda */
  justify-content: center; /* Centraliza verticalmente */
  gap: 15px; /* Distância de 15px entre os inputs */
  height: 100%; /* Garante que a SubSection ocupe toda a altura disponível */
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

export const SubscribeButton = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  background-image: url(${SubscribeImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #517970;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%; /* Tornando o botão redondo */
  border: 2px solid #517970; /* Borda de 2px */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Sombra uniforme ao redor do botão */
  margin-left: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  user-select: none; /* Impede a seleção do texto */

  /* Adicionando sombra ao texto */
  text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.8),
    /* Sombra de 4px no centro */ 0px 0px 8px rgba(255, 255, 255, 0.8),
    /* Sombra mais espalhada */ 0px 0px 12px rgba(255, 255, 255, 0.8); /* Sombra ainda mais suave e espalhada */ /* Sombra escura no texto */

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7); /* Sombra mais forte no hover */
    transform: scale(1.05); /* Efeito de aumento no hover */
  }
`;

export const Overlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Escurece o fundo */
  z-index: 999; /* Coloca o overlay atrás do popup */
`;

export const Popup = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  text-align: center;
  z-index: 1000; /* Garante que o popup apareça acima do overlay */
`;
