import React, { useState, useEffect } from "react";

import {
  NewsletterContainer,
  LeftSection,
  RightSection,
  SubSection,
  Input,
  SubscribeButton,
  Popup,
  Overlay, // Importando o Overlay
} from "./styles";

const Newsletter: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Função para fechar o popup se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popupElement = document.getElementById("popup");
      if (popupElement && !popupElement.contains(event.target as Node)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPopup]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribeClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Impede o clique de ser registrado como um clique fora
    if (name && email) {
      setShowPopup(true);
    }
  };

  return (
    <>
      <NewsletterContainer>
        <LeftSection>
          Join our bonsai community and get expert tips, exclusive care guides,
          and the latest news, straight to your inbox!
        </LeftSection>
        <RightSection>
          <SubSection>
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
            />
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
            />
          </SubSection>
          <SubscribeButton onClick={handleSubscribeClick}>
            Subscribe
          </SubscribeButton>
        </RightSection>
      </NewsletterContainer>
      <Overlay visible={showPopup} />
      <Popup id="popup" visible={showPopup}>
        Thank you for subscribing to the Kaze no Mori Bonsai newsletter!
      </Popup>
    </>
  );
};

export default Newsletter;
