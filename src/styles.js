import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "loretta-variable", serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}
`;

export const Pill= styled.div`
    background-color: #fff;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`

export const Close = styled.button`
  background: none;
  position: relative;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;

  &::before,
  &::after {
    background-color: #000;
    content: "";
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0px;
    left: 9px;
  }
 
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;