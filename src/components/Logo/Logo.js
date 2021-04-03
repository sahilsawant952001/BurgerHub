import React from "react";
import burgerLogo from "../../assets/burger-logo.png";
import style from "../Logo/Logo.module.css";

function Logo(props)
{
    return <div className={style.Logo}>
        <img src={burgerLogo} alt="Burger-Logo"></img>
    </div>
}

export default Logo;