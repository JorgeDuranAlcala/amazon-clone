import React, { useState, forwardRef } from 'react'
import { useStateValue } from '../../context/stateContext';
import { actionTypes } from '../../reducer'
import './styles.css'


const CheckoutProduct = forwardRef( ({id, title, image, price, rating, onClick, disabled}, ref) => {

   const [state, dispatch] = useStateValue()
   
    const removeItem = () => {           
                dispatch({
                    type: actionTypes.REMOVE_ITEM,
                    id
                })
    }

    return (
        <div className="checkoutProduct" ref={ref} >
            <img src={image} alt="checkoutProduct-img"></img>
            <div className="checkoutProduct__info">
                <h4>{title}</h4>
                <small className="checkoutProduct__price">
                  ${price}
                </small>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill()
                        .map((_, i) => <span role="img" aria-label="star-icon">⭐</span>)
                    }
                </div>
                {
                    !disabled && (
                            <button onClick={removeItem} className="checkoutProduct__btn">
                                Remove From Basket
                            </button>
                        )
                }
            </div>
        </div>
    )
} )

export default CheckoutProduct
