import React from "react";
import { stopPropagation } from "./stopPropagation";
import { getValue } from "./pickFromSyntheticEvent";
import { preventDefault } from "./preventDefault";
import { InputProps } from "./InputProps";

function Input({ value, onChange }: InputProps) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  );
}
