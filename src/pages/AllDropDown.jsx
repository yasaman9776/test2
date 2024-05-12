import { useState } from "react";
import { DefaultSelect, DefaultOption ,SelectDiv ,SelectCheckBoxHead,MultipleSelection,SelectBox,CheckBoxOption,DropDownTag,DropDownTagClose} from "../components/Dropdown";
import { DefaultTypography } from "../components/Typography";
import { CokatexColors } from "../helper/colors";
import Checkbox from "../components/Checkbox";
import Down from "../assets/icon/Down"
import { Label } from "../components/Label";
import Multiselect from 'multiselect-react-dropdown';
const AllDropDown = ({props}) =>{
 ;
    const [data, setData] = useState(undefined)
    let show = true;

    
   
    const [showList,
        setShowList] = useState(false);
        const [value, setCheckbox] = useState(false);
    const options = ["مورد اول", "مورد دوم", "مورد سوم"];
    const selectOptions = [["گزینه یک", 1],["گزینه دو", 2],["گزینه سه", 3],["گزینه چهار", 4],["گزینه پنج", 5]];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
        console.log("User Selected Value - ", event.target.value);
    };

    return ( 
    <> <div
        style={{
        padding: 50,
        display: "flex",
        flexDirection: "row-reverse"
    }}> 

        <div style={{
            textAlign: "right"
        }}>
            <DefaultSelect
                onChange={onOptionChangeHandler}
                dir={"rtl"}
                borderColor={`${CokatexColors.lightGray}`}
                backgroundHoverColor={`${CokatexColors.navyBlue}`}>
                <DefaultOption backgroundHoverColor={`${CokatexColors.navyBlue}`}>گزینه مورد نظر خود را انتخاب کنید</DefaultOption>
                {options.map((option, index) => {
                    return (
                        <DefaultOption key={index} backgroundHoverColor={`${CokatexColors.navyBlue}`}>
                            {option}
                        </DefaultOption>
                    );
                })}
            </DefaultSelect>
            {/* <h3>You selected: {data} </h3> */}
        </div>

        <div
            style={{
            marginRight: 15,
            marginLeft: 15
        }}>

            <SelectDiv
                borderColor={`${CokatexColors.lightGray}`}
                onClick={() => setShowList(!showList)}
                customPadding={"5px"}>

                <CheckBoxOption fontFamily={"IRANYekanBold"}>گزینه های مورد نظر خود را انتخاب کنید</CheckBoxOption>
                <DropDownTag style={{display: "flex",}}><DefaultTypography>Tag</DefaultTypography><DropDownTagClose>z</DropDownTagClose></DropDownTag>
                <Down
                    color={`${CokatexColors.black}`}
                    height={"12px"}
                    width={"12px"}
                    style={{
                    marginRight: 2
                }}/>
            </SelectDiv>

            {showList
                ? <SelectBox

                        id="checkBoxes"
                        dir={"rtl"}
                        backgroundColor={`${CokatexColors.white}`}
                        borderColor={`${CokatexColors.lightGray}`}
                        customPadding={"15px"}>
                        {selectOptions.map((selectOption, index) => {
                            return (
                                // <Label key={index} for="first" fontFamily={"IRANYekan"} fontSize={"14px"}>
                                //     <input type="checkbox" id="first"/> {selectOption}
                                // </Label>

                                <Checkbox
                                rightIndicator={"-20px"}
                                backgroundColor={`${CokatexColors.white}`}
                                borderColor={`${CokatexColors.lightGray}`}
                                fontFamily={"IRANYekan"}
                                key={index}
                                label={selectOption[0]}
                                value={selectOption[1]}
                                
                                onChange={()=>setCheckbox(!(selectOption[1]))}
                                checkColor={`${CokatexColors.navyBlue}`}
                                />  
                            )
                        })
}

                    </SelectBox>
                : null
}

        </div>
     
    </div> </>
    )
}

export default AllDropDown;