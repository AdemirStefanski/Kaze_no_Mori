// CareHistoryContainer.styles.ts
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 30px auto;
  padding: 20px;

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageLink = styled.a`
  max-width: 350px;
  width: calc(50% - 40px);
  min-width: 100px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 740px) {
    width: calc(100% - 40px);
  }
`;
