import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./GlobalStyles";
import "mobx-react-lite/batchingForReactDom";

import Layout from "./components/Layout";
import { GlobalStoreProvider } from "./components/state/globals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalStoreProvider>
      <Layout />
    </GlobalStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
