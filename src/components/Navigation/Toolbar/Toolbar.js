import React from "react";
import style from "../Toolbar/Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Toggler from "../SideDrawer/Toggler/Toggler";

function Toolbar(props)
{
    return <header className={style.Toolbar}>
        <Logo/>
        <Toggler clicked={props.click}/>
        <nav className={style.DesktopOnly}>
            <NavigationItems  token={props.token}/>
        </nav>
    </header>
}

export default Toolbar;