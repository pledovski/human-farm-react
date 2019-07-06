import React, { Fragment, Component } from "react";
import styled from "styled-components";
import RequestButton from "../layout/sharedComponents/RequestButton";

const ShowcaseElem = styled.div`
  padding-top: 186px;
  padding-bottom: 250px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
`;

const LeftContainerRegular = styled.div`
  font-family: "BasisGrotesquePro-Light";
  font-weight: lighter;
  display: inline;
  font-size: 58px;
`;

const LeftContainerBold = styled.span`
  font-family: "CircularStd-Bold";
`;

const LeftContainer = () => {
  return (
    <Fragment>
      <LeftContainerRegular>
        Join the <br />crypto revolution with{" "}
        <LeftContainerBold>Blockchain technology!</LeftContainerBold>
      </LeftContainerRegular>
    </Fragment>
  );
};

const RightParagraphElem = styled.p`
  font-size: 20px;
  line-height: 1.8;
  font-family: "BasisGrotesquePro-Light";
`;

const RightContainerElem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const RightContainer = () => {
  return (
    <Fragment>
      <RightContainerElem>
        <RightParagraphElem>
          Get your own crypto exchange <br/> and leave competitors behind With
          professional consulting team of experts
        </RightParagraphElem>
        <RequestButton />
      </RightContainerElem>
    </Fragment>
  );
};

export default class Showcase extends Component {
  render() {
    return (
      <Fragment>
        <ShowcaseElem>
          <LeftContainer>
            Join the crypto revolution with Blockchain technology!
          </LeftContainer>
          <RightContainer />
        </ShowcaseElem>
      </Fragment>
    );
  }
}
