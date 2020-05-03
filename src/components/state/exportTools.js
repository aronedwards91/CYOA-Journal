export function createFile(data, filename, type) {
  var file = new Blob([data], { type: type });
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  else {
    // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

export const createFileFromObj = (dataObj) => {
  createFile(
    JSON.stringify(dataObj),
    `cyoa-journal-bkup-${getDateString()}.json`,
    "application/json"
  );
};

const getDateString = () => {
  const today = new Date();
  const locale = today.toLocaleDateString("en-UK");
  return locale.replace(/\//g, "-");
};
