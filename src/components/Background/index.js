import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../images/bg.jpg";

export const BgImg = () => <Image src={BackgroundImg} />;

const Image = styled.img`
  height: 100%;
  width: 100%;
  position: fixed;
  object-fit: cover;
  z-index: -100;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  z-index: -101;
  height: 100%;
  width: 100%;

  background-image: linear-gradient("red, yellow, red");
`;
