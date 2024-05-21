import { useState,useRef,useEffect } from "react";
import { DefaultSelect, DefaultOption ,SelectDiv ,SelectCheckBoxHead,MultipleSelection,SelectBox,CheckBoxOption,DropDownTag,DropDownTagClose,DropDownTagDiv} from "../components/Dropdown";
import { DefaultTypography } from "../components/Typography";
import { CokatexColors } from "../helper/colors";
import Cross from "../assets/icon/Cross";
import Checkbox from "../components/Checkbox";
import Down from "../assets/icon/Down"
import { Label } from "../components/Label";
import Multiselect from 'multiselect-react-dropdown';
function useOnClick(ref, handler) {
    useEffect(() => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        // if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        //   return;
        // }
  
        handler(event);
      };
  
      document.addEventListener("mousedown", listener);
  
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  }
const AllDropDown = ({props}) =>{
 ;
    const [data, setData] = useState(undefined)
    let show = true;

    const [selectedValue, setSelectedValue] = useState([])
    const [showList, setShowList] = useState(false);
    const options = ["مورد اول", "مورد دوم", "مورد سوم"];
    const selectOptions = [{label:"گزینه یک",value:1},{label:"گزینه دو",value:2},{label:"گزینه سه",value:3},{label:"گزینه چهار",value:4},{label:"گزینه پنج",value:5}];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
        console.log("User Selected Value - ", event.target.value);
    };

    const CheckBoxChangeHandler = (e) => {
        // var item=   selectedValue.find((checkBoxTag) => checkBoxTag.value === 1)
        // console.log(item);
        if (e.target.checked) {
        setSelectedValue([...selectedValue,{label:e.target.name,value:e.target.value}])
        // console.log(selectedValue)

    }
    else {
        var Chek=selectedValue;
        Chek=Chek.filter(function(item)
        {return  item.value!=e.target.value
        })
      setSelectedValue(Chek);
    }
    };

    const CloseTagChangeHandler = (e) => {
        var Chek=selectedValue;
        Chek=Chek.filter(function(item)
        {return  item.value!=e
        })
      setSelectedValue(Chek);
      
    };

    const CheckedChangeHandler = (e) => {
        if (e.target.checked) {
            
        }
        else {
            var Chek=selectedValue;
            Chek=Chek.filter(function(item)
            {return  item.value!=e.target.value
            })
          setSelectedValue(Chek);
        }
    //  var item=   selectedValue.find((checkBoxTag) => {
    //         return checkBoxTag.value === e.target.value;
            
    //     })
    //     console.log(item);
    };

    // window.onclick = function(event) {
    //     if (showList) {
    //         setShowList(!showList);
    //     }
    //     console.log(event.target);
    //     // if (event.target == modal) {
    //     //     modal.style.display = "none";
    //     // }
    // }
    
      const ref = useRef();

      useOnClick(ref, () => setShowList(false));
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
                customPadding={"5px 8px 5px 8px"}
                dir={"rtl"}
                borderColor={`${CokatexColors.lightGray}`}
                backgroundHoverColor={`${CokatexColors.navyBlue}`}>
                <DefaultOption fontFamily={'IRANYekanBold'} backgroundHoverColor={`${CokatexColors.navyBlue}`}>
                    گزینه مورد نظر خود را انتخاب کنید
                   </DefaultOption>
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
                customPadding={"5px 8px 5px 8px"}>
                    <DropDownTagDiv>
                    
{
    selectedValue.length==0?
    <CheckBoxOption fontFamily={"IRANYekanBold"}>گزینه های مورد نظر خود را انتخاب کنید</CheckBoxOption>

    :
    selectedValue.map((checkBoxTag, index) => {
        return(
            <DropDownTag style={{display: "flex", marginLeft: "4px"}}>
         <DefaultTypography>
         {checkBoxTag.label}
 </DefaultTypography>
 <DropDownTagClose  onClick={(e)=>CloseTagChangeHandler(checkBoxTag.value)}>
     <Cross color={`${CokatexColors.black}`} height={"12px"} width={"12px"}/>
 </DropDownTagClose>

</DropDownTag>
     )
    })
}
</DropDownTagDiv>
                   

                <Down
                    color={`${CokatexColors.black}`}
                    height={"15px"}
                    width={"15px"}
                    style={{
                    marginRight: 1
                }}/>
            </SelectDiv>

            {showList
                ? <SelectBox

                        id="checkBoxes"
                        dir={"rtl"}
                        backgroundColor={`${CokatexColors.white}`}
                        borderColor={`${CokatexColors.lightGray}`}
                        ref={ref}
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
                                
                                name={selectOption.label}
                                label={selectOption.label}
                                value={selectOption.value}
                                // checked={(e)=>CheckedChangeHandler(e)}
                                checked={selectedValue.some(x=>x.value==selectOption.value)} 
                                onChange={(e)=>CheckBoxChangeHandler(e)}
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