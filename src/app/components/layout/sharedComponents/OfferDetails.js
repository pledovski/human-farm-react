import React, { Fragment } from "react";
import styled from "styled-components";
import RequestButton from "./RequestButton";
import exchange from '../../../../img/exchange.jpg'

const OfferItem = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const OfferImage = styled.img`
  height: 455px;
  width: 100%;
`;

const OfferName = styled.h2`
  font-family: CircularStd;
  font-weight: normal;
  font-size: 20px;
`;

const OfferDescription = styled.h3`
  font-family: CircularStd;
  font-weight: 350;
  font-size: 18px;
`;

const AboutOffer = styled.p`
  font-family: BasisGrotesquePro;
  font-weight: lighter;
  font-size: 16px;
`;

export default function OfferDetails() {
  return (
    <Fragment>
      <OfferItem>
        <OfferImage src={exchange} />
        <OfferName>Build or buy your own crypto exchange</OfferName>
        <OfferDescription>
          Build your own exchange or buy out the box solution{" "}
        </OfferDescription>
        <AboutOffer>
          {" "}
          • Professional exchange <br/> • Edvanced futures <br/> • bla bla bla
        </AboutOffer>
        <RequestButton name="MORE INFO" />
      </OfferItem>
    </Fragment>
  );
}
