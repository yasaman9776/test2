import { DefaultInput ,IconInput ,DefaultTextarea ,ScrollableTextarea ,NumberInput} from "../components/Inputs";
import { CokatexColors } from "../helper/colors";
import { Label } from "../components/Label";
import { Minus,Plus,OpenEye,CloseEye } from "../assets/icon";
import { useState } from "react";
import { MiniIcon } from "../components/Button";
const AllInputs = ({props}) =>{

    const [showPassword, setShowPassword] = useState(false);
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=0) {
      decrementCounter = () => setCounter(1);
    }
    return(
        <>
        <div style={{
        padding: 50,display:'flex',flexDirection:'row-reverse'
    }}>

        <div style={{display:"flex",flexDirection:'column',width:290}} >
        <Label fontFamily={"IRANYekanBold"} textAlign={"right"}>
            نام و نام خانوادگی
        </Label>
        <DefaultInput   boxShadow ={"0px 0px 2px #2A4270"} width={"255px"} dir={"rtl"} inputPadding={"10px"} placeholder="متن را وارد کنید" borderColor={`${CokatexColors.lightGray}`} />
   
        </div>

        <div style={{display:'flex',flexDirection:'column',width:280,marginRight:25,marginLeft:25}}>
        <Label fontFamily={"IRANYekanBold"} textAlign={"right"}>
            رمز عبور
        </Label>
        <IconInput borderColor={`${CokatexColors.lightGray}`}>
            <DefaultInput borderColor={"transparent"} width={"200px"} dir={"rtl"}  type={
                        showPassword ? "text" : "password"
                    } inputPadding={"0px"}
                   boxShadow ={"none"}
                    />
            <MiniIcon onClick={()=>setShowPassword(!showPassword)} >
                {
                    showPassword ?
                    <OpenEye color={"#ABA7AF"} width={"20px"}/>
                    :
                    <CloseEye color={"#ABA7AF"} width={"20px"}/>
                }
         
            </MiniIcon>
        </IconInput>
        </div>
        <div style={{display:'flex',flexDirection:'column',width:280}}>
        <Label fontFamily={"IRANYekanBold"} textAlign={"right"}>
            پیام خود را اینجا بنویسید
        </Label>
        <DefaultTextarea boxShadow ={"0px 0px 2px #2A4270"} dir={"rtl"} borderColor={`${CokatexColors.lightGray}`}/>
        </div>
        <div style={{display:'flex',flexDirection:'column',width:280,marginRight:25}}>
        <Label fontFamily={"IRANYekanBold"} textAlign={"right"}>
            پیام خود را اینجا بنویسید
        </Label>
        <ScrollableTextarea boxShadow ={"0px 0px 2px #2A4270"} dir={"rtl"} borderColor={`${CokatexColors.lightGray}`} height={"50px"}/>
        </div>
     </div>
     <div style={{ padding: 50,display:'flex',flexDirection:'row-reverse'}}>
        <NumberInput borderColor={"#000"} width={"100px"}>
            <MiniIcon borderColor={"transparent"} onClick={incrementCounter}>
                <Plus height={"20px"} width={"20px"} color={"#000"}/>
            </MiniIcon>
            <div style={{fontFamily:"IRANYekan"}}>
                {counter}
            </div>
            <MiniIcon borderColor={"transparent"} onClick={decrementCounter}>
                <Minus height={"20px"} width={"20px"} color={"#000"}/>
            </MiniIcon>
        </NumberInput>
     </div>
        </>
    )
}

export default AllInputs;