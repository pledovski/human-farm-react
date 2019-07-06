import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import Logo from "./Logo";

const NavContent = styled.div`
  /* position:fixed; */
  top: 0px;
  display: grid;
  grid-template-columns: 180px 1fr;
`;

const Nav = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 51px;
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
  padding: 0 20px;

  ${props => props.active && css`
    color:#FF6D00;
    border-bottom: #FF6D00 1px solid;
  `}
`

const NavLink = ({ name, active }) => (<NavLinkElem active={active}>
  { name }
</NavLinkElem>)

const Header = () => {
  return (
    <Fragment>
      <NavContent>
        <Logo />
        <Nav>
          <NavLink active name="Home"/>
          <NavLink name="What we offer"/>
          <NavLink name="About us"/>
          <NavLink name="Contacts"/>
        </Nav>
      </NavContent>
    </Fragment>
  );
};

export default Header;
