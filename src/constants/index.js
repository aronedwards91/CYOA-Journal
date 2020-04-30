import jurafontb64 from "./jura-font.json";

const Data = {
  colors: {
    mainText: "white",
  },
  themeing: {
    fontname: 'Jura',
    font: jurafontb64.base64String,
    fontScaling: 1.0, // adjust font size
    sectionCornerRadius: "10px", //for curved corners, use 5~20px, for straight user 0px
    bordersWidth: "6px",
    borderStyle: "double", // https://www.w3schools.com/CSSref/playit.asp?filename=playcss_border-style&preval=outset
  },
};

export default Data;
