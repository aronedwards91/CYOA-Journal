import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { storeData, getStorage } from "../../utils";

const init = getStorage();

export function createGlobalStore() {
  return {
    isShowingCustomFonts: init.hasOwnProperty("isShowingCustomFonts")
      ? init.isShowingCustomFonts
      : true,
    showCustomFonts() {
      this.isShowingCustomFonts = true;
      updateLocalStorage(this);
    },
    hideCustomFonts() {
      this.isShowingCustomFonts = false;
      updateLocalStorage(this);
    },
    jumpsArray: init.jumpsArray || [{ test: "val" }],
    addJump(newJumpObj) {
      if (CheckJumpImport(newJumpObj)) {
        console.log("file ok");
        this.jumpsArray.push(newJumpObj);
      }
      updateLocalStorage(this);
    },
    removeJump(jumpId) {
      // todo
      updateLocalStorage(this);
    },
    jumpsJournal: [],
    addJumpJournal(jumpId) {
      this.jumpsJournal.push({
        jumpId,
        entries: [],
      });
      updateLocalStorage(this);
    },
  };
}

const updateLocalStorage = (context) => {
  const Obj = {
    isShowingCustomFonts: context.isShowingCustomFonts,
    jumpsArray: context.jumpsArray,
  };
  storeData(Obj);
};

const CheckJumpImport = (file) => {
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
