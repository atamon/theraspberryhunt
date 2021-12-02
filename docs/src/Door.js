import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
function Input({disabled = false, expectedValue = 0, setIsCorrect}) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    const value2 = e.target.value;
    setValue(value2);
    setIsCorrect(Number.parseInt(value2) === expectedValue);
  };
  const style = {
    opacity: disabled ? 0.3 : 1
  };
  const isCorrect = Number.parseInt(value) === expectedValue;
  if (!isCorrect && value !== "")
    style.borderColor = "red";
  if (isCorrect)
    style.borderColor = "green";
  return /* @__PURE__ */ React.createElement("input", {
    style,
    disabled,
    className: "door__input",
    type: "text",
    onChange: (e) => onChange(e),
    value
  });
}
export default function Door({disabled, item, reportIsCorrect}) {
  const [isRedCorrect, setIsRedCorrect] = useState(false);
  const [isBlackCorrect, setIsBlackCorrect] = useState(false);
  const isCorrect = isRedCorrect && isBlackCorrect;
  useEffect(() => {
    reportIsCorrect(isCorrect);
  }, [isCorrect]);
  const style = {
    color: void 0
  };
  if (isCorrect)
    style.color = "green";
  return /* @__PURE__ */ React.createElement("div", {
    className: "door"
  }, /* @__PURE__ */ React.createElement("span", {
    style,
    className: "door__label"
  }, item.label), /* @__PURE__ */ React.createElement(Input, {
    disabled,
    setIsCorrect: setIsRedCorrect,
    expectedValue: item.expectedValues.nRed
  }), /* @__PURE__ */ React.createElement(Input, {
    disabled,
    setIsCorrect: setIsBlackCorrect,
    expectedValue: item.expectedValues.nBlack
  }));
}
