import React, { Fragment } from "react";
import styled from "styled-components";
import { BlockHeaderElem } from "../layout/sharedComponents/BlockTitle";
import client from "../../../img/client.png";
import client2 from "../../../img/client2.jpg";

const BlockHeader = styled(BlockHeaderElem)`
  display: inline-block;
  margin: 50px 0;
`

const Container = styled.div`
  z-index: -1;
  background-color: #f9f9f9;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const Wrapper = styled.div`
  width: 70%;
  padding-left: 12.5%;
`;

const ClientListElem = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  margin-bottom: 50px;
`;

const ClientItemElem = styled.div``;

const ClientImg = styled.img`
  height: 214px;
  width: 194px;
`;

const ClientName = styled.h3`
  font-family: "CircularStd";
  font-weight: 350;
  font-size: 18px;
  margin: 5px 0;
`;

const ClientPosition = styled.h4`
  font-family: "CircularStd";
  font-weight: 350;
  font-size: 14px;
  color: #ff8000;
  margin: 0;
  padding-bottom: 1px;
`;

const ClientQuote = styled.p`
  font-family: "BasisGrotesquePro";
  font-weight: lighter;
  font-size: 14px;
  opacity: 0.5;
  padding-bottom: 14px;
  margin-block-start: 0.75em;
  margin-block-end: 0;
`;

const ClientItem = ({ src, name, position, quote }) => (
  <ClientItemElem>
    <ClientImg src={src} />
    <ClientName>{name}</ClientName>
    <ClientPosition>{position}</ClientPosition>
    <ClientQuote>{quote}</ClientQuote>
  </ClientItemElem>
);

const AboutUs = () => (
  <Fragment>
    <Container>
      <Wrapper>
      <BlockHeader>
        Clients <br /> about us
      </BlockHeader>
        <ClientListElem>
          <ClientItem
            src={client}
            name="Pavel Mavel"
            position="CEO"
            quote="Guys, you are awesome!"
          />
          <ClientItem
            src={client2}
            name="Pavel Mavel"
            position="CEO"
            quote="Guys, you are awesome!"
          />
          <ClientItem
            src={client}
            name="Pavel Mavel"
            position="CEO"
            quote="Guys, you are awesome!"
          />
          <ClientItem
            src={client2}
            name="Pavel Mavel"
            position="CEO"
            quote="Guys, you are awesome!"
          />
        </ClientListElem>
      </Wrapper>
    </Container>
  </Fragment>
);

export default AboutUs;
