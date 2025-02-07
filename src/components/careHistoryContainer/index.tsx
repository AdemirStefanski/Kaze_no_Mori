import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ImageLink } from "./styles";

import CareBonsai from "../../assets/images/careHistoryAccess/bonsaiCareLink.png";
import HistoryBonsai from "../../assets/images/careHistoryAccess/bonsaiHistoryLink.png";

const CareHistoryContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ImageLink onClick={() => navigate("/bonsai-care")}>
        <img src={CareBonsai} alt="Descrição da imagem 1" />
      </ImageLink>
      <ImageLink onClick={() => navigate("/bonsai-history")}>
        <img src={HistoryBonsai} alt="Descrição da imagem 2" />
      </ImageLink>
    </Container>
  );
};

export default CareHistoryContainer;
