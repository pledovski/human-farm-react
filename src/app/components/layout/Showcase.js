import React, { Fragment, Component } from "react";
import styled from "styled-components";
import RequestButton from "../layout/sharedComponents/RequestButton";

const LeftContainerRegular = styled.div`
  font-family: "BasisGrotesquePro-Light";
  font-weight: lighter;
  display: inline;
  font-size: 2.7rem;
  margin-right: 3vw;
`;

const LeftContainerBold = styled.span`
  font-family: "CircularStd-Bold";
`;

const LeftContainer = () => {
  return (
    <Fragment>
      <LeftContainerRegular>
        Join the <br />crypto revolution <br/> with{" "}
        <LeftContainerBold>Blockchain technology!</LeftContainerBold>
      </LeftContainerRegular>
    </Fragment>
  );
};

const RightParagraphElem = styled.p`
  font-size: 0.9rem;
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
          Get your own crypto exchange and <br/> leave competitors behind <br /> With
          professional consulting team of experts
        </RightParagraphElem>
        <RequestButton name="REQUEST" />
      </RightContainerElem>
    </Fragment>
  );
};

const ShowcaseElem = styled.div`
  padding-top: 186px;
  padding-bottom: 136px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
`;

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
