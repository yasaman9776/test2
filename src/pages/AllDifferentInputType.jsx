
import { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const AllDifferentInputType = ({props}) =>{
    const [value, setToggle] = useState(true);
    const [value2, setToggle2] = useState(true);
    return(
      <div
      style={{
      padding: 50,
      display: "flex",
      flexDirection: "row-reverse"
  }}>
          <div style={{margin:20}}>
          <ToggleSwitch
          label="فقط محصولات موجود"
          title="toogle switch xs"
          size="xs"
          value={value}
          checked={value}
          onChange={({ target }) => setToggle(!value)}
        />
          </div>
          <div style={{margin:20}}>
            
<ToggleSwitch
          label="hello"
          title="toogle switch xs"
          size="xs"
          value={value2}
          disabled="true"
          checked={value2}
          onChange={({ target }) => setToggle2(!value)}
        />
          </div>
        </div>
    )


}

export default AllDifferentInputType;