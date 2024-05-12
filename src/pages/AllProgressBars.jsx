import { CircleProgressbar,CircleProgressbarDone } from "../components/Progress";

import FullAnimatedCircleProgressbar from "../components/Progressbar/FullAnimatedCircleProgressbar";
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
        </>
    )
}

export default AllProgressBars;