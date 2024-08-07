import styled from "styled-components";
//background-color: #FFA77A;
export const Container = styled.div`
  background-color: #f5f5f5;
  max-width: 100vw;
  height: 100vh;
  //background-color: #e6ddde;
  padding: 160px 40px;
  //overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? "hidden" : "unset")};
  position: ${({ $isPanelOpen }) => ($isPanelOpen ? "fixed" : "unset")};
  top: ${({ $isPanelOpen, $top }) => ($isPanelOpen ? `-${$top}px` : 0)};
  @media (max-width: 800px) {
    padding: 114px 20px;
  }
  margin-left: auto;
  margin-right: auto;
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-left: inherit;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
