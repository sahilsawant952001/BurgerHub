import React from "react";
import style from "../Toggler/Toggler.module.css";

function Toggler(props)
{
    return <div onClick={props.clicked} className={style.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
           </div>
}

export default Toggler;