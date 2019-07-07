import React, { Fragment } from "react";
import styled from "styled-components";
import { BlockHeaderElem } from "../layout/sharedComponents/BlockTitle";
import jeff from "../../../img/jeff-smith.jpg";
import harry from "../../../img/harry-pledov.png";
import dan from "../../../img/dan-nikitin.png";

const Container = styled.div`
  background-color: #1b166f;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 861px;
`;

const Wrapper = styled.div`
  width: 70%;
  padding-left: 14%;
`;

const BlockHeader = styled(BlockHeaderElem)`
  color: white;
  display: inline-block;
  margin: 50px 0;
`;

const MemberList = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const MemberItemElem = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const MemberImg = styled.img`
  width: 217px;
  height: 307px;
`;

const MemberName = styled.h3`
  color: white;
  font-family: "CircularStd";
  font-weight: 350;
  font-size: 18px;
  margin: 10px 0;
  padding-bottom: 10px;
`;

const MemberPosition = styled.h4`
  display: inline-block;
  line-height: 1.5rem;
  opacity: 0.75;
  font-family: "CircularStd";
  color: white;
  font-weight: lighter;
  font-size: 14px;
  margin: 3px 0px;
  padding-bottom: 1px;
`;

const MemberAbout = styled.p`
  line-height: 1.5rem;
  opacity: 0.6;
  color: white;
  font-family: "BasisGrotesquePro";
  font-weight: lighter;
  font-size: 14px;
  margin: 3px 0px;
`;

const MemberCompanies = styled(MemberAbout)`
  opacity: 1;
  color: #ff6d00;
`;

const MemberItem = ({ src, name, position, about, companies }) => (
  <Fragment>
    <MemberItemElem>
      <MemberImg src={src} />
      <MemberName>{name}</MemberName>
      <MemberPosition>{position}</MemberPosition>
      <MemberAbout>{about}</MemberAbout>
      <MemberCompanies>{companies}</MemberCompanies>
    </MemberItemElem>
  </Fragment>
);

export default function Team() {
  return (
    <Container>
      <Wrapper>
        <BlockHeader>Our Team</BlockHeader>
        <MemberList>
          <MemberItem
            src={jeff}
            name="Jeffrey Smith"
            position={
              <span>
                Chief Information Officer at <br /> Humanfarm Fintech solutions
              </span>
            }
            about={
              <span>
                Jeff has started multiple succesful <br /> exchanges including
              </span>
            }
            companies={
              <span>
                CEX.IO, CTrader.com, cAlgo.com, <br /> cMirror.com,
                ExMarkets.com, <br />
                CoinMargin.com, CoinSupply.com
              </span>
            }
          />
          <MemberItem
            src={harry}
            name="Harry Pledov"
            position={
              <span>
                Chief Executive Officer at Humanfarm. <br />
                Fintech and mining expert
              </span>
            }
            about={<span>Having worked with mining giants like</span>}
            companies={
              <span>
                CEX.IO, GHash.IO, ExMarkets.com, <br />
                CoinMargin.com, CoinSupply.com
              </span>
            }
          />
          <MemberItem
            src={dan}
            name="Dan Nikitin"
            position={
              <span>
                Expert in b2b / b2c fintech advrtisement and <br /> media
                presence.
              </span>
            }
            about={
              <span>
                Chief Information Officer at <br /> Humanfarm Fintech solutions
              </span>
            }
            companies={
              <span>
                TopFX.com, Forex.com, Fondex.com <br />
                CTrader.com, cAlgo.com, cMirror.com
              </span>
            }
          />
        </MemberList>
      </Wrapper>
    </Container>
  );
}
