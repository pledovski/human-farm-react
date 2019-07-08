import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../AppProvider";
import OfferDetails from "./sharedComponents/OfferDetails";
import { BlockTitle } from "./sharedComponents/BlockTitle";
import SizeContainer from "../layout/sharedComponents/SizeContainer";
import plus from "../../../img/add-orange.svg";
import minus from "../../../img/minus.svg";

const Plus = styled.img`
  display: inline-block;
  width: 18px;
  height: 18px;
  /* ${props =>
    props.active &&
    css`
      content: ({minus});
    `} */
`;

export const WideBackground = styled.div`
  background-color: #f9f9f9;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-bottom: 300px;
  /* height: 1500px; */
`;

const OfferButtonElem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #1c1c4a;
  font-family: "CircularStd";
  font-weight: 350;
  font-size: 1rem;
  width: 200px;
  margin: 0 0 50px 0;
  padding-bottom: 10px;
  border: 0;
  background-color: transparent;
  border-bottom: #1c1c4a 1px solid;
  :hover {
    border-bottom: #ff6d00 1px solid;
    color: #ff6d00;
  }
  :focus {
    outline: none;
  }
  ${props =>
    props.active &&
    css`
      border-bottom: #ff6d00 1px solid;
      color: #ff6d00;
    `}
`;

const ButtonsListElem = styled.div`
  display: grid;
  margin: 50px 0 0 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const OfferButton = ({ name, active }) => (
  <AppContext.Consumer>
    {({ offer, setOffer, toggleDisplayOffer, displayOffer }) => (
      <OfferButtonElem
        active={offer === name}
        onClick={() => {
          setOffer(name);
          toggleDisplayOffer(!displayOffer);
        }}
      >
        {name} <Plus active={active} src={plus} />
      </OfferButtonElem>
    )}
  </AppContext.Consumer>
);

const WhatDoWeOffer = displayOffer => {
  return (
    <WideBackground>
      <SizeContainer>
        <BlockTitle
          header={
            <p>
              What <br /> do we offer
            </p>
          }
          paragraph={
            <p>
              Get your own crypto exchange and leave competitors behind <br />
              With professional consulting team of experts
            </p>
          }
        />
        <ButtonsListElem>
          <OfferButton name="Exchange" />
          <OfferButton name="Crypto wallet" />
          <OfferButton name="Crypto Processing" />
          <OfferButton name="Market making" />
          <OfferButton name="KYC/AML" />
          <OfferButton name="Consulting" />
        </ButtonsListElem>
        <AppContext.Consumer>
          {({ displayOffer }) =>
            displayOffer ? (
              <Fragment>
                <OfferDetails />
              </Fragment>
            ) : null
          }
        </AppContext.Consumer>
      </SizeContainer>
    </WideBackground>
  );
};

export default WhatDoWeOffer;
