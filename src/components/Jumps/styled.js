import React from "react";
import styled from "styled-components";
import { TextMdCss, HeaderSm } from "../StyledItems/fontSizing";
// Inventory
export const InventoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;
export const InventoryItemBox = styled.div`
  border-left: 1px solid black;
  padding: 4px 16px;
  cursor: help;
`;
export const InvImg = styled.img`
  margin-top: -4px;
  margin-bottom: calc(-4px + -0.5vw);
  height: calc(24px + 1.5vw);
  width: calc(24px + 1.5vw);
`;
// ExtraData
export const ExtraWrapper = styled.div`
  padding: 8px calc(1rem + 1.5vw);
`;
export const LeftCol = styled.div`
  width: 26%;
  border-right: 1px solid ${({ colors }) => colors.mainBorder};
  display: inline-block;
`;
export const RightCol = styled.span`
  padding-left: calc(1rem + 1vw);
  vertical-align: top;
`;
export const TextUnderline = styled.div`
  ${TextMdCss}
  text-decoration: underline;
  margin-top: 8px;
`;
export const RightColWrap = styled.div`
  width: 65%;
  display: inline-block;
`;
// Header
export const HeaderWrapper = styled.div`
  display: flex;
  padding: 16px;
`;
export const Image = styled.img`
  max-width: 200px;
  border: 2px solid ${({ colors }) => colors.mainBorder};
`;
export const TextWrapper = styled.div`
  flex-grow: 1;
  text-align: left;
  padding: 24px;
`;
export const HeaderPaddable = styled.div`
  ${({ pad }) => pad && `margin: calc(0.5rem + 1vh) 0;`}
`;
export const HeaderDiv = ({ text, pad }) => (
  <HeaderPaddable pad={pad}>
    <HeaderSm>{text}</HeaderSm>
  </HeaderPaddable>
);
// Settings
export const SettingsTitle = styled.div`
  display: flex;
`;
export const FillMiddle = styled.div`
  flex-grow: 1;
  text-align: center;
`;
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
