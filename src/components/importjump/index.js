import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { runJSONFromUpload } from "../../utils";

import { useGlobalDataStore } from "../state/globals";
import { Btn } from "../StyledItems";
import { TextMdCss } from "../StyledItems/fontSizing";
import Modal from "../modal";

const Strings = {
  title: "Import Jump",
  trigger: "Add Jump",
};

const ImportJump = observer(() => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);
  const { addJump } = useGlobalDataStore();

  return (
    <>
      <Btn onClick={openModal}>{Strings.title}</Btn>
      {showModal ? (
        <Modal title={Strings.title} onHide={hideModal}>
          <ImportModal onImport={addJump} />
        </Modal>
      ) : null}
    </>
  );
});

const importID = "importJump";

const ImportModal = ({ onImport }) => {
  const getImportedJump = () => {
    runJSONFromUpload(importID, onImport);
  };

  return (
    <Wrapper>
      <InputStyled type="file" id={importID} />
      <ImportBtn onClick={getImportedJump}>{Strings.trigger}</ImportBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: calc(0.5rem + 1vw);
`;
const InputStyled = styled.input`
  ${TextMdCss};
  margin-bottom: calc(1rem + 1vw);
`;
const ImportBtn = styled(Btn)`
  text-align: center;
`;
export default ImportJump;
