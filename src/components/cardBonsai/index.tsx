import React, { useState, useEffect } from "react";

import {
  CardContainer,
  ImageContainer,
  Name,
  Separator,
  Info,
  Price,
  BuyButton,
  SupDiv,
  PriceBuy,
} from "./styles";

interface Bonsai {
  id: number;
  name: string;
  images: string[];
  age: string;
  height: string;
  price: string;
}

const CardBonsai: React.FC<{ bonsai: Bonsai }> = ({ bonsai }) => {
  const [currentImage, setCurrentImage] = useState(bonsai.images?.[0] || "");
  const [hovering, setHovering] = useState(false);
  let imageIndex = 0;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (hovering && bonsai.images && bonsai.images.length > 1) {
      interval = setInterval(() => {
        imageIndex = (imageIndex + 1) % bonsai.images.length;
        setCurrentImage(bonsai.images[imageIndex]);
      }, 700); // Change image every 1 second
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hovering, bonsai.images]);

  // Reset image to the first one when mouse leaves
  const handleMouseLeave = () => {
    setHovering(false);
    setCurrentImage(bonsai.images[0]); // Set to the initial image
  };

  return (
    <CardContainer>
      <ImageContainer
        src={currentImage}
        alt={bonsai.name}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave} // Use the new handleMouseLeave
      />
      <Name>{bonsai.name}</Name>
      <Separator />
      <Info>
        <span>Age:</span> <strong>{bonsai.age}</strong>
      </Info>
      <Info>
        <span>Height:</span> <strong>{bonsai.height}</strong>
      </Info>
      <SupDiv>
        <PriceBuy>
          <Price>R$ {bonsai.price}</Price>
          <BuyButton onClick={() => alert("Navigate to BUY page")}>
            View Details
          </BuyButton>
        </PriceBuy>
      </SupDiv>
    </CardContainer>
  );
};

export default CardBonsai;
