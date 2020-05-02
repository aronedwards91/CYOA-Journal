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
    displayItemname: true,
    showItemname() {
      this.displayItemname = true;
      updateLocalStorage(this);
    },
    hideItemname() {
      this.displayItemname = false;
      updateLocalStorage(this);
    },
    jumpsArray: init.jumpsArray || [],
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
    warehouse: [
      {
        name: "40,000sq",
        desc: "A ton of space.",
        quantity: 1,
        icon: false,
      },
      {
        name: "Cosmis Warehouse Key/tattoo",
        desc:
          "Rubbing the mark opens a portal, closing portal stops time in warehouse .",
        quantity: 1,
        icon: false,
      },
      {
        name: "Statis Pods",
        desc: "Can hold a humanoid, freezes them and stops aging.",
        quantity: 10,
        icon: false,
      },
    ],
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
