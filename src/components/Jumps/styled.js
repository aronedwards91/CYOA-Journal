import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { ShowOnlyDesktop } from "../StyledItems";
import { TextMdCss, HeaderSm, TextSmCss } from "../StyledItems/fontSizing";

export const DisplayFlex = styled.div`
  display: flex;
`;
export const FillMiddle = styled.div`
  flex-grow: 1;
  text-align: center;
`;
// ExtraData
export const ExtraWrapper = styled.div`
  padding: 8px 0;
  ${TextSmCss}

  ${media.greaterThan("medium")`
    padding: 8px calc(1rem + 1.5vw);
  `}
`;
export const ColWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;
export const LeftCol = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ colors }) => colors.mainBorder};

  ${media.greaterThan("medium")`
  border: none;
  border-right: 1px solid ${({ colors }) => colors.mainBorder};
  flex-basis: 26%;
  `}
`;
export const RightCol = styled.div`
  padding-left: 0;
  flex-grow: 1;

  ${media.greaterThan("medium")`
   padding-left: calc(1rem + 1vw);
  `}
`;
export const TextUnderline = styled.div`
  ${TextMdCss}
  text-decoration: underline;
  margin-top: 8px;
`;
export const RightColWrap = styled.div`
  width: 100%;
  display: inline-block;

  ${media.greaterThan("medium")`
     width: 65%;
  `}
`;
// Header
export const HeaderWrapper = styled.div`
  display: flex;
  padding: 0;

  ${media.greaterThan("medium")`
    padding: 16px;
  `}
`;
export const Image = styled.img`
  object-fit: cover;
  max-width: 45%;
  max-height: 200px;
  border: 2px solid ${({ colors }) => colors.mainBorder};

  ${media.greaterThan("medium")`  
    max-width: 200px;
    max-height: none;
  `}
`;
export const HideImage = styled(ShowOnlyDesktop)`
  width: fit-content;
`;
export const TextWrapper = styled.div`
  flex-grow: 1;
  text-align: left;
  padding: 8px;

  ${media.greaterThan("medium")`  
    padding: 24px;
  `}
`;
export const HeaderPaddable = styled.div`
  ${({ pad }) => pad && `margin: calc(0.5rem + 1vh) 0;`}
`;
export const HeaderDiv = ({ text, pad }) => (
  <HeaderPaddable pad={pad}>
    <HeaderSm>{text}</HeaderSm>
  </HeaderPaddable>
);
// Main
export const Wrapper = styled.div`
  width: 100%;
  padding: calc(1rem + 1.5vw);
  color: ${({ col }) => col.mainText};
  ${({ styling, col }) =>
    `border: ${styling.bordersWidth} ${styling.borderStyle} ${col.mainBorder};`}
    border-radius:  ${({ styling }) => styling.sectionCornerRadius};
  background: ${({ col }) => ` linear-gradient(
    0.15turn,
    ${col.bgB},
    ${col.bgA},
    ${col.bgB}
  );`}
  margin-bottom: calc(2rem + 3vw);
`;
export const FontWrapper = styled.div`
  ${({ font, showFont }) => showFont && `font-family: ${font.fontName};`}
  ${TextMdCss}

  @font-face{
    font-family: '${({ font }) => font.fontName}';
    ${({ font, showFont }) => {
      return (
        !font.fontIsLink &&
        showFont &&
        `src: url(data:font/ttf;base64,${font.fontData} ) format('truetype');`
      );
    }}
  }

`;

// Settings
export const SettingWrapper = styled.div`
  margin-bottom: 16px;
`;
// Inventory
export const InventoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

// Remove
export const RemoveWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
