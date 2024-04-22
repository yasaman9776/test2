import styled from 'styled-components'
import {CokatexColors} from '../helper/colors';
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
const handleHoverColor = color => {
    switch (color) {
        case "primary":
            return " background: #ffb921;";
        case "danger":
            return " background: #f56342;";
        default:
            return {backgroundColor: `${CokatexColors.lightBlue}`}

    }
}
export const DefaultButton = styled.button `
    ${ ({
    color}) => handleColorType(color)};
    border: none;
    
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    font-family:"IRANYekanBold";
    box-shadow:0px 8px 16px 0px rgba(12, 13, 66, 0.34);
    &:hover{
      ${ ({
        color}) => handleHoverColor(color)};
    };
    i {
      margin-right: 5px;
    }
    ` 
    export const ExtendedButton = styled(DefaultButton)`
    display: block;
    width: 100vw;
    ` 
    export const LargeButton = styled(DefaultButton)`
    padding: 10px 40px;
    ` 
    export const MediumButton = styled(DefaultButton)`
    padding: 8px 28px;
    ` 
    export const SmallButton = styled(DefaultButton)`
    padding: 4px 12px;
    ` 
    export const IconButton = styled(DefaultButton)`
    display:flex;
    align-items:center;
    padding: 10px 20px;
    `
