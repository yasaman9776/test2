
import React, {useState} from 'react'; 
import ArrowUp from '../assets/icon/Arrow';
import { ArrowBtn } from './ArrowBackToTopStyle';
import { CokatexColors } from '../helper/colors';  
const BackToTop = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <ArrowBtn onClick={scrollToTop} style={{display: visible ? 'flex' : 'none'}}> 
     <ArrowUp  heigth={"15px"} width={"15px"} color={`${CokatexColors.navyBlue}`} 
     /> 
    </ArrowBtn> 
  ); 
} 
  
export default BackToTop; 
