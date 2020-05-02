import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react-lite";
import { useGlobalDataStore } from "../state/globals";

import { Btn, InventoryItem } from "../StyledItems";
import { HeaderMd } from "../StyledItems/fontSizing";
import { charKeys } from "../../utils";
import {
  InventoryWrapper,
  ExtraWrapper,
  LeftCol,
  RightCol,
  TextUnderline,
  RightColWrap,
  HeaderWrapper,
  Image,
  TextWrapper,
  HeaderDiv,
  DisplayFlex,
  FillMiddle,
  Wrapper,
  FontWrapper,
} from "./styled";
import RemoveJump from "./removeJump";

const Jump = ({ jumpData, keyStr, showFont, index }) => (
  <Wrapper
    styling={jumpData.styling.themeing}
    col={jumpData.styling.colors}
    key={keyStr}
  >
    <Helmet>
      {jumpData.styling.font.fontIsLink && showFont && (
        <link href={jumpData.styling.font.fontData} rel="stylesheet" />
      )}
    </Helmet>
    <FontWrapper font={jumpData.styling.font} showFont={showFont}>
      <Header jumpData={jumpData} />
      <Extra jumpData={jumpData} col={jumpData.styling.colors} />
      <RemoveJump jumpIndex={index} />
    </FontWrapper>
  </Wrapper>
);

const Header = ({ jumpData }) => (
  <HeaderWrapper>
    <Image
      src={jumpData.profImg}
      alt="profile"
      colors={jumpData.styling.colors}
    />
    <TextWrapper>
      <HeaderMd>{jumpData.cyoa}</HeaderMd>
      <HeaderDiv pad text={`- ${jumpData.subHeader} -`} />
      <HeaderDiv
        pad
        text={`${jumpData.name} - Age: ${jumpData.age} - ${jumpData["body-race"]} - Origin: ${jumpData["char-background"]}`}
      />
    </TextWrapper>
    <Image src={jumpData.logo} alt="logo" colors={jumpData.styling.colors} />
  </HeaderWrapper>
);

const Extra = ({ jumpData, col }) => (
  <ExtraWrapper>
    <Setting setting={jumpData.setting} />
    <ExtraCol
      title={jumpData[charKeys.challenge].name}
      text={jumpData[charKeys.challenge].desc}
      colors={jumpData.styling.colors}
    />
    {jumpData[charKeys.allies].length > 0 && (
      <TextUnderline>Allies</TextUnderline>
    )}
    {jumpData[charKeys.allies].map((ally) => (
      <ExtraCol
        title={ally.name}
        text={ally.desc}
        colors={col}
        key={"ally-" + ally.name}
      />
    ))}
    {jumpData[charKeys.abilities].length > 0 && (
      <TextUnderline>Abilities</TextUnderline>
    )}
    {jumpData[charKeys.abilities].map((ability) => (
      <ExtraCol
        title={ability.name}
        text={ability.power}
        colors={col}
        key={"ability-" + ability.name}
      />
    ))}
    {jumpData[charKeys.advDrawback].length > 0 && (
      <TextUnderline>{`Advantages & Drawbacks`}</TextUnderline>
    )}
    {jumpData[charKeys.advDrawback].map((advDraw) => (
      <ExtraCol
        title={advDraw.name}
        colors={col}
        key={"advDraw-" + advDraw.name}
      >
        <RightColWrap>
          <div>+ {advDraw.adv}</div>
          <div>- {advDraw.drawback}</div>
        </RightColWrap>
      </ExtraCol>
    ))}
    {jumpData[charKeys.items].length > 0 && (
      <Inventory itemArr={jumpData[charKeys.items]} colors={col} />
    )}
  </ExtraWrapper>
);
const Setting = ({ setting }) => {
  const [showSetting, setShow] = useState(false);
  const switchShow = () => {
    setShow(!showSetting);
  };

  return (
    <>
      <DisplayFlex>
        <TextUnderline>CYOA Setting</TextUnderline>
        <FillMiddle>-</FillMiddle>
        <Btn onClick={switchShow}>{showSetting ? "/\\" : "V"}</Btn>
      </DisplayFlex>
      {showSetting && <div>{setting}</div>}
    </>
  );
};
const ExtraCol = ({ children, title, text, colors }) => (
  <>
    <LeftCol colors={colors}>{title}</LeftCol>
    <RightCol>
      {text} {children}
    </RightCol>
    <br />
  </>
);

const Inventory = observer(({ itemArr, colors }) => {
  const { displayItemname, addToWarehouse } = useGlobalDataStore();
  const [showAdd, setShowAdd] = useState(false);
  const switchShowAdd = () => setShowAdd(!showAdd);

  return (
    <>
      <DisplayFlex>
        <TextUnderline>Inventory</TextUnderline>
        <FillMiddle>-</FillMiddle>
        <Btn onClick={switchShowAdd} colors={colors}>
          {showAdd ? "hide Add" : "Add to Warehouse"}
        </Btn>
      </DisplayFlex>

      <InventoryWrapper>
        {itemArr.map((item) => {
          const addClick = () => addToWarehouse(item);

          return (
            <InventoryItem
              key={"item" + item.name}
              name={item.name}
              desc={item.desc}
              quantity={item.quantity}
              icon={item.icon}
              forceName={displayItemname}
              btnText={showAdd ? "+" : false}
              btnOnclick={addClick}
              colors={colors}
            />
          );
        })}
      </InventoryWrapper>
    </>
  );
});

export default Jump;
