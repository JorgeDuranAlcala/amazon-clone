import React from 'react'
import "./styles.css"
import SubTotal from '../SubTotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://image.shutterstock.com/image-vector/iced-latte-banner-milk-pouring-600w-1121460839.jpg" alt="add" />
                <h2 className="checkout__title">
                    Your shopping bascket
                </h2>
            </div>
            <div className="checkout__right">
                <SubTotal/>
            </div>
        </div>
    )
}

export default Checkout
