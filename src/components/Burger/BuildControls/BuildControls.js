import React from "react";
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import style from "../BuildControls/BuildControls.module.css";

const controls = [
    {key:"meat",lable:"meat"},
    {key:"salad",lable:"salad"},
    {key:"bacon",lable:"bacon"},
    {key:"cheese",lable:"cheese"},
]

function BuildControls(props)
{
    return <div className={style.BuildControls}>
        <center>Price : {props.totalPrice.toFixed(2)}</center>
        {controls.map(val=>{
           return <BuildControl disable={props.statusOfBtn[val.lable]>0 ? false:true} key={val.key} lable={val.lable} add={()=>{
               props.addIngridient(val.lable);
           }} remove={()=>{
               props.removeIngridients(val.lable);
           }}/>
        })}
        <button onClick={props.purchase} className={style.OrderButton} disabled={props.totalPrice===4}>{props.token!==null ? 'ORDER NOW':'SIGNUP TO ORDER'}</button>
        
    </div>
}

export default BuildControls;