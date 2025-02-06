import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
`;

export const DoubleImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Distância de 20px entre as imagens */
  justify-content: space-around;

  img {
    min-width: 250px; /* Largura mínima de 250px */
    max-width: 400px; /* Largura máxima de 400px */
    width: 100%; /* As imagens devem ocupar 100% da largura disponível até o limite máximo */
    height: auto; /* Mantém a proporção original das imagens */
  }

  @media (max-width: 800px) {
    img {
      min-width: 100%; /* Quando a tela for pequena, a imagem ocupará 100% da largura disponível */
    }
  }
`;

export const DoubleGraph = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px; /* Distância de 20px entre as imagens */
  justify-content: center;

  img {
    min-width: 250px; /* Largura mínima de 250px */
    max-width: 400px; /* Largura máxima de 400px */
    width: 100%; /* As imagens devem ocupar 100% da largura disponível até o limite máximo */
    height: auto; /* Mantém a proporção original das imagens */
  }

  @media (max-width: 800px) {
    img {
      min-width: 100%; /* Quando a tela for pequena, a imagem ocupará 100% da largura disponível */
    }
  }
`;

export const StyledList = styled.ul`
  list-style: none; // Remove os marcadores padrão, se necessário
  padding: 0; // Remove padding padrão do ul
  display: flex;
  flex-direction: column; // Mantém os itens empilhados verticalmente
  align-items: center; // Centraliza os itens horizontalmente
  text-align: center; // Garante que o texto dentro dos itens fique centralizado

  li {
    margin-bottom: 8px; // Espaço entre os itens da lista
  }

  li:last-child {
    margin-bottom: 0; // Remove o espaçamento do último item
  }
`;

export const BigTitle = styled.h1`
  font-size: 2.5rem;
  color: #a07c5a;
  margin-bottom: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #a07c5a;
  margin-bottom: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #a07c5a;
  margin-bottom: 15px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const SubSubtitle = styled.h2`
  font-size: 1.25rem;
  color: #a07c5a;
  margin-bottom: 15px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;
export const Spacer = styled.div`
  height: 15px;
  width: 100%;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const ImageCaption = styled.p`
  font-size: 1em;
  color: #517970; /* Altere aqui para a cor desejada */
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageWrapper = styled.div`
  text-align: center;
  margin: 20px auto;
  max-width: 90vw; // Define a largura máxima como 90% da tela
  width: 100%; // Garante que não ultrapasse o contêiner
  max-width: 900px; // Mantém o limite da página para desktops maiores

  /* Ajusta a imagem dentro do wrapper */
  & img {
    width: 100%; // A imagem ocupa 100% do ImageWrapper
    height: auto;
    display: block; // Remove espaços extras abaixo da imagem
  }
`;

export const Image = styled.img`
  width: 100%; // Agora ela se ajusta ao tamanho do ImageWrapper
  height: auto;
  display: block;
`;

export const DividerLine = styled.hr`
  width: 20%;
  height: 3px;
  margin-top: 50px;
  margin-bottom: 50px;
  background: linear-gradient(to right, #a07c5a, #517970);
  border: none;
  border-radius: 1.5px;
`;
