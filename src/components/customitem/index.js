import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { observer } from "mobx-react-lite";

import Data from "../../constants";
import { useGlobalDataStore } from "../state/globals";
import { Btn } from "../StyledItems";
import { TextMdCss, TextSmCss } from "../StyledItems/fontSizing";
import Modal from "../modal";

const Strings = {
  title: "Custom Item",
  trigger: "Add Item",
};

const CustomItem = observer(() => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);
  const { addToWarehouse } = useGlobalDataStore();

  return (
    <>
      <MainBtn onClick={openModal}>{Strings.title}</MainBtn>
      {showModal ? (
        <Modal title={Strings.title} onHide={hideModal}>
          <CustomItemModal onAdd={addToWarehouse} hideModal={hideModal} />
        </Modal>
      ) : null}
    </>
  );
});

const customNameId = "customItemName";
const customDescriptionId = "customItemDesc";
const customQuantityId = "customItemQuantity";

const CustomItemModal = ({ onAdd, hideModal }) => {
  const getImportedJump = () => {
    const newItem = {
      name: document.getElementById(customNameId).value,
      desc: document.getElementById(customDescriptionId).value,
      quantity: parseInt(document.getElementById(customQuantityId).value),
      icon: false,
    };
    if (newItem.name.length > 2 && newItem.desc && newItem.quantity > 0) {
      onAdd(newItem);
      hideModal();
    } else {
      window.alert("make sure has name, description & quantity of more than 0");
    }
  };

  return (
    <Wrapper>
      <StyledLabel htmlFor={customNameId}>Name: </StyledLabel>
      <InputStyled type="text" id={customNameId} />
      <br />
      <StyledLabel htmlFor={customDescriptionId}>Description: </StyledLabel>
      <InputStyled type="text" id={customDescriptionId} />
      <br />
      <StyledLabel htmlFor={customQuantityId}>Quantity: </StyledLabel>
      <InputStyled type="number" id={customQuantityId} min={0} placeholder={0} />
      <br />
      <AddBtn onClick={getImportedJump}>{Strings.trigger}</AddBtn>
    </Wrapper>
  );
};

const MainBtn = styled(Btn)`
  ${TextSmCss}
  width: fit-content;
  display: inline-block;

  ${media.greaterThan("medium")`
    width: fit-content;
  `}
`;
const Wrapper = styled.div`
  margin-bottom: calc(0.5rem + 1vw);
`;
const InputStyled = styled.input`
  ${TextMdCss};
  margin-bottom: calc(1rem + 1vw);
  border-radius: 5px;
  border: 1px solid black;
  background: rgba(30, 30, 30, 0.7);
  padding: 8px 16px;
  width: 60%;
  color: white;
  font-family: ${Data.themeing.fontname};
`;
const StyledLabel = styled.label`
  display: inline-block;
  width: 35%;
  ${TextMdCss}
`;
const AddBtn = styled(Btn)`
  text-align: center;
`;

export default CustomItem;
