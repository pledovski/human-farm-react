import React from "react";
import styled from "styled-components";
import BlockHeader from "../layout/sharedComponents/BlockHeader";
import SizeContainer from "../layout/sharedComponents/SizeContainer";
import plus from "../../../img/add-orange.svg";

const Plus = styled.img`
  display: inline-block;
  width: 18px;
  height: 18px;
`;

const WhatDoWeOfferElem = styled.div`
  z-index: -1000;
  background-color: #f9f9f9;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 861px;
`;

const OfferButtonElem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #1c1c4a;
  font-family: CircularStd;
  font-weight: 350;
  font-size: 1rem;
  width: 200px;
  margin: 0 0 100px 0;
  padding-bottom: 10px;
  border: 0;
  background-color: transparent;
  border-bottom: #1c1c4a 1px solid;
  :hover {
    border-bottom: #ff6d00 1px solid;
    color: #ff6d00;
  }
`;

const ButtonsListElem = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const WhatDoWeOffer = () => {
  return (
    <WhatDoWeOfferElem>
      <SizeContainer>
        <BlockHeader />
        <ButtonsListElem>
          <OfferButtonElem>
            Exchange
            <Plus src={plus} />
          </OfferButtonElem>
          <OfferButtonElem>
            Crypto wallet
            <Plus src={plus} />
          </OfferButtonElem>
          <OfferButtonElem>
            Crypto Processing
            <Plus src={plus} />
          </OfferButtonElem>
          <OfferButtonElem>
            Market making
            <Plus src={plus} />
          </OfferButtonElem>
          <OfferButtonElem>
            KYC
            <Plus src={plus} />
          </OfferButtonElem>
          <OfferButtonElem>
            Consulting
            <Plus src={plus} />
          </OfferButtonElem>
        </ButtonsListElem>
      </SizeContainer>
    </WhatDoWeOfferElem>
  );
};

export default WhatDoWeOffer;
