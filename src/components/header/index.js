import React from "react";
import styled from "styled-components";

import media from "styled-media-query";
import { HeaderLg, TextMdCss } from "../StyledItems/fontSizing";

const Strings = {
  title: "JUMPCHAIN CYOA",
  import: "Import jump",
  export: "Export jump",
  settings: "Settings",
};

const Header = () => (
  <Wrapper>
    <HeaderText>{Strings.title}</HeaderText>
    <BtnWrapper>
      <Btn>{Strings.import}</Btn>
      <Btn>{Strings.export}</Btn>
      <Btn>{Strings.settings}</Btn>
    </BtnWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding: calc(0.5rem + 1.5vw);
  border-bottom: 3px solid grey;
  background: rgba(124, 124, 124, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;
const HeaderText = styled(HeaderLg)`
  align-self: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Btn = styled.div`
  cursor: pointer;
  background: rgba(54, 54, 52, 0.6);
  border: 2px solid black;
  border-radius: 5px;
  padding: calc(4px + 0.5vw);
  ${TextMdCss};
  margin-bottom: 8px;
  width: 60%;

  ${media.greaterThan("medium")`
    margin-bottom: 16px;
    width: auto;
  `}
`;

export default Header;
