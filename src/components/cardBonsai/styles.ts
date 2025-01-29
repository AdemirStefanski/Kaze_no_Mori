import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
`;

export const ImageContainer = styled.img`
  max-height: 150px;
  max-width: 180px;
  width: auto;
  height: 140px;
  margin: 10px auto 10px auto;
`;

export const Name = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`;

export const Separator = styled.div`
  width: 80px;
  height: 10px;
  background-color: #a07c5a;
  margin-bottom: 15px;
`;

export const Info = styled.div`
  font-size: 12px;
  color: #000;
  margin-bottom: 10px;

  span {
    font-weight: 600;
  }

  strong {
    font-weight: 400;
  }
`;

export const SupDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const PriceBuy = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px 10px 0px;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #517970;
`;

export const BuyButton = styled.button`
  background-color: #517970;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  cursor: pointer;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2),
    inset -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 4px rgba(0, 0, 0, 0);

  &:hover {
    background-color: #a07c5a;
  }
`;
