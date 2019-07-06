import React, { Fragment } from "react";
import styled from "styled-components";

const ButtonElem = styled.a`
  font-family: "CircularStd-Medium";
  font-size: 20px;
  color: #ff6d00;
  text-decoration: none;
  display: inline-block;
  width: 199px;
  line-height: 48px;
  border-bottom: #ff6d00 3px solid;
`;

const RequestButton = () => {
  return (
  <Fragment>
    <ButtonElem>REQUEST</ButtonElem>
  </Fragment>);
};

export default RequestButton;
