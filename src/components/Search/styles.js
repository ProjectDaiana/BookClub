import styled from "styled-components";
import { Pill } from "../../styles";
import { ReactComponent as MangnifyingIcon } from "../../assets/search.svg";

export const SearchContainer = styled(Pill)`
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? "420px" : "20px")};
  @media (max-width: 800px) {
    width: 85%;
  }
  input,
  button {
    transition: 300ms;

    display: ${({ $showOnDesktop }) => ($showOnDesktop ? "block" : "none")};

    @media (max-width: 800px) {
      display: block;
    }
  }
`;

export const Input = styled.input`
  font-family: "work-sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`;

export const Icon = styled(MangnifyingIcon)`
  width: 20px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    background-color: #fff;
    border-top: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
  }
`;
