import React, { useRef, useState } from "react";
import { SearchContainer, Input, Icon, Wrapper } from "./styles";
import { Close } from "../../styles";
import { set } from "lodash";

const Search = ({ filterBooks }) => {
  const inputEl = useRef(null);
  const [showOnDesktop, setShowOnDesktop] = useState(false);
  const handleChange = (event) => {
    console.log(event.target.value);
    filterBooks(event.target.value);
  };

  const clearSearch = () => {
    inputEl.current.value = "";
    filterBooks("");
    setShowOnDesktop(false);
  };

  const showSearch = () => {
    setShowOnDesktop(true);
  };

  return (
    <Wrapper>
    <SearchContainer $showOnDesktop={showOnDesktop}>
      <Icon onClick={showSearch} />
      <Input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search for a book"
        onChange={handleChange}
        ref={inputEl}
      />
      <Close onClick={clearSearch} />
    </SearchContainer>
    </Wrapper>
  );
};

export default Search;
