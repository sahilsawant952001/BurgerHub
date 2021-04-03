import React from "react";
import style from "../Modal/Modal.module.css";
import Aux from "../../../hoc/axl";
import BackDrop from "../BackDrop/BackDrop";

function Modal(props)
{
    return <Aux>
        <BackDrop show={props.show} clicked={props.modalClose}/>
        <div className={style.Modal} style={{transform:props.show?'translateY(0)':'translateY(-100vh)',opacity:props.show?'1':'0'}}>
        {props.children}
    </div>
    </Aux>
}

export default React.memo(Modal);