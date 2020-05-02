import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { observer } from "mobx-react-lite";
import { useGlobalDataStore } from "../state/globals";
import { InventoryItem, Btn } from "../StyledItems";
import { HeaderMd, TextSmCss } from "../StyledItems/fontSizing";

const Strings = {
  title: "Warehouse",
  hideRemove: "Hide remove",
  remove: "Remove Items from Warehouse",
};

const Warehouse = observer(() => {
  const {
    warehouse,
    displayItemname,
    removeFromWarehouse,
  } = useGlobalDataStore();
  const [showWarehouse, setShowWarehouse] = useState(false);
  const switchShowWarehouse = () => setShowWarehouse(!showWarehouse);
  const [showRemove, setShowRemove] = useState(false);
  const switchRemove = () => setShowRemove(!showRemove);
  // TODO ; remove items

  return (
    <Wrapper>
      <HeaderWrapper>
        <ShowBtn onClick={switchShowWarehouse}>
          {showWarehouse ? "X" : "V"}
        </ShowBtn>
        <HeaderMd>{Strings.title}</HeaderMd>
      </HeaderWrapper>
      {showWarehouse && (
        <>
          <Removebtn onClick={switchRemove}>
            {showRemove ? Strings.hideRemove : Strings.remove}
          </Removebtn>
          <WarehouseWrapper>
            {warehouse.map((item, index) => {
              const remove = () => removeFromWarehouse(index);
              return (
                <InventoryItem
                  key={item.name}
                  name={item.name}
                  desc={item.desc}
                  quantity={item.quantity}
                  icon={item.icon}
                  forceName={displayItemname}
                  btnText={showRemove ? "-" : false}
                  btnOnclick={remove}
                />
              );
            })}
          </WarehouseWrapper>
        </>
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  padding: calc(0.5rem + 1.5vw);
  border-bottom: 3px solid grey;
  background: rgba(60, 60, 60, 0.7);
`;
const HeaderWrapper = styled.div`
  display: flex;
`;
const ShowBtn = styled(Btn)`
  width: auto;
  margin-right: calc(16px + 1vw);
`;
const WarehouseWrapper = styled.div`
  margin: calc(4px + 1vw);
  padding: calc(4px + 0.5vw);
  display: flex;
  flex-wrap: wrap;
`;
const Removebtn = styled(Btn)`
  ${TextSmCss}
  width: fit-content;

  ${media.greaterThan("medium")`
    width: fit-content;
  `}
`;

export default Warehouse;
