import React, { Fragment } from "react";
import styled from "styled-components";
import bulb from "../../../img/bulb.svg";
import fingerprint from "../../../img/fingerprint.svg";
import head from "../../../img/head.svg";
import link from "../../../img/link.svg";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
  margin-left: -7%;
  margin-right: -25%;
  margin-top: -200px;
  background-color: #1b166f;
`;

const BlockTitleElem = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: start;
  grid-template-rows: 1fr 3fr;
  padding: 90px 76px;
`;

const BlockHeaderElem = styled.div`
  font-family: "CircularStd-Bold";
  color: white;
  font-size: 30px;
  margin-right: 40px;
`;
const BlockParagraphElem = styled.div`
  font-family: "BasisGrotesquePro-Light";
  color: white;
  font-size: 16px;
  line-height: 1.8;
  margin-top: 30px;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-top: 70px;
  align-items: start;
  justify-content: center;
`;

const BenefitItemElem = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const BenefitImg = styled.img`
  width: 50px;
  height: 50px;
`;

const BenefitTitle = styled.h3`
  font-family: "CircularStd";
  font-size: 16px;
  font-weight: 350;
  color: white;
`;

const BenefitItem = ({ name, src }) => (
  <BenefitItemElem>
    <BenefitImg src={src} />
    <BenefitTitle>{name}</BenefitTitle>
  </BenefitItemElem>
);

const Benefits = () => (
  <Fragment>
    <MainContainer>
      <BlockTitleElem>
        <BlockHeaderElem>
          Crypto <br /> assets benefits
        </BlockHeaderElem>
        <BlockParagraphElem>
          Get your own crypto exchange and leave competitors behind With
          professional consulting team of experts
        </BlockParagraphElem>
      </BlockTitleElem>
      <RightContainer>
        <BenefitItem src={bulb} name="Decentralized" />
        <BenefitItem
          src={link}
          name={<p style={{fontFamily: "CircularStd", fontSize: '16px', fontWeight: '350'}}>Immutable <br/> and unchangeable</p>}
        />
        <BenefitItem
          src={fingerprint}
          name="Secure & Reliable"
        />
        <BenefitItem
          src={head}
          name={<p style={{fontFamily: "CircularStd", fontSize: '16px', fontWeight: '350'}}>Smart, <br/> configured for <br/> automatic transactions</p>}
        />
      </RightContainer>
    </MainContainer>
  </Fragment>
);

export default Benefits;
