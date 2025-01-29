import styled from "styled-components";

export const BonsaiRowContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  flex-wrap: nowrap; /* Não vai quebrar linha */
`;

export const BonsaiCardWrapper = styled.div`
  margin: 0 10px; /* Espaçamento de 20px entre os CardBonsai */
  height: auto;
`;
