import React from 'react'
import CheckoutProduct from '../CheckoutProduct'
import FlipMove from "react-flip-move"



function BasketList({ basket }) {
    return (
        <FlipMove>
            { basket?.map((product, i) => <CheckoutProduct key={product.id} {...product} />) }
        </FlipMove>
    )
}

export default BasketList
