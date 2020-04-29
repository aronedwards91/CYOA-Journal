import styled from "styled-components";
import Settings from "../../cyoadata";

const FontScale = Settings.styling.themeing.fontScaling;

export const HeaderLg = styled.span`
  font-size: calc(${FontScale} * 2rem + 2vw);
`;

export const HeaderMd = styled.span`
  font-size: calc(${FontScale} * 1.4rem + 1vw);
`;

export const HeaderSm = styled.span`
  font-size: calc(${FontScale} * 1rem + 0.8vw);
`;

export const TextMdCss = `font-size: calc(${FontScale} * 1rem + 0.6vw);`;
export const TextMd = styled.span`
  ${TextMdCss}
  white-space: pre-wrap;
  ${({bold}) => bold && 'font-weight: bold;'}
`;
export const TextSmCss = `font-size: calc(${FontScale} * 0.9rem + 0.4vw);`;
export const TextSm = styled.span`
  ${TextSmCss}
  white-space: pre-wrap;
`;
