import { useState, useEffect } from "react";
import Switch from '@mui/material/Switch';


const Toggle = () => {

    const [isOn, setIsOn] = useState(() => {
        return localStorage.getItem("theme") === "dark"; // Check local storage for the theme and set the initial state accordingly
    });

    useEffect(() => {
        const theme = isOn ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [isOn]);

    const handleChange = () =>{
        setIsOn(!isOn);
        console.log(isOn);
     }
     
    return(
        <div className="toggle-container" data-theme={isOn ? "dark" : "light"}>
            <label className="toggle-label">Toggle Dark Mode</label>    
            <Switch

                checked={isOn}
                onChange={handleChange}
            />
        </div>
    )
}

export default Toggle;