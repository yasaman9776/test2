
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';
import {
    CircularProgressbar,

    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import  {CokatexColors} from "../../helper/colors"
const CircleProgressbar =({strokeWidth}) => (
  
<> 


 <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]} >
     
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

 </>);

export default CircleProgressbar;

