import React, { useState } from "react";
import styled from "styled-components";
import { TextMdCss, HeaderMd } from "../StyledItems/fontSizing";

const Strings = {
  title: "Warehouse",
};

const Warehouse = () => {
  const [showWarehouse, setShowWarehouse] = useState(false);
  const switchShowWarehouse = () => setShowWarehouse(!showWarehouse);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Btn onClick={switchShowWarehouse}>{showWarehouse ? "X" : "V"}</Btn>
        <HeaderMd>{Strings.title}</HeaderMd>
      </HeaderWrapper>
      {showWarehouse && (
        <WarehouseWrapper>
          <div>1 -sdfgafds</div>
          <div>2 -sdfgafds</div>
        </WarehouseWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: calc(0.5rem + 1.5vw);
  border-bottom: 3px solid grey;
  background: rgba(60,60,60,0.70);
`;
const HeaderWrapper = styled.div`
  display: flex;
`;
const Btn = styled.div`
  cursor: pointer;
  background: rgba(54, 54, 52, 0.6);
  border: 2px solid black;
  border-radius: 5px;
  padding: calc(4px + 0.5vw) calc(8px + 0.6vw);
  ${TextMdCss};
  margin-right: calc(16px + 1vw);;
`;
const WarehouseWrapper = styled.div`
  margin: calc(4px + 1vw);
  padding: calc(4px + 0.5vw);
`;

export default Warehouse;
