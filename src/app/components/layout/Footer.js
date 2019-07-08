import React from "react";
import styled from "styled-components";
import { BlockParagraphElem } from "../../components/layout/sharedComponents/BlockTitle";
import RequestButton from "../../components/layout/sharedComponents/RequestButton";
import logo from "../../../img/human-farm-logo.svg";

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  width: 70%;
  padding: 50px 0;
  padding-left: 14%;
`;

const Container = styled.div`
  background-color: #f9f9f9;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 300px;
`;

const ColoredLine = styled.hr`
  color: grey;
  background-color: grey;
  width: 70%;
  height: 0.5px;
`;

const Credentials = styled.div`
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  width: 70%;
  padding-left: 12.5%;
  display: grid;
  grid-auto-flow: column;
  margin: 40px 0;
`;

const Branding = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SmallLogo = styled.img`
  height: 48px;
  width: 37px;
`;

const Site = styled.a`
  justify-content: center;
  font-family: "CircularStd";
  font-weight: 350;
  font-size: 14px;
`;

const Rights = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <BlockParagraphElem>
          Whant to know more information about <br /> our sevices? <br />
          Send a request{" "}
        </BlockParagraphElem>
        <RequestButton name="REQUEST" />
      </Wrapper>
      <ColoredLine />
      <Credentials>
        <Branding>
          <SmallLogo src={logo} />
          <Site>{' '}Humanfarm.io</Site>
        </Branding>
        <Rights>All rights reserved 2016-2019</Rights>
      </Credentials>
    </Container>
  );
};

export default Footer;
