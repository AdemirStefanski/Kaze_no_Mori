import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { BannerContainer, Logo } from "./styles";
import logo from "../../assets/logos/logo_name.png";

// Importando imagens de forma estática
import banner1 from "../../assets/images/banner/bonsai_banner_01.jpg";
import banner2 from "../../assets/images/banner/bonsai_banner_02.jpg";
import banner3 from "../../assets/images/banner/bonsai_banner_03.jpg";

// Lista de imagens importadas
const bannerImages = [banner1, banner2, banner3];

const Banner: React.FC = () => {
  // Escolhe uma imagem aleatória ao carregar a página
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * bannerImages.length);
    return bannerImages[randomIndex];
  }, []);

  return (
    <BannerContainer backgroundImage={randomImage}>
      <Logo
        src={logo}
        alt="Logotipo da Empresa"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      />
    </BannerContainer>
  );
};

export default Banner;
