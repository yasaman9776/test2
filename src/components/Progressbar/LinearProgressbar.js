
import styled from "styled-components";
import { CokatexColors } from "../../helper/colors";
export const ProgressBarBack = styled.div `
background-color: #E5E0EB;
width:${(props) => props.width};
height:${(props) => props.height};
border-radius:50px;

`

export const Progressbar = styled.div`
background-color:${(props) => props.progressColor};
width: ${(props) =>props.width};
height:${(props) =>props.height};
border-radius:50px;
`

export const InlineProgressbar = styled.div `
display:flex;
flex-direction:row-reverse;
align-items:baseline;
`
