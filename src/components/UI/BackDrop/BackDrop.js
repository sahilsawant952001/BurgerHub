import React from "react";
import style from "../BackDrop/BackDrop.module.css";

function BackDrop(props)
{
    const op = props.show ? <div className={style.BackDrop} onClick={props.clicked}></div>:null;
    return op;
}

export default BackDrop;