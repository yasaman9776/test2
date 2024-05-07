import styled from "styled-components";

export const DefaultSelect = styled.select`
        background-color:#fff;
        border-color:${(props)=> props.borderColor};
        border-style:solid;
        border-width:1px;
        border-radius:5px;
        font-family:"IRANYekanBold";
        direction:${(props)=> props.dir};
        font-size:15px;
        padding:5px 20px;
        *{
            background-color:#fff;
            font-family:"IRANYekan";
            font-size:12px;
        };
        * & :hover{
        background-color: ${(props) => props.backgroundHoverColor};
        },
        & :hover{
            background-color: ${(props) => props.backgroundHoverColor};
        },
        option :hover{
            background-color:#ffb921;
        }
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
border-color:${(props) => props.borderColor};
background-color:${(props) => props.backgroundColor};

padding:${(props) => props.customPadding};
border-radius:5px;
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
border-radius:5px;
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
border-radius:5px;
`