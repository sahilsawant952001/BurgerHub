import React from "react";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
import style from "../Burger/Burger.module.css";

function Burger(props)
{
    let transformedIngridients = Object.keys(props.ingridients).map(
        igkey =>{
            return [...Array(props.ingridients[igkey])].map((o,i)=>{
                return <BurgerIngridient key={igkey+i} type={igkey}/>
            })
        }
    ).reduce((val,i)=>{
        return val.concat(i);
    },[]);

    if(transformedIngridients.length===0)
        transformedIngridients = "Please Start Adding Ingridients";
    
    return (
        <div className={style.Burger}>
        <BurgerIngridient type="bread-top"/>
        {transformedIngridients}
        <BurgerIngridient type="bread-bottom"/>
        </div>
        );
}

export default Burger;