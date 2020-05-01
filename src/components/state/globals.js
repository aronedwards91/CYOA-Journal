import React from "react";
import { useLocalStore } from "mobx-react-lite";

export function createGlobalStore() {
  return {
    isShowingCustomFonts: true,
    showCustomFonts() {
      this.isShowingCustomFonts = true;
    },
    hideCustomFonts() {
      this.isShowingCustomFonts = false;
    },
    jumpsArray: [{ test: "val" }],
    addJump(newJumpObj) {
      console.log("jumpIn:", newJumpObj);
      if (CheckJumpImport(newJumpObj)) {
        console.log("file ok");
        this.jumpsArray.push(newJumpObj);
      }
    },
    removeJump(jumpId) {
      // todo
    },
    jumpsJournal: [],
    addJumpJournal(jumpId) {
      this.jumpsJournal.push({
        jumpId,
        entries: [],
      });
    },
  };
}

const CheckJumpImport = (file) => {
  console.log("check", file);
  if (file.name && file["body-race"]) {
    return true;
  } else {
    window.alert(
      "Imported .json file is incorrect, should be imported from CYOA - Viewer built jump"
    );
  }
};

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
