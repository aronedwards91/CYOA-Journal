import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { storeData, getStorage } from "../../utils";

const init = getStorage() || {};

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

    displayItemname: init.hasOwnProperty("displayItemname")
      ? init.displayItemname
      : true,
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
      if (CheckJumpImport(newJumpObj, this.jumpsArray)) {
        console.log("file ok");
        this.jumpsArray.push(newJumpObj);
      }
      updateLocalStorage(this);
    },
    removeJump(jumpArrId) {
      const ujid = this.jumpsArray[jumpArrId].ujid;
      this.jumpsArray.splice(jumpArrId, 1);
      delete this.jumpsJournal[ujid];
      updateLocalStorage(this);
    },

    jumpsJournal: init.jumpsJournal || {},
    addJournal(jumpId) {
      this.jumpsJournal[jumpId] = [];
    },
    addJournalEntry(jumpId, entryObj) {
      if (!entryObj) {
        this.jumpsJournal[jumpId].push({
          title: "New",
          text: "Journal Entry",
        });
        updateLocalStorage(this);
      } else if (entryObj.title && entryObj.text) {
        this.jumpsJournal[jumpId].push(entryObj);
        updateLocalStorage(this);
      } else {
        console.error("Journal entry format error");
      }
    },
    updateJournalEntry(jumpId, entryArrIndx, newEntryObj) {
      if (newEntryObj.title && newEntryObj.text) {
        this.jumpsJournal[jumpId][entryArrIndx] = newEntryObj;
        updateLocalStorage(this);
      } else {
        console.error("Journal entry format error");
      }
    },
    removeJournalEntry(jumpId, entryArrIndx) {
      this.jumpsJournal[jumpId].splice(entryArrIndx, 1);
      updateLocalStorage(this);
    },

    warehouse: init.warehouse || [
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
    addToWarehouse(item) {
      this.warehouse.push(item);
      updateLocalStorage(this);
    },
    removeFromWarehouse(arrId) {
      this.warehouse.splice(arrId, 1);
      updateLocalStorage(this);
    },
  };
}

const updateLocalStorage = (context) => {
  const Obj = {
    isShowingCustomFonts: context.isShowingCustomFonts,
    displayItemname: context.displayItemname,
    jumpsArray: context.jumpsArray,
    warehouse: context.warehouse,
    jumpsJournal: context.jumpsJournal,
  };
  storeData(Obj);
};

const CheckJumpImport = (file, jumpsArray) => {
  // ujid is Unique Jump Id, links jump to journals object
  if (file.name && file["body-race"]) {
    const ujid = file.name + "--" + file.cyoa;
    file.ujid = ujid.replace(/[^0-9a-zA-Z_']/g, "");

    const existsCheck = jumpsArray.findIndex((i) => i.ujid === file.ujid);
    console.log("exc", existsCheck);
    if (existsCheck === -1) {
      return true;
    } else {
      window.alert("Jump already exists");
    }
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
