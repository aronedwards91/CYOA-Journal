import React, { useState } from "react";
import { TooltipWrapper, Tooltip, Btn } from "../StyledItems";
import { HeaderMd } from "../StyledItems/fontSizing";
import { Helmet } from "react-helmet";
import { charKeys } from "../../utils";
import {
  InventoryWrapper,
  InventoryItemBox,
  InvImg,
  ExtraWrapper,
  LeftCol,
  RightCol,
  TextUnderline,
  RightColWrap,
  HeaderWrapper,
  Image,
  TextWrapper,
  HeaderDiv,
  SettingsTitle,
  FillMiddle,
  Wrapper,
  FontWrapper,
} from "./styled";

const Jump = ({ jumpData, keyStr, showFont }) => {
  console.log("sf-", showFont);

  return (
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
      </FontWrapper>
    </Wrapper>
  );
};

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
      <ExtraCol title={ability.name} text={ability.power} colors={col} />
    ))}
    {jumpData[charKeys.advDrawback].length > 0 && (
      <TextUnderline>{`Advantages & Drawbacks`}</TextUnderline>
    )}
    {jumpData[charKeys.advDrawback].map((advDraw) => (
      <ExtraCol title={advDraw.name} colors={col}>
        <RightColWrap>
          <div>+ {advDraw.adv}</div>
          <div>- {advDraw.drawback}</div>
        </RightColWrap>
      </ExtraCol>
    ))}
    {jumpData[charKeys.items].length > 0 && (
      <Inventory itemArr={jumpData[charKeys.items]} />
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
      <SettingsTitle>
        <TextUnderline>Settings</TextUnderline>
        <FillMiddle>-</FillMiddle>
        <Btn onClick={switchShow}>{showSetting ? "/\\" : "V"}</Btn>
      </SettingsTitle>
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

const Inventory = ({ itemArr }) => (
  // TODO add move to warehouse option
  <>
    <TextUnderline>Inventory</TextUnderline>
    <InventoryWrapper>
      {itemArr.map((item) => (
        <InventoryItem
          name={item.name}
          desc={item.desc}
          quantity={item.quantity}
          icon={item.icon}
        />
      ))}
    </InventoryWrapper>
  </>
);
const InventoryItem = ({ name, desc, quantity, icon }) => (
  <TooltipWrapper>
    <Tooltip>{desc}</Tooltip>
    <InventoryItemBox>
      {icon ? <InvImg src={icon} alt={name} /> : name}
      {quantity > 1 && "  |  x" + quantity}
    </InventoryItemBox>
  </TooltipWrapper>
);

export default Jump;
