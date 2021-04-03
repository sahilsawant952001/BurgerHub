import React, { Component } from "react";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import { Route,Redirect } from "react-router-dom";
import  ContactData  from "../../containers/CheckOut/ContactData/ContactData";
import { connect } from "react-redux";

class CheckOut extends Component{

    continueHandler = () => {
        this.props.history.push('/CheckOut/ContactData');
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    render(){
            let summary = <Redirect to="/"/>
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            if(this.props.ingridients)
            {
                summary = <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        continue1={this.continueHandler} 
                        cancel1={this.cancelHandler} 
                        ingridients={this.props.ingridients}/>
                    <Route path={this.props.match.path + '/ContactData'} component={()=>{
                    return <ContactData ingridients={this.props.ingridients} price={this.props.total}/>
                    }}/></div>
            }
            return summary
    }
}

const mapStateToProps = state => {
    return {
        ingridients:state.Burger.ingridients,
        total:state.Burger.totalPrice,
        purchased:state.Order.purchased
    };
}



export default connect(mapStateToProps) (CheckOut);


