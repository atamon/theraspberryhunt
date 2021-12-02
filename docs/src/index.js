import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import {render} from "../_snowpack/pkg/react-dom.js";
import {AvatarDefault} from "./Avatar.js";
import Boat from "./Boat.js";
import data from "./data.js";
import Door from "./Door.js";
import "./style.css.proxy.js";
function IntroText({dayOfMonth}) {
  const daysUntilXMas = 24 - dayOfMonth;
  return /* @__PURE__ */ React.createElement("h3", null, "Det är ", /* @__PURE__ */ React.createElement("span", {
    className: "days-until-xmas"
  }, daysUntilXMas), " dagar kvar till jul...");
}
function App() {
  const dayOfMonth = new Date().getDate();
  const [correctDates, setCorrectDates] = useState({});
  const nCorrectDates = Object.values(correctDates).reduce((memo, isCorrect) => memo + isCorrect, 0);
  const doors = data.map((item, index) => {
    const reportIsCorrect = (isCorrect) => {
      setCorrectDates(Object.assign({}, correctDates, {
        [item.label]: isCorrect
      }));
    };
    return /* @__PURE__ */ React.createElement(Door, {
      disabled: dayOfMonth < Number.parseInt(item.label),
      key: index,
      item,
      reportIsCorrect
    });
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement(IntroText, {
    dayOfMonth
  }), /* @__PURE__ */ React.createElement(AvatarDefault, null), /* @__PURE__ */ React.createElement("div", {
    className: "doors-list"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "doors-list__header"
  }, /* @__PURE__ */ React.createElement(Boat, null), /* @__PURE__ */ React.createElement(Boat, {
    colors: false
  })), doors));
}
function init() {
  render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("app"));
}
init();
