import React, { Fragment } from "react";
import styled from "styled-components";
import logo from "../../../img/human-farm-logo.svg";

const AppLogo = styled.img`
  display: grid;
  align-content: center;
  justify-content: start;
  width: 45px;
  height: 58px;
  position: relative;
  margin-top: 21px;
  margin-bottom: 21px;
`;

export default () => (
  <Fragment>
    <AppLogo src={logo} alt="logo" />
  </Fragment>
);
