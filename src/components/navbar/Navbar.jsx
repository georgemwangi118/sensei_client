import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./styles";
import { Menu } from "@mui/icons-material";

const styles = {
  height: "35px",
  width: "35px",
  marginRight: "10px",
};

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src="./images/logo.jpg" alt="logo" style={styles} />
          SENSEI
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <Menu />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/list">List your practice</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/search">Search</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Log In / Sign up</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
