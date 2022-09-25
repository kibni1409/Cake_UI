import React, {useEffect} from "react";
import Order from "./Order";

const OrderAPI = (props) =>{

    useEffect (() => {
        props.setOrderThunk();
    },[])

    return (
       <Order
           totalCount={props.totalCount}
           addOrderThunk={props.addOrderThunk}
           orders={props.orders}
       />
    )
}

export default OrderAPI;