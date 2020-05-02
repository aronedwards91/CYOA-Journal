import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { TextSmCss, TextMdCss } from "./fontSizing";

export const RedX = () => <span style={{ color: "red" }}>X</span>;

export const Btn = styled.div`
  cursor: pointer;
  background: rgba(54, 54, 52, 0.6);
  border: 2px solid ${({ colors }) => (colors && colors.mainBorder) || "black"};
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
export const SmBtn = styled.div`
  cursor: pointer;
  border: 1px solid
    ${({ colors }) => (colors && colors.mainBorder) || "black"};
  border-radius: 5px;
  padding: calc(2px + 0.3vw) calc(8px + 1vw);
  ${TextSmCss};
  margin-bottom: 4px;
  width: fit-content;
`;

export const Article3Col = styled.article`
  -webkit-columns: 3 180px;
  -moz-columns: 3 180px;
  columns: 3 180px;
  margin: 0 auto;
  max-width: 1000px;
  column-gap: 64px;
  column-rule: 1px solid grey;
`;

export const Article2ColDesktop = styled.article`
  ${media.greaterThan("medium")`
    -webkit-columns: 2 220px;
    -moz-columns: 2 220px;
    columns: 2 220px;
    margin: 0 auto;
    column-gap: 48px;
    column-rule: 1px dotted grey;
  `}
`;

export const Tooltip = styled.div`
  ${TextSmCss}
  display: none;
  position: absolute;
  bottom: 120%;
  left: 0;
  padding: 8px;
  min-width: 140px;
  background: darkgrey;
  z-index: 100;
  border: 1px solid grey;
  border-radius: 4px;
`;
export const TooltipWrapper = styled.div`
  position: relative;

  &:hover > ${Tooltip} {
    display: inline-block;
  }
`;

// Mobile Wrappers

const DesktopSize = 768;
export class ShowOn extends React.Component {
  // passed props ; desktop[boolean]
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", () => this.checkSize());
    this.checkSize();
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", () => this.checkSize());
  };

  checkSize = () => {
    const shouldShowOnDesktop = window.matchMedia(
      `(min-width: ${DesktopSize}px)`
    ).matches;

    if (this.props.desktop && this.state.show !== shouldShowOnDesktop) {
      this.setState({
        show: window.matchMedia(`(min-width: ${DesktopSize}px)`).matches,
      });
    }
    if (!this.props.desktop && this.state.show === shouldShowOnDesktop) {
      this.setState({
        show: window.matchMedia(`(max-width: ${DesktopSize - 1}px)`).matches,
      });
    }
  };

  render() {
    return this.state.show ? <>{this.props.children}</> : null;
  }
}

export const ShowOnlyMobile = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;
export const ShowOnlyDesktop = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  ${media.greaterThan("medium")`
    display: block;
  `}
`;

export const ShowOnMobSpan = styled.span`
  display: inline;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;
export const ShowOnDeskSpan = styled.span`
  display: none;

  ${media.greaterThan("medium")`
    display: inline;
  `}
`;

// Inventory

export const InventoryItem = ({
  name,
  desc,
  quantity,
  icon,
  forceName,
  btnText,
  btnOnclick,
  colors,
}) => (
  <>
    <TooltipWrapper>
      <Tooltip>{desc}</Tooltip>
      <InventoryItemBox colors={colors}>
        {icon ? <InvImg src={icon} alt={name} /> : name}
        {forceName && icon && name}
        {quantity > 1 && "  |  x" + quantity}
      </InventoryItemBox>
    </TooltipWrapper>
    {btnText && (
      <InvBtn onClick={btnOnclick} colors={colors}>
        {btnText}
      </InvBtn>
    )}
  </>
);

const InventoryItemBox = styled.div`
  border-left: 1px solid
    ${({ colors }) => (colors && colors.mainBorder) || "black"};
  padding: 4px 16px;
  cursor: help;
`;
const InvImg = styled.img`
  margin-top: -4px;
  margin-bottom: calc(-4px + -0.5vw);
  height: calc(24px + 1.5vw);
  width: calc(24px + 1.5vw);
`;
const InvBtn = styled.a`
  border: 1px solid ${({ colors }) => (colors && colors.mainBorder) || "black"};
  border-radius: 5px;
  padding: 4px 8px;
  margin: 4px 12px 2px 0;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    background: ${({ colors }) => (colors && colors.bgB) || "darkgrey"};
    display: block;
    position: absolute;
    padding-top: 200%;
    padding-left: 250%;
    margin-left: -20px !important;
    margin-top: -150%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;
