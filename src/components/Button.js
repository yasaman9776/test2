import styled from 'styled-components'
import { CokatexColors } from '../helper/colors';
const handleColorType = color => {
     switch (color) {
      case "primary":
        return " background: #ffb921;";
       case "danger":
         return " background: #f56342;";
     default:
        return {backgroundColor: `${CokatexColors.navyBlue}`}
       
     }
   
  };
  const handleHoverColor = color =>{
    switch (color) {
      case "primary":
        return " background: #ffb921;";
       case "danger":
         return " background: #f56342;";
     default:
        return {backgroundColor:`${CokatexColors.lightBlue}`}
       
     }
  }
    export const DefaultButton = styled.button`
    ${({ color }) => handleColorType(color)};
    border: none;
    padding: 10px 40px;
    color:#fff;
    width:120px;
    border-radius:10px;
    font-family:"IRANYekanBold";
    &:hover{
      ${({ color }) => handleHoverColor(color)};
    }
    `
    export const ExtendedButton = styled(DefaultButton)`
    display: block;
    width: 100vw;
    `