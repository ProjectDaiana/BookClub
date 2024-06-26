import styled from "styled-components";

// background-color: #FFA77A;
export const Container = styled.figure`
  cursor: ${({ $isLarge }) => ($isLarge ? "default" : "pointer")};
  margin: 0;
`;

export const Cover = styled.img`
  filter: ${({ $isLarge }) => ($isLarge ? "grayscale(0%)" : "grayscale(100%)")};
  //filter: grayscale(100%);
  border: 2px solid #000;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  max-width: 280px;
  margin-bottom: 16px;

  &:hover {
    // filter: ${({ $isLarge }) => ($isLarge ? "default" : "grayscale(100%)")};
    filter: none; /* Remove grayscale filter on hover */
    cursor: ${({ $isLarge }) => ($isLarge ? "default" : "pointer")};
  }
`;

export const Title = styled.h3`
  font-family: "loretta-variable", serif;
  font-size: ${({ $isLarge }) => ($isLarge ? "42px" : "26px")};
  font-weight: 600;
  margin: 0 0 6px 0;
  line-height: 1.3;

  @media (max-width: 800px) {
    font-size: ${({ $isLarge }) => ($isLarge ? "32px" : "22x")};
  }
`;

export const Author = styled.h4`
  font-family: "loretta-variable", serif;
  font-style: italic;
  font-size: 18px;
  color: #fb915b;
  line-height: 1.6;
  margin: 0;
`;
