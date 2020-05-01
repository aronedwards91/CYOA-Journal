import React from "react";
import styled from "styled-components";

import { HeaderLg } from "../StyledItems/fontSizing";

const Modal = ({ children, title, onHide }) => {
  const stopBubbling = (evt) => {
    evt.stopPropagation();
    evt.cancelBubble = true;
  };

  return (
    <BgWrapper onClick={onHide}>
      <ModalBox onClick={stopBubbling}>
        <HeaderText>{title}</HeaderText>
        <Delineator />
        {children}
      </ModalBox>
    </BgWrapper>
  );
};

const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-height: 200px;
  padding: calc(0.5rem + 1.5vw);
  background: rgba(180, 180, 180, 0.3);
  text-align: centre;
`;
const ModalBox = styled.div`
  border: 2px solid grey;
  margin: calc(1rem + 2vw) auto 0;
  background: linear-gradient(
    to bottom,
    rgba(40, 40, 40, 0.95),
    rgba(120, 120, 120, 0.95)
  );
  padding: calc(1rem + 1.5vw);
  max-width: 560px;
  border-radius: 12px;
`;

const HeaderText = styled(HeaderLg)`
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  margin-bottom: calc(1rem + 1.5vw);
`;
const Delineator = styled.div`
  background: grey;
  height: 1px;
  margin: calc(0.5rem + 1vw) 0;
`;

export default Modal;
