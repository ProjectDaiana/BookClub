import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles";
import BooksContainer from "./components/BooksContainer";
import DetailPanel from "./components/DetailPanel";
import Header from "./components/Header";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://book-club-json.herokuapp.com/books"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const books = await response.json();
      setBooks(books);
    };
    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} />
     {selectedBook && <DetailPanel book={selectedBook} />}
    </>
  );
};
export default App;
