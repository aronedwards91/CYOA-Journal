import React from "react";
import styled from "styled-components";

import media from "styled-media-query";
import { HeaderLg } from "../StyledItems/fontSizing";
import Settings from "../settings";
import ImportJump from "../importjump";

const Strings = {
  title: "JUMPCHAIN CYOA",
};

const Header = () => (
  <Wrapper>
    <HeaderText>{Strings.title}</HeaderText>
    <BtnWrapper>
      <ImportJump />
      <Settings />
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

export default Header;
