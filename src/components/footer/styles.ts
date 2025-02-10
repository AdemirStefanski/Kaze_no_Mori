import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #a07c5a;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const FooterRowThree = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  padding-left: 10px;
  margin-bottom: 20px;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

export const Logo = styled.img`
  width: auto;
  height: 60px;
`;

export const FollowText = styled.span`
  margin-right: 10px;
  font-size: 1.2rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const TwitterIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fff;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    fill: #a8c686;
    transform: scale(1.2);
  }
`;

export const InstagramIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fff;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    fill: #a8c686;
    transform: scale(1.2);
  }
`;

export const BlueSkyIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fff;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    fill: #a8c686;
    transform: scale(1.2);
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;
  }

  a {
    display: inline-block; /* Permite aplicar transformações */
    color: #ffffff;
    text-decoration: none;
    font-size: 1.2rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: #e4d7c6;
      transform: scale(1.2);
    }
  }
`;

export const Description = styled.p`
  text-align: left;
  line-height: 1.5;
  max-width: 400px;
  font-size: 1rem;

  strong {
    font-weight: bold;
  }
`;

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const PaymentTitle = styled.span`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const PaymentLogos = styled.div`
  display: flex;
  gap: 10px;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: auto;
  }
`;

export const FooterColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const FooterColumnPayment = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: end;
  padding: 10px;
`;

export const FooterColumnOne = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10px;
`;

export const CopyrightText = styled.span`
  font-size: 0.9rem;
  text-align: center;
`;
