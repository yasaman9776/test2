import styled from "styled-components";
import {CokatexColors} from '../helper/colors';

export const DefaultUl = styled.ul `
    width:${(props) =>props.width};
    direction:${(props)=> props.dir};
    direction: rtl;
    margin: 0;
    padding: 0;
    
      
    
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
    li::marker{color:${CokatexColors.alert}};
    margin: 0;
    padding: 0;
    
    
      
`