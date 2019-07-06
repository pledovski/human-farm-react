import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import Logo from "./Logo";

const NavContent = styled.div`
  /* position:fixed; */
  top: 0px;
  display: grid;
  position: fixed;
  grid-template-columns: 180px 1fr;
  background-color: white;
`;

const Nav = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 35px;
  /* justify-content: center; */
`;

const NavLinkElem = styled.a`
  cursor: pointer;
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: CircularStd;
  font-weight: 350;
  font-size: 1rem;
  line-height: 1.6;
  padding: 0 40px;

  ${props =>
    props.active &&
    css`
      color: #ff6d00;
      /* border-bottom: #ff6d00 1px solid; */
      text-shadow: 0 0 60px #ff6d00;
    `}
`;

const NavLink = ({ name, active }) => (
  <NavLinkElem active={active}>{name}</NavLinkElem>
);

const Header = () => {
  return (
    <Fragment>
      <NavContent>
        <Logo />
        <Nav>
          <NavLink href="#home" name="Home" />
          <NavLink active href="#what-we-offer" name="What we offer" />
          <NavLink href="#about-us" name="About us" />
          <NavLink href="#contacts" name="Contacts" />
        </Nav>
      </NavContent>
    </Fragment>
  );
};

export default Header;
