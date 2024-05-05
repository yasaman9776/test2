import styled from "styled-components";
import {CokatexColors} from '../helper/colors';

// const handleDeviceType = devicetype => {
//     switch (devicetype) {
//         case "desktop":
//             return " background: #fff;";
//         case "tablet":
//             return {backgroundColor:`${CokatexColors.error}`};
//         case "mobile":
//             return {backgroundColor:`${CokatexColors.alert}`};        
//         default:
//             return {backgroundColor: `${CokatexColors.navyBlue}`};

//     }

// };

const handleTextLevel = textLevel => {
    switch (textLevel) {
        case "h1-26":
            return "font-size:26px; font-family:IRANYekanExtra;" ;
        case "h1-24":
            return "font-size:24px; font-family:IRANYekanExtra;" ;
        case "h1-22":
            return "font-size:22px; font-family:IRANYekanExtra;" ;
        case "h1-20":
            return "font-size:20px; font-family:IRANYekanExtra;" ;
        case "h1-18":
            return "font-size:18px; font-family:IRANYekanExtra;" ;
        case "h1-16":
            return "font-size:16px; font-family:IRANYekanExtra;" ;
        case "h1-14":
            return "font-size:14px; font-family:IRANYekanExtra;" ;
        case "h2-26":
            return "font-size:26px; font-family:IRANYekanBold;" ;
        case "h2-24":
            return "font-size:24px; font-family:IRANYekanBold;" ;
        case "h2-22":
            return "font-size:22px; font-family:IRANYekanBold;" ;
        case "h2-20":
            return "font-size:20px; font-family:IRANYekanBold;" ;
        case "h2-18":
            return "font-size:18px; font-family:IRANYekanBold;" ;
        case "h2-16":
            return "font-size:16px; font-family:IRANYekanBold;" ;
        case "h2-14":
            return "font-size:14px; font-family:IRANYekanBold;" ;
        case "h3-26":
            return "font-size:26px; font-family:IRANYekanNormal;" ;
        case "h3-24":
            return "font-size:24px; font-family:IRANYekanNormal;" ;
        case "h3-22":
            return "font-size:22px; font-family:IRANYekanNormal;" ;
        case "h3-20":
            return "font-size:20px; font-family:IRANYekanNormal;" ;
        case "h3-18":
            return "font-size:18px; font-family:IRANYekanNormal;" ;
        case "h3-16":
            return "font-size:16px; font-family:IRANYekanNormal;" ;
        case "h3-14":
            return "font-size:14px; font-family:IRANYekanNormal;" ;
        case "h4-26":
            return "font-size:26px; font-family:IRANYekanLight;" ; 
        case "h4-24":
            return "font-size:24px; font-family:IRANYekanLight;" ;
        case "h4-22":
            return "font-size:22px; font-family:IRANYekanLight;" ;
        case "h4-20":
            return "font-size:20px; font-family:IRANYekanLight;" ;
        case "h4-18":
            return "font-size:18px; font-family:IRANYekanLight;" ;
        case "h4-16":
            return "font-size:16px; font-family:IRANYekanLight;" ;
        case "h4-14":
            return "font-size:14px; font-family:IRANYekanLight;" ;            
        default:
            return "font-size:18px; font-family:IRANYekanNormal;" ;

    }

};

// const handleTextColor = textColor => {
//     switch (textColor) {
//         case "navyBlue":
//             return {color: `${CokatexColors.navyBlue}`};
//         case "danger":
//             return {color:`${CokatexColors.error}`};
//         case "alert":
//             return {color:`${CokatexColors.alert}`};
//         case "accept":
//             return {color:`${CokatexColors.accept}`};
//         case "accept":
//             return {color:`${CokatexColors.accept}`};        
//         default:
//             return " color: #000;";
            

//     }

// };

// const handleHoverTextColor = hoverTextColor => {
//     switch (hoverTextColor) {
//         case "link":
//             return {color:`${CokatexColors.link}`};    
//         default:
//             return "color:#000 ;";

//     }
// }






export const DefaultTypography = styled.div `

color:${(props) => props.color};
${ ({textLevel}) => handleTextLevel(textLevel)};
&:hover{
    color:${(props) => props.hoverColor};
};

` 