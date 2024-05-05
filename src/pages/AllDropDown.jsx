import styled from "styled-components";
import { useState } from "react";
import { DefaultSelect, DefaultOption } from "../components/Dropdown";
import { CokatexColors } from "../helper/colors";
const AllDropDown = ({props}) =>{
    const [data, setData] = useState(undefined);
 
    const options = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
    ];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
        console.log(
            "User Selected Value - ",
            event.target.value
        );
    };
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
            </div>
        </>
    )
}

export default AllDropDown;