import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { BgImg } from "../Background";
import Header from "../header";
import Warehouse from "../warehouse";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  // const [expandWarehouse, setExpandWarehouse] = useState(false);
  // const switchCharSize = () => setExpandedChar(!expandedChar);

  return (
    <LayoutWrapper>
      <Header />
      <Warehouse />
      <BgImg />
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
