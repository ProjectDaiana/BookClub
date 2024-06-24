import React from "react";
import { Panel } from "./styles";
import Book from "../Book";
import { P, Em } from "../DetailPanel/styles";

const DetailPanel = ({ book }) => {
  return (
    <Panel>
        <Book book={book} isLarge={true} />
        <P>{book.description}</P>
        <P>
            <Em>Published in {book.published}</Em>
        </P>
    </Panel>
  );
};

export default DetailPanel;
