import React from "../_snowpack/pkg/react.js";
import boat from "./boat.png.proxy.js";
export default function Boat({colors = true}) {
  const style = {
    filter: colors ? "" : "grayscale(100%)",
    backgroundImage: `url(${boat})`,
    backgroundSize: "contain"
  };
  return /* @__PURE__ */ React.createElement("div", {
    style,
    className: "boat"
  });
}
