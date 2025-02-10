import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 220px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  /* Criando o efeito de gradiente nas laterais */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 160px; /* Largura do efeito */
    height: 100%;
    pointer-events: none; /* Evita interferir na interação com os cards */
    z-index: 5; /* Mantém abaixo das setas */
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0)
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0)
    );
  }
`;

export const Slider = styled.div`
  display: flex;
  align-items: center; /* Centraliza os cards verticalmente */
  gap: 15px; /* Espaçamento entre os cards */
  transition: transform 0.5s ease-in-out;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  z-index: 10;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  /* Ajustando o ícone com largura 32px e altura 52px */
  svg {
    width: 32px; /* Largura desejada */
    height: 52px; /* Altura desejada */
    color: #a07c5a; /* Cor do ícone */
  }
`;

export const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

export const RightArrow = styled(ArrowButton)`
  right: 10px;
`;
