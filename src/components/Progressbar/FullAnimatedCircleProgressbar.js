
import 'react-circular-progressbar/dist/styles.css';

import {
    CircularProgressbar,

    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import  {CokatexColors} from "../../helper/colors";

  import AnimatedProgressProvider from './AnimatedProgressbar';
  import { easeQuadInOut } from "d3-ease";

const FullAnimatedCircleProgressbar = ({strokWidth}) =>{

    return(
        <AnimatedProgressProvider
        valueStart={0}
        valueEnd={100}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
        strokWidth={strokWidth}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={roundedValue===100 ? "X" :`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" ,
              textColor: roundedValue ===100 ? `${CokatexColors.error}` : `${CokatexColors.navyBlue}`,
              pathColor: roundedValue ===100 ? `${CokatexColors.error}` : `${CokatexColors.navyBlue}`,
              trailColor: `${CokatexColors.lightGray}`,
              fontFamily:'IRANYekan'
            })}
            />
          );
        }}
      </AnimatedProgressProvider>
    )
}

export default FullAnimatedCircleProgressbar;