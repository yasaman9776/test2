import styled from "styled-components";


export const BadgeBubble = styled.div`
width : ${(props) => props.width};
height :${(props) =>props.height};
background-color:${(props) => props.backgroundColro};
color:#fff;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
`

export const BadgeIcon = styled.div`
position:relative;
`