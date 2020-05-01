import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { useGlobalDataStore } from "../state/globals";

const Jumps = observer(() => {
  const { jumpsArray } = useGlobalDataStore();

  return (
    <Wrapper>
      {jumpsArray.map((element) => {
          return (
          <p>{JSON.stringify(element)}</p>
      )})}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  padding: calc(1rem + 1.5vw);
`;

export default Jumps;
