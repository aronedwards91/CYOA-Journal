import React from "react";
import styled from "styled-components";
import { TextMdCss, HeaderMd, HeaderSm } from "../StyledItems/fontSizing";
import { Helmet } from "react-helmet";

const Jump = ({ jumpData, key }) => {
  console.log("j", jumpData.styling);

  return (
    <Wrapper
      styling={jumpData.styling.themeing}
      col={jumpData.styling.colors}
      key={key}
    >
      <Helmet>
        {jumpData.styling.font.fontIsLink && (
          <link href={jumpData.styling.font.fontData} rel="stylesheet" />
        )}
      </Helmet>
      <FontWrapper font={jumpData.styling.font}>
        <Header jumpData={jumpData} />
      </FontWrapper>
    </Wrapper>
  );
};

const Main = ({ jumpData }) => <div>x</div>;

const Header = ({ jumpData }) => (
  <HeaderWrapper>
    <Image src={jumpData.profImg} alt="profile" />
    <TextWrapper>
      <HeaderMd>{jumpData.cyoa}</HeaderMd>
      <HeaderDiv pad text={`- ${jumpData.subHeader} -`} />
      <HeaderDiv
        pad
        text={`${jumpData.name} - Age: ${jumpData.age} - ${jumpData["body-race"]} - Origin: ${jumpData["char-background"]}`}
      />

      <div>Setting; v</div>
    </TextWrapper>
    <Image src={jumpData.logo} alt="logo" />
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  display: flex;
  padding: 16px;
`;
const Image = styled.img`
  max-width: 200px;
`;
const TextWrapper = styled.div`
  flex-grow: 1;
  text-align: left;
  padding: 24px;
`;
const HeaderPaddable = styled.div`
  ${({ pad }) => pad && `margin: calc(0.5rem + 1vh) 0;`}
`;
const HeaderDiv = ({ text, pad }) => (
  <HeaderPaddable pad={pad}>
    <HeaderSm>{text}</HeaderSm>
  </HeaderPaddable>
);
const Wrapper = styled.div`
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

const FontWrapper = styled.div`
  font-family: '${({ font }) => font.fontName}';
  ${TextMdCss}

  @font-face{
    font-family: '${({ font }) => font.fontName}';
    ${({ font }) => {
      return (
        !font.fontIsLink &&
        `src: url(data:font/ttf;base64,${font.fontData} ) format('truetype');`
      );
    }}
  }

`;
export default Jump;
