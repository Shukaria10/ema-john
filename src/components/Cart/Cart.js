import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalPrice =cart.reduce((total,prd) => total + prd.price,0);
    
    let shipping=0;
    if (totalPrice>15)
    {
        shipping = 4.99;
    }
    else if(totalPrice>0)
    {
        shipping = 12.99;
    }
    else if(totalPrice>35)
    {
        shipping =0;
    }
    const tax = (totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Item Orderd: {cart.length}</h5>
            <p>Product Price :{formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost :{shipping}</small></p>
    <p><small>Tax:{tax}</small></p>
            <p>Total:{grandTotal}</p>
    
        </div>
    );
};

export default Cart;