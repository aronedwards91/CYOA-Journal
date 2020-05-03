import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import { useGlobalDataStore } from "../state/globals";
import { Btn, SmBtn } from "../StyledItems";
import { TextMd, TextSmCss } from "../StyledItems/fontSizing";
import Modal from "../modal";

const Strings = {
  title: "Settings",
  font: "Show Custom Fonts",
  itemName: "Display Item's Name",
  backup: "backup data",
  import: "Import Backup",
  hideImport: "Hide Import",
  runImport: "Import",
  pageRefresh: "Please wait, data reseting, page will reload.",
};
const importBackupID = "importBackupID";

const Settings = observer(() => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);
  const [showImport, setShowImport] = useState(false);
  const switchImportShow = () => setShowImport(!showImport);
  const [showReloadModal, setReloadModal] = useState(false);

  const {
    isShowingCustomFonts,
    showCustomFonts,
    hideCustomFonts,
    displayItemname,
    showItemname,
    hideItemname,
    backupFile,
    importBackup,
  } = useGlobalDataStore();
  const runBkup = () => {
    hideModal();
    backupFile();
  };
  const importBkup = () => {
    hideModal();
    setReloadModal(true);
    importBackup(importBackupID);
  };

  return (
    <>
      <Btn onClick={openModal}>{Strings.title}</Btn>
      {showModal ? (
        <Modal title={Strings.title} onHide={hideModal}>
          <Switch
            watchedVal={isShowingCustomFonts}
            label={Strings.font}
            setOn={showCustomFonts}
            setOff={hideCustomFonts}
          />
          <Switch
            watchedVal={displayItemname}
            label={Strings.itemName}
            setOn={showItemname}
            setOff={hideItemname}
          />
          <StyledBtn onClick={runBkup}>{Strings.backup}</StyledBtn>
          <StyledBtn onClick={switchImportShow}>
            {showImport ? Strings.hideImport : Strings.import}
          </StyledBtn>
          {showImport && (
            <>
              <InputStyled type="file" id={importBackupID} />
              <SmBtn onClick={importBkup}>{Strings.runImport}</SmBtn>
            </>
          )}
        </Modal>
      ) : null}
      {showReloadModal && <Modal title={Strings.pageRefresh} />}
    </>
  );
});

const Switch = ({ watchedVal, setOn, setOff, label }) => {
  const clickToggle = () => {
    watchedVal ? setOff() : setOn();
  };

  return (
    <SwitchWrapper>
      <ToggleBox onClick={clickToggle}>
        <CheckBox clicked={watchedVal}>
          <LineBox>{watchedVal && "|"}</LineBox>
        </CheckBox>
      </ToggleBox>
      <Switchlabel>{label}</Switchlabel>
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: calc(0.5rem + 1vw);
`;
const ToggleBox = styled.div`
  background: white;
  width: 100px;
  height: 40px;
  border-radius: 6px;
  padding: 4px;
  box-shadow: 0px 64px 96px rgba(0, 0, 0, 0.05);
  &:hover {
    cursor: pointer;
  }
`;
const CheckBox = styled.div`
  width: 34%;
  height: 98%;
  margin-left: 0%;
  background: lightgrey;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(125, 212, 81, 0.4);
  transition: all 0.3s cubic-bezier(0.38, 0.24, 0.28, 1.17);

  ${({ clicked }) =>
    clicked &&
    `
    margin-left: 64%;
    background: #7dd451;
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 130%;
  font-weight: bolder;
`;
const Switchlabel = styled(TextMd)`
  align-self: center;
  margin-right: calc(1rem + 1vw);
`;
const LineBox = styled.div`
  margin-top: -14%;
`;
const StyledBtn = styled(Btn)`
  width: fit-content;
`;
const InputStyled = styled.input`
  ${TextSmCss};
  margin-bottom: calc(1rem + 1vw);
`;

export default Settings;
