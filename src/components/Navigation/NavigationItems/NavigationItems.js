import React from "react";
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import style from "../NavigationItems/NavigationItems.module.css";

function NavigationItems(props){
    return  <ul className={style.NavigationItems}>
                <NavigationItem link="/" exact msg="Burger Builder"/>
                {props.token!==null?<NavigationItem link="/Orders" msg="Orders"/>:null}
                {props.token !== null ? <NavigationItem link="/Logout" msg="Logout"/>:<NavigationItem link="/Auth" msg="Authenticate"/>}
            </ul>
}

export default NavigationItems;