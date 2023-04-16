// src/components/Button/button.styled.ts
import styled from "styled-components";

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
var Button = styled.button.attrs((props) => props)`
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
import { jsx } from "react/jsx-runtime";
var ButtonKit = ({
  size = "md",
  color = "default",
  text = "",
  type = "default",
  customClass = "",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
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
import { jsx as jsx2 } from "react/jsx-runtime";
export {
  ButtonColorDefault,
  ButtonKit,
  ColorVariables,
  ColorsDefault
};
