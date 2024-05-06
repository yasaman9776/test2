import styled from "styled-components";
import { CokatexColors } from "../helper/colors";

export const DefaultInput = styled.input `
border-width:1px;
border-color:${(props)=>props.borderColor};
border-style:solid;
padding:${(props)=> props.inputPadding};
border-radius:5px;
width:${(props) =>props.width};
direction:${(props)=>props.dir};
font-family:"IRANYekan";
font-size:14px;
& :active{
    border-color:#ffb921;
}
&:focus {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
};
&:focus-visible {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
};
&:visited {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
    text-decoration:none;
};
&:disabled{
    background-color:#D4D2D5;
}
`

export const IconInput = styled.div `
flex-direction:row-reverse;
display:flex;
justify-content:space-between;
border-width:1px;
border-color:${(props)=>props.borderColor};
border-style:solid;
padding:12px;
border-radius:5px;
width:${(props) =>props.width};
direction:${(props)=>props.dir};

`

export const DefaultTextarea = styled.textarea`
border-color:${(props) =>props.borderColor};
border-width:1px;
border-style:solid;
border-radius:5px;
direction:${(props)=> props.dir};
padding:15px;
font-family:"IRANYekan";
font-size:14px;
& :active{
    border-color:#ffb921;
}
&:focus {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
};
&:focus-visible {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
};
&:visited {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
    text-decoration:none;
}


`

export const ScrollableTextarea = styled(DefaultTextarea) `
resize:none;
height:${(props) => props.height};
overflow-y:scroll;
scrollbar-color: #E5E0EB #fff !important;
scrollbar-width: thin !important;
scrollbar-radius:5px !important;
& :active{
    border-color:#ffb921;
}
&:focus {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
};
&:focus-visible {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
};
&:visited {
    outline: none;
    box-shadow: ${(props) =>props.boxShadow};
    text-decoration:none;
}
`

export const NumberInput = styled.div `
    display:flex;
    flex-direction:row-reverse;
    justify-content:space-between;
    border-radius:50px;
    border-color:${(props) => props.borderColor};
    border-style:solid;
    border-width:1px;
    padding:5px;
    width:${(props) =>props.width};

`