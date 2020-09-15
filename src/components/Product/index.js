import React from 'react'
import { useStateValue } from "../../context/stateContext";
import './Product.css'
import { actionTypes } from '../../reducer';

function Product({id, title, price, image, rating}) {

    const [state, dispatch] = useStateValue()

    const addToBasket = e => {
        dispatch({
            type: actionTypes.ADD_ITEM,
            item: {
                id,
                title,
                price,
                image,
                rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title&&title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price&&price}</strong>
                </p> 
                <div className="product__rating">
                    { Array(rating).fill().map((_, i) => <p key={i} role="img">⭐</p>) }
                </div> 
            </div>
            <img src={image} alt="product image" />
            <button type="button" onClick={addToBasket} >
                Add Product
            </button>
        </div>
    )


}

export default Product
