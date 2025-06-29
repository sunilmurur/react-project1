import React from "react";

import  DisplayTheme  from "./DisplayTheme";
import  ButtonTheme  from "./SetTheme";
import ThemeLogicContext from "../../context/TheContext";
const OverAllDisplay = () => {
    return(
<ThemeLogicContext>
    <ButtonTheme />
    <DisplayTheme />
</ThemeLogicContext>
    )
}
export default OverAllDisplay;
