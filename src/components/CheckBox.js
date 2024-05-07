import React from "react";
import styled, { keyframes } from "styled-components";
import { DefaultTypography } from "./Typography";
const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  font-family:${(props) => props.fontFamily};
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.6em 1em;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: ${(props) => props.backgroundColor};
  position: absolute;
  top: 0em;
  left: 0;
  border-style:solid;
  border-width : 1px;
  border-color:${(props) => props.borderColor};
  border-radius: 5px;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }



  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 18%;
    height: 55%;
    border-style: solid;
    border-color:${(props) => props.checkColor};
    border-width: 0 0.15em 0.15em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
  fontFamily,
  borderColor,
  backgroundColor,
  checkColor,
}) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      <DefaultTypography textLevel={"h3-14"}>
          {label}
      </DefaultTypography>
    
      <Input
        
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        
      />
      <Indicator borderColor={borderColor} backgroundColor={backgroundColor} checkColor={checkColor}/>
    </Label>
  );
}
