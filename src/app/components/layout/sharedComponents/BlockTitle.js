import React from "react";
import styled from "styled-components";

const BlockTitleElem = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr 3fr;
  padding-top: 91px;
`;

const BlockHeaderElem = styled.div`
  font-family: "CircularStd-Bold";
  font-size: 30px;
  margin-right: 40px;
`;
const BlockParagraphElem = styled.div`
  font-family: "BasisGrotesquePro-Light";
  font-size: 16px;
  line-height: 1.8;
`;

export default function BlockTitle() {
  return (
    <BlockTitleElem>
      <BlockHeaderElem>What <br/> do we offer</BlockHeaderElem>
      <BlockParagraphElem>
        Get your own crypto exchange and leave competitors behind <br/> With
        professional consulting team of experts
      </BlockParagraphElem>
    </BlockTitleElem>
  );
}
