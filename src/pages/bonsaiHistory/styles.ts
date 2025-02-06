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

export const BoldText = styled.span`
  font-weight: bold;
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

export const ImageWrapperChina = styled.div`
  text-align: center;
  margin: 20px auto;
  max-width: 90vw;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center; // Centraliza a imagem e o texto no wrapper
`;

export const ImageChina = styled.img`
  width: auto; // Mantém o tamanho original da imagem
  max-width: 100%; // Garante que não ultrapasse o container
  height: auto; // Mantém a proporção original
  display: block;
`;

export const TitleMid = styled.h1`
  font-size: 2rem;
  color: #a07c5a;
  max-width: 500px; // Largura menor que o texto principal
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  text-align: center; // Centraliza o texto
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
export const Spacer = styled.div`
  height: 30px;
  width: 100%;
`;
