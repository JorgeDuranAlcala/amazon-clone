import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "../../context/stateContext";
import { useHistory } from 'react-router-dom'
import { geTotal } from "../../utils/geTotal";

import "./styles.css"

function SubTotal() {

    const [{ bascket }, dispatch] = useStateValue()
    const history = useHistory()
    

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
                value={geTotal(bascket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button type="button" onClick={() => history.push('/payment')} > Procced to Checkout </button>
        </div>
    )
}


export default SubTotal
