import { BaseColorType, BaseSizeType } from "../../types";

export type CheckboxSize = BaseSizeType;
export type CheckboxColor = BaseColorType;

export type CheckboxType = {
  label?: string;
  size: CheckboxSize;
  color: CheckboxColor;
};