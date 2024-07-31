import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({element}) {
    const cart = useSelector(state => state.cart.cart);
    console.log("Cart:" , cart)
    return cart.length > 0 ? element : <Navigate to={"/"}/>
};

export default ProtectedRoutes