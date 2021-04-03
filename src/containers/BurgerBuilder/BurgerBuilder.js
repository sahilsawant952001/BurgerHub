import React, { Component } from "react";
import Aux from "../../hoc/axl";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as BurgerBuilderActions from "../../store/actions/index";
import axios from "../../AxiosOrders";


class BurgerBuilder extends Component
{
    state = {
        purchasing:false,
    }

    componentDidMount()
    {
        this.props.onInitIngridients();
    }

    purchaseHandler = () => {
        if(this.props.tokenId!==null)
        {
            this.setState({purchasing:true});
        }
        else
        {
            this.props.setRedirectPath('/CheckOut');
            this.props.history.push('/Auth');
        }
    }

    purchaseCanceller = () => {
        this.setState({purchasing:false});
    }

    purchaseContinue = () => {
            this.props.onInitPurchase();
            this.props.history.push('/CheckOut');
    }

    render()
    {
        let spinner = <div>
            <Spinner/>
            <center><h3>Error Occured</h3></center>
        </div>;

        let obj = Object(this.props.ingridients);
        let s = null;
        if(this.state.purchasing)
        s = <OrderSummary total={this.props.total} ingridients={this.props.ingridients} cancel={this.purchaseCanceller} continue={this.purchaseContinue}/>
       
        return (<Aux>
            {this.props.error?spinner:<div><Modal show={this.state.purchasing} modalClose={this.purchaseCanceller}>
                {s}
            </Modal>
            <Burger ingridients={obj} />  
            <BuildControls token={this.props.tokenId} statusOfBtn = {obj} purchase={this.purchaseHandler} totalPrice={this.props.total} addIngridient = {this.props.addIngridientsHandler} removeIngridients={this.props.removeIngridientsHandler}/></div>}
            
        </Aux>)
    }
}

const mapStateToProps = state => {
    return {
        ingridients:state.Burger.ingridients,
        total:state.Burger.totalPrice,
        error:state.Burger.error,
        tokenId:state.Auth.token
    };
}

const mapDispatchToProp = (dispatch) => {
    return{
        addIngridientsHandler : (lable)=> dispatch(BurgerBuilderActions.addIngridient(lable)),
        removeIngridientsHandler : (lable)=> dispatch(BurgerBuilderActions.removeIngridient(lable)),
        onInitIngridients : () => dispatch(BurgerBuilderActions.initIngridients()),
        onInitPurchase : () => dispatch(BurgerBuilderActions.purchaseInit()),
        setRedirectPath : (path) => dispatch(BurgerBuilderActions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(WithErrorHandler(BurgerBuilder,axios));
