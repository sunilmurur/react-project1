import React, { useContext } from "react";
import { ThemeContext } from "../../context/TheContext";
 const ButtonTheme = () => {
    const {toggleTheme,theme} = useContext(ThemeContext)
    return(
        <button onClick={toggleTheme}ChangeTheme>{theme}</button>
    )
}
export default ButtonTheme