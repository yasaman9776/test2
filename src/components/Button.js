import styled from 'styled-components'
import {CokatexColors} from '../helper/colors';

const handleBackgroundColor = backgroundColor => {
    switch (backgroundColor) {
        case "secondary":
            return " background: #fff;";
        case "danger":
            return {backgroundColor:`${CokatexColors.error}`};
        case "alert":
            return {backgroundColor:`${CokatexColors.alert}`};
        case "accept":
            return {backgroundColor:`${CokatexColors.accept}`}        
        default:
            return {backgroundColor: `${CokatexColors.navyBlue}`}

    }

};

const handleTextColor = textColor => {
    switch (textColor) {
        case "secondary":
            return {color:`${CokatexColors.navyBlue}`};
        case "danger":
            return "color: #fff;";
        case "alert":
            return "color:#fff"; 
        case "accept":
            return "color:#fff";       
        default:
            return "color:#fff";

    }
}
const handleBorderColor = borderColor => {
    switch (borderColor) {
        case "secondary":
            return {borderColor:`${CokatexColors.navyBlue}`};
        case "danger":
            return {borderColor:`${CokatexColors.error}`};
        case "alert":
            return {borderColor:`${CokatexColors.alert}`}    
        case "accept":
            return {borderColor:`${CokatexColors.accept}`}    
        default:
            return "border-color:transparent";

    }
}
//hover Styles
const handleHoverTextColor = hoverTextColor => {
    switch (hoverTextColor) {
        case "secondary":
            return {color:`${CokatexColors.white}`};
        case "danger":
            return "color:#fff";
        case "alert":
            return "color:#fff";
        case "accept":
            return "color:#fff"        
        default:
            return {color:`${CokatexColors.white}`}

    }
}
const handleHoverBackgroundColor = backgroundColor => {
    switch (backgroundColor) {
        case "secondary":
            return {backgroundColor:`${CokatexColors.navyBlue}`};
        case "danger":
            return {backgroundColor:`${CokatexColors.lightRed}`};
            case "alert":
                return {backgroundColor:`${CokatexColors.lightAlert}`};
            case "accept":
                return {backgroundColor:`${CokatexColors.lightAccept}`} 
        default:
            return {backgroundColor: `${CokatexColors.lightBlue}`}

    }
}

export const DefaultButton = styled.button `
    ${ ({backgroundColor}) => handleBackgroundColor(backgroundColor)};
    border-width: 1px;
    border-style:solid;
    ${ ({borderColor}) => handleBorderColor(borderColor)};
    ${ ({textColor}) => handleTextColor(textColor)};;
    cursor:pointer;
    border-radius:5px;
    font-family:"IRANYekanBold";
    box-shadow:0px 8px 16px 0px rgba(12, 13, 66, 0.34);
    &:hover{
      ${ ({hoverTextColor}) => handleHoverTextColor(hoverTextColor)};
      ${ ({backgroundColor}) => handleHoverBackgroundColor(backgroundColor)};
    };
    i {
      margin-right: 5px;
    };
 
    ` 
    export const ExtendedButton = styled(DefaultButton)`
    display: block;
    width: 100vw;
    ` 
    export const MainLargeButton = styled(DefaultButton)`
    padding: 10px 40px;
    ` 
    export const MainMediumButton = styled(DefaultButton)`
    padding: 8px 28px;
    ` 
    export const MainSmallButton = styled(DefaultButton)`
    padding: 4px 12px;
    ` 
    export const MainIconButton = styled(DefaultButton)`
    display:flex;
    align-items:center;
    padding: 10px 20px;
    `
    export const MiniIcon = styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    `