import React from "react";
import styled, { keyframes } from "styled-components";
import { CokatexColors } from "../helper/colors";
const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const popIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5) ;
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) ;
}
`;

const Label = styled.label`
  position: relative;
  display: flex;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.6em 1em;
  font-size: 15px;
  font-family:"IRANYekan";
`;

const Indicator = styled.div`
  border: 1px solid;
  border-color:#D9D1E0;
  border-radius: 1em;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 3px;
  left: -1.8em;

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
  
    border-radius: 1em;
    background-color: ${CokatexColors.navyBlue};
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${Input}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;

export default function RadioButton({
  value,
  onChange,
  name,
  id,
  label,
  disabled,
  checked
}) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input
        id={id}
        type="radio"
        role="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <Indicator />
    </Label>
  );
}
