import React, { Component } from "react";
import Axl from '../../hoc/axl';
import styles from "../Layout/Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends Component{

    state = {
        visible:false,
    }

    CloseSideDrawerHandler = () =>{
        this.setState({visible:false});
    }

    OpenSideDrawerHandler = () =>{
        this.setState({visible:true});
    }

    render()
    {
        return <Axl>
        <Toolbar click={this.OpenSideDrawerHandler} token={this.props.token}/>
        <SideDrawer open={this.state.visible} handler={this.CloseSideDrawerHandler}  token={this.props.token}/>
        <main className={styles.Content}>{this.props.childern}</main>
        </Axl>
    }
}

const mapStateToProps = (state) => {
    return{
        token:state.Auth.token
    }
}

export default connect(mapStateToProps,null)(Layout);