export const runJSONFromUpload = (importElementID, onFileLoad) => {
  var files = document.getElementById(importElementID).files;
  if (files.length <= 0) {
    return false;
  }
  console.warn("imported file:", files);

  var fr = new FileReader();

  fr.onload = function (e) {
    var result = JSON.parse(e.target.result);
    onFileLoad(result);
  };

  fr.readAsText(files.item(0));
};

// LocalStorage
const localStorageKey = "cyoajournal";

export const getStorage = () => {
  const storageItem = localStorage.getItem(localStorageKey);
  try {
    return JSON.parse(storageItem);
  } catch (e) {
    return false;
  }
};

export const storeData = (dataObj) => {
  localStorage.setItem(localStorageKey, JSON.stringify(dataObj));
};
