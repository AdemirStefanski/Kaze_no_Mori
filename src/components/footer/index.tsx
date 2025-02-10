import React from "react";
import {
  FooterContainer,
  FooterRow,
  FooterRowThree,
  LeftSection,
  RightSection,
  Logo,
  FollowText,
  SocialIcons,
  MenuList,
  Description,
  PaymentSection,
  PaymentTitle,
  PaymentLogos,
  LogoDiv,
  FooterColumn,
  CopyrightText,
  TwitterIcon,
  InstagramIcon,
  BlueSkyIcon,
  FooterColumnOne,
  FooterColumnPayment,
} from "./styles";

import { ArrowRight } from "lucide-react";
import { ChevronRight } from "lucide-react";

import LogoKazeNoMori from "../../assets/logos/logo_footer.png";

import Mastercard from "../../assets/icons/payment/mastercard.png";
import Visa from "../../assets/icons/payment/visa.png";
import Elo from "../../assets/icons/payment/elo.png";
import Ticket from "../../assets/icons/payment/ticket.png";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* Primeira Linha */}
      <FooterRow>
        <LeftSection>
          <Logo src={LogoKazeNoMori} alt="Logo" />
        </LeftSection>
        <RightSection>
          <FollowText>Follow us</FollowText>
          <SocialIcons>
            <TwitterIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </TwitterIcon>

            <InstagramIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </InstagramIcon>

            <BlueSkyIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z" />
            </BlueSkyIcon>
          </SocialIcons>
        </RightSection>
      </FooterRow>

      {/* Segunda Linha */}
      <FooterRow>
        {/* Coluna 1: Menu */}
        <FooterColumnOne>
          <MenuList>
            <li>
              <a href="/bonsais">
                <ChevronRight size={16} style={{ marginRight: "8px" }} />
                Bonsais
              </a>
            </li>
            <li>
              <a href="/tools">
                <ChevronRight size={16} style={{ marginRight: "8px" }} />
                Tools
              </a>
            </li>
            <li>
              <a href="/supplies">
                <ChevronRight size={16} style={{ marginRight: "8px" }} />
                Supplies
              </a>
            </li>
            <li>
              <a href="/accessories">
                <ChevronRight size={16} style={{ marginRight: "8px" }} />
                Accessories
              </a>
            </li>
            <li>
              <a href="/pots">
                <ChevronRight size={16} style={{ marginRight: "8px" }} />
                Pots
              </a>
            </li>
          </MenuList>
        </FooterColumnOne>

        {/* Coluna 2: Descrição */}
        <FooterColumn>
          <Description>
            I emphasize that this is an illustrative website, with no
            commercialization of any displayed items.
          </Description>
        </FooterColumn>

        {/* Coluna 3: Métodos de Pagamento */}
        <FooterColumnPayment>
          <PaymentSection>
            <PaymentTitle>Payment Methods</PaymentTitle>
            <PaymentLogos>
              <LogoDiv>
                <img src={Visa} alt="Visa" />
              </LogoDiv>
              <LogoDiv>
                <img src={Mastercard} alt="Mastercard" />
              </LogoDiv>
              <LogoDiv>
                <img src={Elo} alt="Elo" />
              </LogoDiv>
              <LogoDiv>
                <img src={Ticket} alt="Invoice" />
              </LogoDiv>
            </PaymentLogos>
          </PaymentSection>
        </FooterColumnPayment>
      </FooterRow>

      {/* Terceira Linha */}
      <FooterRowThree>
        <CopyrightText>
          © 2025 Ademir Stefanski | All rights reserved
        </CopyrightText>
      </FooterRowThree>
    </FooterContainer>
  );
};

export default Footer;
