// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  font-family: monospace;\n}\n\n.content {\n  min-height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  flex-direction: column;\n}\n\n.doors-list {\n  margin-top: 10px;\n}\n\n.door {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 32px;\n\n  margin-left: -22px;\n}\n\n.door__input {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  text-align: center;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid black;\n  margin: 5px;\n\n  background: transparent !important;\n}\n\n.door__label {\n  display: inline-flex;\n  justify-content: center;\n\n  margin-right: 4px;\n}\n\n.doors-list__header {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.doors-list__header .boat {\n  width: 50px;\n  height: 50px;\n  display: inline-flex;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}