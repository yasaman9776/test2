import { useState } from "react";
import { DefaultSelect, DefaultOption ,SelectDiv ,SelectCheckBoxHead,MultipleSelection} from "../components/DropDown";
import { CokatexColors } from "../helper/colors";
import { CheckBoxOption } from "../components/DropDown";
import { Label } from "../components/Label";
const AllDropDown = ({props}) =>{
 
    const [data, setData] = useState(undefined);
    let show = true;

    const options = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
    ];
    const options2 = [
        "HTML",
        "CSS",
      
    ];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
        console.log(
            "User Selected Value - ",
            event.target.value
        );
    };
     
    const showCheckboxes = () => {
        console.log("hiii")
        let checkboxes = document.getElementById("checkBoxes");

        if (show) {
            checkboxes.style.display = "flex";
            checkboxes.style.flexDirection ="column"
            show = false;
        } else {
            checkboxes.style.display = "none";
            show = true;
        }
    }
    return(
        <>
        
 
            <div style={{padding:50,display:"flex",flexDirection:"row-reverse"}}>
          <div style={{textAlign:"right"}}>
          <DefaultSelect onChange={onOptionChangeHandler} dir={"rtl"} borderColor={`${CokatexColors.lightGray}`} backgroundHoverColor={`${CokatexColors.navyBlue}`}>
                <DefaultOption backgroundHoverColor={`${CokatexColors.navyBlue}`}>گزینه مورد نظر خود را انتخاب کنید</DefaultOption>
                {options.map((option, index) => {
                    return (
                        <DefaultOption key={index} backgroundHoverColor={`${CokatexColors.navyBlue}`}>
                            {option}
                        </DefaultOption>
                    );
                })}
            </DefaultSelect>
            <h3>You selected: {data} </h3>
          </div>
          <div style={{textAlign:"right"}}>
          <DefaultSelect onChange={onOptionChangeHandler} dir={"rtl"} borderColor={`${CokatexColors.lightGray}`} backgroundHoverColor={`${CokatexColors.navyBlue}`}>
                <DefaultOption backgroundHoverColor={`${CokatexColors.navyBlue}`}>گزینه مورد نظر خود را انتخاب کنید</DefaultOption>
                {options2.map((option, index) => {
                    return (
                        <CheckBoxOption key={index} backgroundHoverColor={`${CokatexColors.navyBlue}`}>
                            <div style={{width:'5px',height:'5px',borderStyle:'solid',borderWidth:'1px',borderColor:'#000'}}>

                            </div>
                          <>
                          {option}</>
                        </CheckBoxOption>
                    );
                })}
            </DefaultSelect>
    
          </div>
          <div>
          <form>
        <MultipleSelection>
            <SelectCheckBoxHead class="selectBox" onClick={showCheckboxes}>
                <DefaultSelect style={{width:'100%'}}>
                    <option>Select options</option>
                </DefaultSelect>
              
            </SelectCheckBoxHead>
 
            <SelectDiv id="checkBoxes" dir={"rtl"} backgroundColor={`${CokatexColors.white}`} borderColor={`${CokatexColors.lightGray}`}>

            
                <Label for="first" fontFamily={"IRANYekanBold"}>
                    <input type="checkbox" id="first" />
                    چک باکس یک
                </Label>
 
                <Label for="second"  fontFamily={"IRANYekanBold"}>
                    <input type="checkbox" id="second" />
                   چک باکس دو
                </Label>
           
                </SelectDiv>
        </MultipleSelection>
    </form>
          </div>
   
          
            </div>
        </>
    )
}

export default AllDropDown;