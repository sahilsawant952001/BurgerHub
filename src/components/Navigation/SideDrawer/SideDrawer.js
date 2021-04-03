import React from "react";
import Logo from "../../Logo/Logo";
import style from "../SideDrawer/SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/axl";
import BackDrop from "../../UI/BackDrop/BackDrop";

function SideDrawer(props)
{
    let Classes = [style.SideDrawer,style.Close];

    if(props.open)
    {
        Classes = [style.SideDrawer,style.Open];
    }

    return <Aux>
                <BackDrop show={props.open} clicked={props.handler}/>
                <div className={Classes.join(' ')} onClick={props.handler}>
                <div className={style.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems token={props.token}/>
                </nav>
                </div>
            </Aux>
}

export default SideDrawer;