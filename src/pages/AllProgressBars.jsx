import { CircleProgressbar,CircleProgressbarDone } from "../components/Progress";

import FullAnimatedCircleProgressbar from "../components/Progressbar/FullAnimatedCircleProgressbar";
import { ProgressBarBack ,Progressbar, InlineProgressbar } from "../components/Progressbar/LinearProgressbar";
import { CokatexColors } from "../helper/colors";
import { Label } from "../components/Label";
import  DoneIcon from "../assets/icon/done";
import FailIcon from "../assets/icon/fail";
const AllProgressBars = ({props}) =>{

    return(
        <>
          <div
        style={{
          padding: 50,
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent:'space-between',
          width:'80%',
          margin:'auto'
        }}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <span style={{fontFamily:'IRANYekanBold'}}>
            دایره کوچک
          </span>
          <div style={{width:80,height:80 ,margin:20}}>
            
            <CircleProgressbar strokeWidth={5}/>
            </div>
          </div>
           <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <span style={{fontFamily:'IRANYekanBold'}}>
            دایره بزرگ
          </span>
           <div style={{width:100,height:100,margin:20}}>
           <CircleProgressbar strokeWidth={8}/>
           </div>
           </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <span style={{fontFamily:'IRANYekanBold'}}>
            تکمیل شده
          </span>
          <div style={{width:100,height:100,margin:20}}>
           <CircleProgressbarDone strokeWidth={8} />
           </div>
          </div>
          
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <span style={{fontFamily:'IRANYekanBold'}}>
            به ارور خورده
          </span>
          <div style={{width:100,height:100,margin:20}}>
           <FullAnimatedCircleProgressbar strokeWidth={8} />
           </div>
          </div>
        </div>
        <div
        style={{
          padding: 50,
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent:'space-between',
          width:'80%',
          margin:'auto'
        }}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
        <Label fontFamily={"IRANYekanBold"} textALign={"right"}>
          خط نازک
        </Label>
        <ProgressBarBack width={"250px"} height={"10px"}>
            <Progressbar width={"56%"} height={"10px"} progressColor={`${CokatexColors.navyBlue}`}>

            </Progressbar>
         </ProgressBarBack>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
        <Label fontFamily={"IRANYekanBold"} textALign={"right"}>
          خط ضخیم
        </Label>
        <ProgressBarBack width={"250px"} height={"20px"}>
            <Progressbar width={"25%"} height={"20px"} progressColor={`${CokatexColors.navyBlue}`}>

            </Progressbar>
         </ProgressBarBack>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
        <Label fontFamily={"IRANYekanBold"} textALign={"right"}>
          با درصد
        </Label>
       <InlineProgressbar>
        <Label fontFamily={"IRANYekanBold"} fontSize={"12px"} marginLeft={"10px"}>
          49%
        </Label>
       <ProgressBarBack width={"250px"} height={"10px"}>
            <Progressbar width={"40%"} height={"10px"} progressColor={`${CokatexColors.navyBlue}`}>

            </Progressbar>
         </ProgressBarBack>
       </InlineProgressbar>
        </div>
       
          </div>
          <div
        style={{
          padding: 50,
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent:'space-between',
          width:'80%',
          margin:'auto'
        }}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
        <Label fontFamily={"IRANYekanBold"} textALign={"right"}>
         تکمیل شده
        </Label>
       <InlineProgressbar>
        <DoneIcon width={"12px"} height={"12px"} style={{marginLeft:5}}/>
       <ProgressBarBack width={"250px"} height={"10px"}>
            <Progressbar width={"100%"} height={"10px"} progressColor={`${CokatexColors.accept}`}>

            </Progressbar>
         </ProgressBarBack>
       </InlineProgressbar>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
        <Label fontFamily={"IRANYekanBold"} textALign={"right"}>
         به ارور خورده
        </Label>
       <InlineProgressbar>
        <FailIcon width={"12px"} height={"12px"} color={`${CokatexColors.error}`} style={{marginLeft:5}}/>
       <ProgressBarBack width={"250px"} height={"10px"}>
            <Progressbar width={"80%"} height={"10px"} progressColor={`${CokatexColors.error}`}>

            </Progressbar>
         </ProgressBarBack>
       </InlineProgressbar>
        </div>
          </div>
        </>
    )
}

export default AllProgressBars;