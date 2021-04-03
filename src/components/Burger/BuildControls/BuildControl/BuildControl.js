import React from "react";
import Aux from "../../../../hoc/axl";
import style from "../BuildControl/BuildControl.module.css";

function BuildControl(props)
{
    return <Aux>
                <div className={style.BuildControl}>
                    <div className={style.lable}>{props.lable}</div>
                    <button disabled={props.disable} onClick={props.remove} className={style.Less}>Less</button>
                    <button onClick={props.add} className={style.More}>More</button>
                </div>
            </Aux>
}

export default BuildControl;