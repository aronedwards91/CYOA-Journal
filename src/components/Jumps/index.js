import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { useGlobalDataStore } from "../state/globals";
import Jump from "./jump";

const Jumps = observer(() => {
  const { jumpsArray, isShowingCustomFonts } = useGlobalDataStore();

  return (
    <Wrapper>
      {jumpsArray.map((element) => (
        <Jump key={element.name} jumpData={element} showFont={isShowingCustomFonts}/>
      ))}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  padding: calc(1rem + 1.5vw);
`;

export default Jumps;
