import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "../../context/stateContext";
import "./styles.css"

function SubTotal() {

     const [{ bascket }, dispatch] = useStateValue()

     //const totalBasketValue = bascket.reduce((a,b) => a.price + b.price , 0)

        let totalBasketValue = bascket.length > 1 ? bascket.map((item) => item.price).reduce((a,b) => a + b) : bascket[0]?.price

    

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                         <p>
                Subtotal ({bascket.length} items): <strong className="subtotal_count" >{value}</strong>
                        </p>
                        <div className="checkout__gift">
                            <input type="checkbox" />
                            <p>This order contains a gif</p>
                        </div> 
                    </>
                )}
                decimalScale={2}
                value={totalBasketValue}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button type="button"> Procced to Checkout </button>
        </div>
    )
}

/* 
        <currencyFormat
            render={(value) = (
                <>

                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
    */

export default SubTotal
