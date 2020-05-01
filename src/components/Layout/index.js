import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { BgImg } from "../Background";
import Header from "../header";
import Warehouse from "../warehouse";
import Jumps from "../Jumps";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  // const [expandWarehouse, setExpandWarehouse] = useState(false);
  // const switchCharSize = () => setExpandedChar(!expandedChar);

  return (
    <LayoutWrapper>
      <BgImg />
      <Header />
      <Warehouse />
      <Jumps />
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
