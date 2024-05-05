import styled from "styled-components";
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

const handleTextLevel = backgroundColor => {
    switch (backgroundColor) {
        case "h1":
            return "font-size:20px;" && "font-family:IRANYekanBold";
        case "h2":
            return "font-size:18px;" && "font-family:IRANYekanBold";
        case "h3":
            return "font-size:16px;" && "font-family:IRANYekanBold";
        case "h4":
            return "font-size:14px;" && "font-family:IRANYekanBold";
        case "t1":
            return "font-size:20px;" && "font-family:IRANYekan";
        case "t2":
            return "font-size:18px;" && "font-family:IRANYekan";
        case "t3":
            return "font-size:16px;" && "font-family:IRANYekan";
        case "t4":
            return "font-size:14px;" && "font-family:IRANYekan";           
        default:
            return "font-size:18px;" && "font-family:IRANYekan";

    }

};

const handleColor = backgroundColor => {
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


export const DefaultInput = styled.div `
border-width:1px;
border-color:${(props)=>props.borderColor};
border-style:solid;
padding:${(props)=> props.inputPadding};
border-radius:5px;
width:${(props) =>props.width};
direction:${(props)=>props.dir};
font-family:"IRANYekan";
font-size:14px;
`