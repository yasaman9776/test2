import styled from "styled-components";


export const BadgeBubble = styled.div`
width : ${(props) => props.width};
height :${(props) =>props.height};
background-color:${(props) => props.backgroundColor};
color:#fff;
border-radius:${(props) => props.borderRadius};
display:flex;
justify-content:center;
align-items:center;
position:absolute;
border-style:solid;
border-color:#fff;
border-width:${(props) =>props.borderWidth};
border:3px solid #fff;
top:${(props) =>props.top};
right:${(props) => props.right};
left : ${(props) => props.left};
padding:${(props) => props.padding};
`

export const BadgeIcon = styled.div`
position:relative;
`