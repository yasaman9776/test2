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
        }
        & :hover{
            background-color: ${(props) => props.backgroundHoverColor};
        }
`

export const DefaultOption = styled.option`
        background-color:#fff;

        & :hover{
            background-color:#ffb921;
        }
`