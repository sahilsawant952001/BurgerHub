import React,{Component} from "react";
import Layout from "../src/components/Layout/Layout";
import BurgerBuilder from "../src/containers/BurgerBuilder/BurgerBuilder"
import Axl from "./hoc/axl";
import CheckOut from '../src/containers/CheckOut/CheckOut';
import { Route,Switch,withRouter,Redirect } from "react-router-dom";
import Orders from '../src/containers/Orders/Orders';
import Auth from "./containers/Auth/Auth";
import Logout from "../src/containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as Actions from "./store/actions/index";

class App extends Component{

  componentDidMount()
  {
    this.props.onTryAutoSignUp();
  }

  render(){

    let routes = <Switch>
                  <Route path="/Auth" component={Auth} />
                  <Route path="/" exact component={BurgerBuilder} />
                  <Redirect to="/" />
              </Switch>
  
    if(this.props.token!==null)
    {
      routes =  <Switch>
                    <Route path="/Auth" component={Auth} />
                    <Route path="/CheckOut" component={CheckOut} />
                    <Route path="/Orders" component={Orders} />
                    <Route path="/Logout" component={Logout} />
                    <Route path="/" exact component={BurgerBuilder} />
                    <Redirect to="/" />
                </Switch>
    }
    return (
      <Axl>
        <Layout/>
        {routes}
      </Axl>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    token:state.Auth.token
  }
}

const mapDispatchToProp = (dispatch) => {
  return{
    onTryAutoSignUp : () => dispatch(Actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProp)(App));