import React, { useContext } from "react";
import { ThemeContext } from "../../context/TheContext";
 const DisplayTheme = () => {
    const {theme} = useContext(ThemeContext)
    const style = {
        backgroundColor : theme==='Dark'? '#222' : '#eee',
        Color:  theme ==='Dark' ? '#fff': '#1111'
    };
    return(
    
        <>
        <div style={style}>{theme}</div>
        </>
    )
}
export default DisplayTheme