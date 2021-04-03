import React from "react";
import style from "../Button/Button.module.css";

function Button(props)
{
    return <button className={[style.Button,style[props.btntype]].join(' ')} onClick={props.clicked}>{props.msg}</button>
}

export default Button;