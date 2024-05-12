
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import  {CokatexColors} from "../../helper/colors";

  import CheckIcon from '../../assets/icon/Check';
const CircleProgressbarDone =({strokeWidth}) => (
  
<> 


 <ChangingProgressProvider values={[0, 20, 40, 60, 80, 99,100]} >
     
      {percentage => percentage===100?
    <CircularProgressbarWithChildren value={100} styles={buildStyles({
           
        pathTransitionDuration: 0.15,
        textColor: percentage ===100 ? `${CokatexColors.accept}` : `${CokatexColors.navyBlue}`,
        pathColor: percentage ===100 ? `${CokatexColors.accept}` : `${CokatexColors.navyBlue}`,
        trailColor: `${CokatexColors.lightGray}`,
        fontFamily:'IRANYekan'
      })}>
    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <CheckIcon width={20} height={20} color={`${CokatexColors.accept}`}/>
  
  </CircularProgressbarWithChildren>
  : <ChangingProgressProvider values={[0, 20, 40, 60, 80, 99]} >
     
    {percentage => (
        <CircularProgressbar
       
        strokeWidth={strokeWidth}
        maxValue={100}
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
           
            pathTransitionDuration: 0.15,
            textColor: percentage ===100 ? `${CokatexColors.accept}` : `${CokatexColors.navyBlue}`,
            pathColor: percentage ===100 ? `${CokatexColors.accept}` : `${CokatexColors.navyBlue}`,
            trailColor: `${CokatexColors.lightGray}`,
            fontFamily:'IRANYekan'
          })}
        />
      )}
   
  </ChangingProgressProvider>
    
    }
       
      </ChangingProgressProvider>

 </>);

export default CircleProgressbarDone;

