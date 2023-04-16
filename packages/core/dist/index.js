"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var core_exports = {};
__export(core_exports, {
  ButtonColorDefault: () => ButtonColorDefault,
  ButtonKit: () => ButtonKit,
  ColorVariables: () => ColorVariables,
  ColorsDefault: () => ColorsDefault
});
module.exports = __toCommonJS(core_exports);

// src/components/Button/button.styled.ts
var import_styled_components = __toESM(require("styled-components"));

// src/shared/assets/colors.ts
var ColorsDefault = {
  default: "#889096",
  primary: "#0072F5",
  secondary: "#7828c8",
  success: "#17c964",
  warning: "#f5a524",
  error: "#f31260"
};
var ColorVariables = {
  boxShadow: "#dfd9d9",
  textShadow: "#bcb4b4"
};

// src/components/Button/button.type.ts
var ButtonColorDefault = {
  ...ColorsDefault,
  cyan: "#06B7DB"
};

// src/components/Button/button.styled.ts
var Button = import_styled_components.default.button.attrs((props) => props)`
    background-color: ${(props) => props.color ? ButtonColorDefault[props.color] : ButtonColorDefault["default"]};
    min-width: 125px;
    border: none;
    padding: .75rem;
    font-size: 1rem;
    border-radius: .75rem;
    box-shadow: 0 0.2rem ${ColorVariables.boxShadow};
    cursor: pointer;
    color: #FFF;
    &:active{
        box-shadow: 0 0.1rem ${ColorVariables.boxShadow};
        transform: translateY(0.2rem);
    }

    &:disabled {
        cursor: auto;
        color: grey;
    }
`;

// src/components/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ButtonKit = ({
  size = "md",
  color = "default",
  text = "",
  type = "default",
  customClass = "",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Button,
    {
      style: {
        width: props.width || "auto",
        height: props.height || "auto"
      },
      ...props,
      color,
      className: `${size} ${customClass}`,
      children: text
    }
  );
};

// src/components/Avatar/Avatar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonColorDefault,
  ButtonKit,
  ColorVariables,
  ColorsDefault
});
