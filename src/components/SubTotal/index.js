import React from 'react'
import "./styles.css"

function SubTotal() {
    return (
        <div className="subtotal">
            <p>
                Subtotal (0 items): <strong className="subtotal_count" >$400</strong>
            </p>
            <div className="checkout__gift">
                <input type="checkbox" />
                <p>This order contains a gif</p>
            </div>
            <button type="button">
                Procced to Checkout
                </button>
        </div>
    )
}

export default SubTotal
