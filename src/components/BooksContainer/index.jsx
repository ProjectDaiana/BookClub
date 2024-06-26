import React, {useRef, useState, useEffect} from "react";
import { debounce } from "lodash-es";
import { Container, H2, BookList } from "./styles";
//import { BookList } from "./styles";
import Book from "../Book";

const BooksContainer = ({ books, pickBook, isPanelOpen }) => {
  const [scroll, setScroll] = useState(0);
  const PrevPanelState = useRef(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
        setScroll(window.scrollY);
      }, 100);
      if (!isPanelOpen) {
        window.addEventListener("scroll", handleScroll);
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isPanelOpen]);

  useEffect(() => {
    if (PrevPanelState.current && !isPanelOpen) {
      window.scrollTo(0, scroll)
    }
    PrevPanelState.current = isPanelOpen;
  }, [isPanelOpen, PrevPanelState, scroll])
 
  return(
  <Container $isPanelOpen={isPanelOpen} $top={scroll}>
    <H2>All books</H2>
    <BookList>
      {books.map((book) => (
        <Book key={book.id} book={book} pickBook={pickBook} />
      ))}
    </BookList>
  </Container>
)};

export default BooksContainer;
