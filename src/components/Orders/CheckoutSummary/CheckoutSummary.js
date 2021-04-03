import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import style from "../CheckoutSummary/CheckoutSummary.module.css";


function CheckoutSummary(props)
{
    return (<div className={style.CheckOutSummary}>
                <h1>We Hope It Tastes Well</h1>
                <div style={{width:'100%',margin:'10% auto 0 auto'}}>
                    <Burger ingridients={props.ingridients}/>
                </div>
                <Button btntype="Danger" msg="CANCEL" clicked={props.cancel1}/>
                <Button btntype="Success" msg="CONTINUE" clicked={props.continue1}/>
            </div>);
}




export default  (CheckoutSummary);