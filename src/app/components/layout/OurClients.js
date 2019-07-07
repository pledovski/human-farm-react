import React, { Component } from "react";
import styled, { css } from "styled-components";
import BlockTitle from "./sharedComponents/BlockTitle";
import cex from "../../../img/cex.png";
import utorg from "../../../img/utorg-logo-white.png";
import zerohub from "../../../img/zerohub.png";

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin: 30px 0;
  align-content: center;
`;

const ClientsListElem = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: start;
  margin: 75px 0;
`;

const ClientItemElem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ClientTitle = styled.h3`
  font-family: "BasisGrotesquePro";
  font-weight: lighter;
  font-size: 16px;
`;

const ClientImg = styled.img`
  width: 77px;
  height: auto;
  justify-self: center;
  ${props => props.inverted && css`
    filter: invert(1);
  `}
`;

const ClientItem = ({ clientName, src, inverted }) => (
  <ClientItemElem>
    <ClientImg inverted={inverted} src={src} />
    <ClientTitle>{clientName}</ClientTitle>
  </ClientItemElem>
);

const OurClients = () => (
  <Container>
    <BlockTitle
      header={
        <p>
          Our <br /> clients
        </p>
      }
      paragraph={
        <p>
          Get your own crypto exchange and leave competitors behind <br />
          With professional consulting team of experts
        </p>
      }
    />
    <ClientsListElem>
      <ClientItem clientName="CEX.IO" src={cex} />
      <ClientItem inverted clientName="Utorg.io" src={utorg} />
      <ClientItem clientName="0hub.com" src={zerohub} />
      <ClientItem clientName="CEX.IO" src={cex} />
      <ClientItem inverted clientName="Utorg.io" src={utorg} />
      <ClientItem clientName="0hub.com" src={zerohub} />
    </ClientsListElem>
  </Container>
);

export default OurClients;
