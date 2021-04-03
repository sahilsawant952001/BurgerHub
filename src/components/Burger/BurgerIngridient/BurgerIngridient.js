import React from "react";
import PropTypes from "prop-types";
import style from "../BurgerIngridient/BurgerIngridient.module.css";
import Aux from "../../../hoc/axl";

function BurgerIngridient(props)
{
    let ingridient = null;
    switch(props.type)
    {
        case 'bread-bottom':
            ingridient = <div className={style.BreadBottom}></div>
            break;
        case 'bread-top':
            ingridient = (
                <div className={style.BreadTop}>
                <div className={style.Seeds1}></div>
                <div className={style.Seeds2}></div>
                </div>
            );
            break;
        case 'meat':
            ingridient = <div className={style.Meat}></div>
            break;
        case 'cheese':
            ingridient = <div className={style.Cheese}></div>
            break;
        case 'bacon':
            ingridient = <div className={style.Bacon}></div>
            break;
        case 'salad':
            ingridient = <div className={style.Salad}></div>
            break;
        default:
            ingridient = null;

    }
    return (<Aux>{ingridient}</Aux>);
}

export default BurgerIngridient;

BurgerIngridient.prototype = {
    types:PropTypes.string.isRequired
}