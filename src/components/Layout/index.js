import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { BgImg } from "../Background";

const Template = styled.div`
  display: flex;
`;

const Layout = () => {
  const [expandedChar, setExpandedChar] = useState(false);
  const switchCharSize = () => setExpandedChar(!expandedChar);

  return (
    <Template>
      Helo
      <BgImg />
    </Template>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
