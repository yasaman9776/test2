
import { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const AllDifferentInputType = ({props}) =>{
    const [value, setCheckbox] = useState(true);
    return(
        <>
          <ToggleSwitch
          title="toogle switch xs"
          size="xs"
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />
        </>
    )


}

export default AllDifferentInputType;