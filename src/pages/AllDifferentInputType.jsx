import { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import Checkbox from "../components/Checkbox";
import { CokatexColors } from "../helper/colors";
import RadioButton from "../components/Radiobutton";
import ProgressBarCustom from "../components/Progress";
 const AllDifferentInputType = ({ props }) => {
  const [value, setToggle] = useState(true);
  const [value2, setToggle2] = useState(true);
  const [value3, setToggle3] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [radioValue, setRadio] = useState(true);
  return (
    <>
      <div
        style={{
          padding: 50,
          display: "flex",
          flexDirection: "row-reverse"
        }}>
        <div style={{
          margin: 20
        }}>
          <ToggleSwitch
            label="فقط محصولات موجود (سایز کوچک)"
            title="toogle switch xs"
            size="xs"
            value={value}
            checked={value}
            onChange={({ target }) => setToggle(!value)} />
        </div>
        <div style={{
          margin: 20
        }}>

          <ToggleSwitch
            label="فقط محصولات موجود (سایز متوسط)"
            title="toogle switch sm"
            size="sm"
            value={value2}
            disabled="true"
            checked={value2}
            onChange={({ target }) => setToggle2(!value2)} />
        </div>
        <div style={{
          margin: 20
        }}>

          <ToggleSwitch
            label="فقط محصولات موجود (سایز بزرگ)"
            title="toogle switch lg"
            size="lg"
            value={value3}
            checked={value3}
            onChange={({ target }) => setToggle3(!value3)} />
        </div>

      </div>
      <div style={{
        padding: 50,
        display: "flex",
        flexDirection: "row-reverse"
      }}>
        <div style={{
          margin: 20
        }}>
          <Checkbox
            backgroundColor={`${CokatexColors.white}`}
            borderColor={`${CokatexColors.lightGray}`}
            fontFamily={"IRANYekan"}
            rightIndicator={"-30px"}
            label="متن کنار چک باکس"
            value={checkbox}
            checked={checkbox}
            onChange={({ target }) => setCheckbox(!checkbox)}
            checkColor={`${CokatexColors.navyBlue}`} />
        </div>
        <div style={{ margin: 20 }}> <RadioButton
          label="متن یک"
          name="radio"
          value={radioValue}
          checked={radioValue}
          onChange={({ target }) => {
            console.log(target.value);
            setRadio(Boolean(target.value));
          }} /> 
          <RadioButton label="متن دو" name="radio" value={!radioValue}
            checked={!radioValue}
            onChange={({ target }) => setRadio(!target.value)} /> 
          <RadioButton
            label="متن سه"
            name="radio-disabled"
            value={!radioValue}
            checked={!radioValue}
            disabled
            onChange={({ target }) => setRadio(!target.value)} /> 
          </div>
        <div></div> </div>

         </>
  );


};

export default AllDifferentInputType;