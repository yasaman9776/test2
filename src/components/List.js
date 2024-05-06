import styled from "styled-components";
import {CokatexColors} from '../helper/colors';

export const DefaultUl = styled.ul `
    width:${(props) =>props.width};
    direction:${(props)=> props.dir};
    direction: rtl;
      
    
`

export const DefaultLi = styled.li `
    width:${(props) =>props.width};
    padding: 0px 6px 6px 0px ;
    padding:${(props) =>props.paddingLeft};
      
    
`

export const DefaultOl = styled.ol `
    width:${(props) =>props.width};
    direction:${(props)=> props.dir};
    direction: rtl;
    Color:${CokatexColors.error};
      
    
`