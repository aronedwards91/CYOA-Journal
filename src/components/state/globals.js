import React from "react";
import { useLocalStore } from "mobx-react-lite";

export function createGlobalStore() {
  return {
    isShowingChoiceEffects: true,
    showChoiceEffects() {
      this.isShowingChoiceEffects = true;
    },
    hideChoiceEffects() {
      this.isShowingChoiceEffects  = false;
    },
  };
}

const GlobalStoreContext = React.createContext();

export const GlobalStoreProvider = ({ children }) => {
  const store = useLocalStore(createGlobalStore);
  return (
    <GlobalStoreContext.Provider value={store}>
      {children}.{" "}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalDataStore = () => {
  const store = React.useContext(GlobalStoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
