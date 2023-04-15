// src/components/Wrapper/wraper.styled.ts
import styled from "styled-components";
var Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
var Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// src/components/Wrapper/wraper.tsx
import { jsx } from "react/jsx-runtime";
var WrapperContainer = () => {
  return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(Title, { children: "Hello World!" }) });
};

// src/components/Avatar/Avatar.tsx
import { jsx as jsx2 } from "react/jsx-runtime";

// src/components/Button/button.styled.ts
import styled2 from "styled-components";

// src/shared/assets/colors.ts
var ColorsDefault = {
  default: "#889096",
  primary: "#0072F5",
  secondary: "#7828c8",
  success: "#17c964",
  warning: "#f5a524",
  error: "#f31260"
};

// src/components/Button/button.type.ts
var ButtonColorDefault = {
  ...ColorsDefault,
  cyan: "##06B7DB"
};

// src/components/Button/button.styled.ts
var Button = styled2.button.attrs((props) => props)`
    background-color: ${(props) => props.color ? ButtonColorDefault[props.color] : ButtonColorDefault["default"]};
    border: none;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    color: lightcoral;
    box-shadow: 0 0.2rem #dfd9d9;
    cursor: pointer;
    color: #FFF;
    &:active{
        color: white;
        box-shadow: 0 0.1rem #dfd9d9;
        transform: translateY(0.2rem);
    }
    &:hover:not(:disabled) {
        background: lightcoral;
        color: white;
        text-shadow: 0 0.1rem #bcb4b4;
    }
    &:disabled {
        cursor: auto;
        color: grey;
    }
`;

// src/components/Button/Button.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var ButtonKit = ({
  size = "md",
  color = "default",
  text = "",
  type = "default",
  ...props
}) => {
  return /* @__PURE__ */ jsx3(Button, { style: {
    width: props.width || "auto",
    height: props.height || "auto"
  }, ...props, className: `${size}`, children: text });
};
export {
  ButtonKit,
  WrapperContainer
};
