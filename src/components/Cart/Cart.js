import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total += product.price;
        shipping += product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));  //use parseFloat since toFixed returns a string instead of number.
    const grandTotal = total + shipping + tax;
    

    return (
        <div className="cart">
                <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>TAX: ${tax} </p>
            <h5>Grand Total: ${grandTotal} </h5>
        </div>
    );
};

export default Cart;