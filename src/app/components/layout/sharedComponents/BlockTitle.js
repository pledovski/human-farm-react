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
  font-family: "CircularStd";
  font-weight: bold;
  font-size: 30px;
  margin-right: 40px;
`;
const BlockParagraphElem = styled.div`
  font-family: "BasisGrotesquePro";
  font-weight: lighter;
  font-size: 16px;
  line-height: 1.8;
`;

export default function BlockTitle({ header, paragraph}) {
  return (
    <BlockTitleElem>
      <BlockHeaderElem>{ header }</BlockHeaderElem>
      <BlockParagraphElem>
        { paragraph }
      </BlockParagraphElem>
    </BlockTitleElem>
  );
}
