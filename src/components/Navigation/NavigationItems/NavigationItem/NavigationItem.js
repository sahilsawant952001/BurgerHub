import React from "react";
import style from "../NavigationItem/NavigationItem.module.css";
import { NavLink } from "react-router-dom";

function NavigationItem(props){
    return <div>
        <ul>
            <li className={style.NavigationItem}>
                <NavLink 
                    to={props.link}
                    exact={props.exact}
                    activeClassName={style.active}>
                {props.msg}
                </NavLink>  
            </li>
        </ul>
    </div>
}

export default NavigationItem;