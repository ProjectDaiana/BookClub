import React from "react";
import { Container, Cover, Title, Author } from "./styles";

const Book = ({ book, pickBook, isLarge }) => {
  return (
    <Container onClick={pickBook ? () => pickBook(book) : undefined}>
      <figure>
        <Cover
          alt={`Book cover for ${book.tittle} by ${book.author}`}
          src={book.image}
          $isLarge={isLarge}
        />
        <figcaption>
          <Title $isLarge={isLarge}>{book.title}</Title>
          <Author>{book.author}</Author>
        </figcaption>
      </figure>
    </Container>
  );
};

export default Book;
