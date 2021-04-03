import React from "react";
import Aux from "../../../hoc/axl";
import Button from "../../UI/Button/Button";

function OrderSummary(props)
{
    const list = Object.keys(props.ingridients).map(key=>{
        return <li key={key}>{key} {props.ingridients[key]}</li>
    })
    return <Aux>
        <h3>Your Order</h3>
        <p>A delicious Burger With Following Ingridients</p>
        <ul>
            {list}
        </ul>
        <p>Total Price : {props.total.toFixed(2)}</p>
        <p>Countinue To Checkout ?</p>
        <Button btntype="Danger" clicked={props.cancel} msg={"CANCEL"}></Button>
        <Button btntype="Success" clicked={props.continue} msg={"SUBMIT"}></Button>
        
    </Aux>
}

export default OrderSummary;