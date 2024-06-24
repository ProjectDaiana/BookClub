import React from "react";
import { Logo, HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo title="Book club" alt="Book Club" />
      </a>
    </HeaderContainer>
  );
};

export default Header;
