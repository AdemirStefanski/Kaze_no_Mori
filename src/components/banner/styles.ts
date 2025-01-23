import styled from "styled-components";

interface BannerProps {
  backgroundImage: string;
}

export const BannerContainer = styled.div<BannerProps>`
  max-width: 1200px;
  width: 100%;
  height: 300px; /* Ajuste a altura conforme necessário */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* Garante que a camada de transparência fique contida */

  /* Camada de fundo com a imagem */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    opacity: 0.5; /* Define a transparência */
    z-index: -1;
  }
`;

export const Logo = styled.img`
  width: 67%;
  max-width: 800px; /* Ajuste esse valor conforme necessário */
  height: auto;
  position: relative;
  z-index: 1; /* Mantém o logo acima da camada de transparência */
`;
