import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useGlobalDataStore } from "../state/globals";
import { SmBtn, Tooltip, TooltipWrapper } from "../StyledItems";
import { HeaderMd, TextMd, TextSm, TextSmCss } from "../StyledItems/fontSizing";
import styled from "styled-components";

const Strings = {
  title: "Journal",
  add: "Add",
  options: "Options",
  hideOpt: "Hide Options",
  edit: "Edit",
  cancelEdit: "Cancel",
  saveEdit: "Save Edit",
  removeTooltip: "Remove Entry",
};

const Journal = observer(({ ujid, colors }) => {
  const [showOpt, setshowOptions] = useState(false);
  const hideOptionsFunc = () => setshowOptions(false);
  const showOptFunc = () => setshowOptions(true);

  const [collapseJournal, setCollapseJournal] = useState(false);
  const switchCollapse = () => setCollapseJournal(!collapseJournal);

  const {
    jumpsJournal,
    addJournal,
    addJournalEntry,
    updateJournalEntry,
    removeJournalEntry,
  } = useGlobalDataStore();
  const AddNewEntry = () => addJournalEntry(ujid);

  const JumpJournal = jumpsJournal[ujid];
  if (!JumpJournal) {
    addJournal(ujid);
  }

  return (
    <JournalWrapper colors={colors}>
      <Flex>
        <HeaderMd>{Strings.title}</HeaderMd>
        <Grow>-</Grow>
        <BtnPadRight onClick={AddNewEntry} colors={colors}>
          {Strings.add}
        </BtnPadRight>
        {showOpt ? (
          <BtnPadRight onClick={hideOptionsFunc} colors={colors}>
            {Strings.hideOpt}
          </BtnPadRight>
        ) : (
          <BtnPadRight onClick={showOptFunc} colors={colors}>
            {Strings.options}
          </BtnPadRight>
        )}
        {collapseJournal ? (
          <SmBtn onClick={switchCollapse} colors={colors}>
            V
          </SmBtn>
        ) : (
          <SmBtn onClick={switchCollapse} colors={colors}>
            /\
          </SmBtn>
        )}
      </Flex>
      {JumpJournal &&
        !collapseJournal &&
        JumpJournal.map((entries, entryIndx) => (
          <JournalEntry
            entry={entries}
            jumpId={ujid}
            entryIndx={entryIndx}
            update={updateJournalEntry}
            remove={removeJournalEntry}
            showOpt={showOpt}
            colors={colors}
          />
        ))}
    </JournalWrapper>
  );
});

const JournalEntry = ({
  entry,
  jumpId,
  entryIndx,
  update,
  remove,
  showOpt,
  colors,
}) => {
  const [canEdit, setCanEdit] = useState(false);
  const [entryTitle, setTitle] = useState(entry.title);
  const [entryText, setText] = useState(entry.text);

  const showEdit = () => setCanEdit(true);
  const cancelEdit = () => {
    setCanEdit(false);
    setTitle(entry.title);
    setText(entry.text);
  };
  const saveEdit = () => {
    setCanEdit(false);
    update(jumpId, entryIndx, { title: entryTitle, text: entryText });
  };
  const setNewTitle = (evt) => setTitle(evt.target.value);
  const setNewText = (evt) => setText(evt.target.value);
  const removeEntry = () => remove(jumpId, entryIndx);

  return (
    <EntryWrapper colors={colors}>
      <Flex>
        <TextMd>{entryIndx + 1} /</TextMd>
        <EntryTitle>
          {canEdit ? (
            <InputStyling
              type="text"
              value={entryTitle}
              onChange={setNewTitle}
              colors={colors}
            />
          ) : (
            <TextMd>{entry.title}</TextMd>
          )}
        </EntryTitle>
        {showOpt && (
          <>
            {canEdit ? (
              <>
                <BtnPadRight onClick={saveEdit} colors={colors}>
                  {Strings.saveEdit}
                </BtnPadRight>
                <BtnPadRight onClick={cancelEdit} colors={colors}>
                  {Strings.cancelEdit}
                </BtnPadRight>
              </>
            ) : (
              <BtnPadRight onClick={showEdit} colors={colors}>
                {Strings.edit}
              </BtnPadRight>
            )}
            {/* tooltip */}
            <TooltipWrapper>
              <Tooltip>{Strings.removeTooltip}</Tooltip>
              <SmBtn onClick={removeEntry} colors={colors}>
                X
              </SmBtn>
            </TooltipWrapper>
          </>
        )}
      </Flex>
      {canEdit ? (
        <InputStyling
          type="text"
          value={entryText}
          onChange={setNewText}
          colors={colors}
        />
      ) : (
        <TextSm>{entry.text}</TextSm>
      )}
    </EntryWrapper>
  );
};

const JournalWrapper = styled.div`
  margin-top: calc(1rem + 1.5vw);
  border: 1px solid ${({ colors }) => (colors && colors.mainBorder) || "black"};
  padding: calc(1rem + 1.5vw);
`;
const BtnPadRight = styled(SmBtn)`
  margin-right: calc(1rem + 1.5vw);
`;
const Flex = styled.div`
  display: flex;
`;
const Grow = styled.div`
  flex-grow: 1;
  text-align: center;
`;
const EntryWrapper = styled.div`
  margin-top: calc(0.5rem + 0.5vw);
  margin-bottom: calc(0.2rem + 0.2vw);
  border-bottom: 1px solid
    ${({ colors }) => (colors && colors.mainBorder) || "black"};
  padding-bottom: calc(0.2rem + 0.2vw);
`;
const EntryTitle = styled.div`
  margin: 0 calc(1rem + 1.5vw);
  flex-grow: 1;
  text-align: left;
`;
const InputStyling = styled.input`
  background: none;
  border: 1px solid ${({ colors }) => (colors && colors.mainBorder) || "black"};
  padding: 4px;
  color: ${({ colors }) => (colors && colors.mainText) || "white"};
  ${TextSmCss};
`;

export default Journal;
