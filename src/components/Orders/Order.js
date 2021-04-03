import React from "react";
import style from "../../components/Orders/Order.module.css";

function Order(props){
    
    const orders = props.list.map(data=>{
            return <div key={Math.random()} className={style.Order}>
                    <h3>INGRIDIENTS</h3>
                    <ul>
                        <li>Salad : {data.i.ingridients.salad}</li>
                        <li>Cheese : {data.i.ingridients.cheese}</li>
                        <li>Bacon : {data.i.ingridients.bacon}</li>
                        <li>Meat : {data.i.ingridients.meat}</li> 
                    </ul>
                    <p>Price : {parseFloat(data.i.price).toFixed(2)}</p>
                    </div>;
        })
    

    return orders;
}

export default Order;