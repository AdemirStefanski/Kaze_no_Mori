// TestimonialCard.styled.ts
import styled, { css } from "styled-components";

interface CardProps {
  expanded: boolean;
}

export const Card = styled.div<CardProps>`
  width: 300px; /* Lembre que 30px é muito pequeno; ajuste conforme sua necessidade */
  height: ${({ expanded }) => (expanded ? "auto" : "180px")};
  min-height: 180px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px; /* Garante 5px de distância de todos os lados */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: height 0.3s ease;
  overflow: hidden;
`;

export const Header = styled.div`
  margin-bottom: 5px;
`;

export const Name = styled.span`
  display: block;
  font-size: 1.2em; /* Um pouco maior que o texto do depoimento */
  font-weight: bold;
  color: #a07c5a; /* Cor especificada */
  margin-bottom: 2px;
`;

export const Location = styled.span`
  display: block;
  font-size: 0.8em; /* Um pouco menor que o depoimento */
  font-weight: bold;
  color: #a8c686; /* Cinza escuro */
`;

export const Content = styled.div`
  flex-grow: 1;
  margin: 5px 0;
  overflow: hidden;
`;

interface TestimonialTextProps {
  expanded: boolean;
}

export const TestimonialText = styled.p<TestimonialTextProps>`
  font-size: 0.9em;
  margin: 0;
  color: #517970;

  ${({ expanded }) =>
    !expanded &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* Limita o texto a 3 linhas */
      -webkit-box-orient: vertical;
    `}
`;

export const Rating = styled.div`
  display: flex;
`;

export const Star = styled.span`
  color: #ffd700; /* Estrelas douradas */
  margin-right: 2px;
`;
