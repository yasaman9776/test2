import React from "react";
import styled, { keyframes } from "styled-components";
import { CokatexColors } from "../helper/colors";
const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  font-size: ${props => {
    if (props.size === "xs") return "6px";
    if (props.size === "sm") return "8px";
    if (props.size === "lg") return "12px";

    return "10px";
  }};
  width: 8em;
  height: 4.4em;
  top:10px;
  margin:auto;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:${CokatexColors.lightGray} ;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.4em;

  &::before {
    position: absolute;
    content: "";
    height: 3.6em;
    width: 3.6em;
    left: 0.4em;
    bottom: 0.4em;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${Input}:checked + & {
    background-color: ${CokatexColors.navyBlue};
  }

  ${Input}:checked + &::before {
    -webkit-transform: translateX(3.5em);
    -ms-transform: translateX(3.5em);
    transform: translateX(3.5em);
  }

  ${Input}:focus + & {
    box-shadow: 0 0 0.1em #2196f3;
  }

  ${Input}:disabled + & {
    pointer-events: none;
    background: #e6e6e6;
  }
`;
const Span = styled.span`
color:#fff;
font-family:"IRANYekan";
`
const Title = styled.text`
color : #000;
font-family:"IRANYekan";
text-align:right;
`

const ToggleBox = styled.div `
display:flex;
flex-direction:column;
`
export default function ToggleSwitch({
  value,
  checked,
  onChange,
  name,
  id,
  disabled,
  title,
  size,
  label
}) {
  return (
  <ToggleBox>
<Title>

  {label}
</Title>
<Label htmlFor={id} disabled={disabled} title={title} size={size}>
   
   <Input
     id={id}
     type="checkbox"
     name={name}
     value={value}
     disabled={disabled}
     checked={checked}
     onChange={onChange}
   />
   <Slider />
 </Label>
  </ToggleBox>
  );
}
