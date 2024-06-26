import styled from "styled-components";

export const Panel = styled.article`
  background-color: #fff;
  border-left: 2px solid #000;

  height: calc(100vh - 82px);
  width: 660px;

  position: fixed;
  z-index: 2;
  right: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 0 : -660}px;
  bottom: 0;

  box-sizing: border-box;
  padding: 40px 120px 60px 40px;

  overflow: scroll;
  transition: 300ms;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    bottom: ${({ $state }) =>
      $state === "entering" || $state === "entered" ? 0 : -100}vh;
    right: unset;
  }
`;

export const Cover = styled.img`
  filter: grayscale(0%);

  &:hover {
    filter: none; /* Remove grayscale filter on hover */
  }
`;

export const P = styled.p`
  font-family: "loretta-variable", serif;
  font-size: 18px;
  line-height: 1.6;
  margin: 30px 0 0;
`;

export const Em = styled.em`
  font-style: italic;
`;

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

export const CloseWrapper = styled.div`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  display: ${({ $state }) =>
    $state === "entered" ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  // overflow: hidden;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  &:hover {
    background-color: #fb915b;
  }

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`;

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 1 : 0};
  pointer-events: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? "auto" : "none"};
  transition: 300ms;
`;
