import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useGlobalDataStore } from "../state/globals";
import { SmBtn, Btn } from "../StyledItems";
import { HeaderMd } from "../StyledItems/fontSizing";
import Modal from "../modal";
import { RemoveWrapper } from "./styled";

const Strings = {
  title: "Are you suyre you want to remove Jump?",
  accept: "Yes",
  remove: "Remove Jump",
};

const RemoveJump = observer(({ jumpIndex }) => {
  const { removeJump } = useGlobalDataStore();
  const RemoveJump = () => removeJump(jumpIndex);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  return (
    <RemoveWrapper>
      {showModal ? (
        <Modal onHide={hideModal}>
          <div>
            <HeaderMd>{Strings.title}</HeaderMd>
            <Btn onClick={RemoveJump}>{Strings.accept}</Btn>
          </div>
        </Modal>
      ) : null}
      <SmBtn onClick={openModal}>{Strings.remove}</SmBtn>
    </RemoveWrapper>
  );
});

export default RemoveJump;
