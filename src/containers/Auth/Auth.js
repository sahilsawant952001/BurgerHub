import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Auth.module.css";
import * as Actions from "../../store/actions/index";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";

class Auth extends Component{

    state = {
        email:"",
        password:"",
        isSignUp:true
    }

    componentDidMount(){
        if(!this.props.building && this.props.authRedirectPath!=="/")
        {
            this.props.onSetRedirectPath();
        }
    }

    passwordChangeHandler = (event) => {
        this.setState({password:event.target.value});
    }

    emailChangeHandler = (event) => {
        this.setState({email:event.target.value});
    }

    signUpStateHandler = () => {
        this.setState(prev => {
            return{
                isSignUp:!prev.isSignUp
            }
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmitHandler(this.state.email,this.state.password,this.state.isSignUp);        
    }


    render()
    {
        let authRedirect = null;
       
        if(this.props.isAuthenticated)
        {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        let form = <div className={style.Auth}>
                        {authRedirect}
                        {this.props.error?<div><h3>{this.props.error}</h3><br/></div>:null}
                        
                        <form onSubmit={this.submitHandler}>
                            <input className="form-control" autoComplete="off" type="email" name="email" onChange={this.emailChangeHandler} placeholder="Email" required></input>
                            <input className="form-control" autoComplete="off" type="text" name="password" onChange={this.passwordChangeHandler} placeholder="Password" required></input>
                            <button className="btn btn-outline-dark btn-long">Submit</button>
                        </form>
                        <br/>
                        <Button btntype="Success" msg={this.state.isSignUp?'SWITCH TO SIGNUP':'SWITCH TO SIGNIN'} clicked={this.signUpStateHandler}/>
                    </div>

        if(this.props.loading===true)
            form = <Spinner/>
     
        return form;
    }
}

const mapStateToProps = state => {
    return{
        loading:state.Auth.loading,
        error:state.Auth.error,
        isAuthenticated: state.Auth.token !== null,
        building:state.Burger.building,
        authRedirectPath:state.Auth.authRedirectPath,
        token:state.Auth.token
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitHandler : (email,password,method) => dispatch(Actions.auth(email,password,method)),
        onSetRedirectPath : () => dispatch(Actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);