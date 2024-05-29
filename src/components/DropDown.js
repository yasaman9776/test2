import styled from "styled-components";
import { BorderRadius } from "../helper/radius";
import {CokatexColors} from '../helper/colors';
export const DefaultSelect = styled.select`
        background-color:#fff;
        border-color:${(props)=> props.borderColor};
        border-style:solid;
        border-width:1px;
        border-radius:${BorderRadius.xs};
        font-family:"IRANYekanBold";
        direction:${(props)=> props.dir};
        width:${(props) =>props.width};
        width: 300px;
        height:${(props) =>props.height};
        height: 40px;
        font-size:16px;
        
        padding:${(props) => props.customPadding};
        
     
        * & :hover{
        background-color: ${(props) => props.backgroundHoverColor};
        },
     
`

export const DefaultOption = styled.option`
        background-color:#fff;
        font-family:${(props) => props.fontFamily};
        & :hover{
            background-color:#ffb921;
        }
`

export const CheckBoxOption = styled(DefaultOption) `
            display:flex;
            padding:0px;
            margin-left:5px;

`
export const SelectDiv = styled.div`
direction:${(props) =>props.dir};
background-color:#fff;
display:flex;
flex-direction:row-reverse;
justify-content:space-between;
align-items:center;
border-style:solid;
border-width:1px;
// overflow-x: auto;
width:${(props) =>props.width};
width: 300px;
border-color:${(props) => props.borderColor};
background-color:${(props) => props.backgroundColor};

padding:${(props) => props.customPadding};
border-radius:${BorderRadius.xs};
`
export const SelectCheckBoxHead = styled.div `
position: relative;
`

export const MultipleSelection = styled.div `
width: 300px;
background-color: #fff;
border-color:${(props)=> props.borderColor};
border-style:solid;
border-width:1px;
border-radius:${BorderRadius.xs};
font-family:"IRANYekanBold";
direction:${(props)=> props.dir};
font-size:15px;
`

export const SelectBox = styled.div`
direction:${(props) =>props.dir};
background-color:#fff;
display:flex;
flex-direction:column;
border-style:solid;
border-width:1px;
border-color:${(props) => props.borderColor};
background-color:${(props) => props.backgroundColor};
box-shadow:0px 8px 16px 0px rgba(12, 13, 66, 0.07);
padding:${(props) => props.customPadding};
border-radius:${BorderRadius.xs};
`


// DropDownTag-----------------------------------------------------------------------

export const DropDownTagDiv = styled.div`
display:flex;
width:${(props) =>props.width};
width: 280px;
direction:${(props) =>props.dir};
direction:rtl;
overflow-x: auto;
overflow-y: hidden;
::-webkit-scrollbar {
    width: 4px;
  },
::-webkit-scrollbar-track {
    background: red; 
  },
::-webkit-scrollbar-thumb {
    background: #f1f1f1; 
  },
::-webkit-scrollbar-thumb:hover {
    background: #000; 
  },

`

export const DropDownTag = styled.div`
display:flex;
justify-content:end;
background-color:${(props) => props.backgroundColor};
background-color:${CokatexColors.lightGray};
width:${(props) =>props.width};
width: max-content;
min-width: 100px;
height:${(props) =>props.height};
height: 30px;
direction:${(props) =>props.dir};
padding:${(props) => props.customPadding};
border-radius:${BorderRadius.xs};
padding-left: 4px;
`

export const DropDownTagClose = styled.div`
width:${(props) =>props.width};
width: max-content;
height:${(props) =>props.height};
height: 30px;
padding:${(props) => props.customPadding};
padding: 3px 8px 0px 6px;
`

// DropDownTag--End------------------------------------------------------------------


