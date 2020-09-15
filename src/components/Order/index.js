import React from 'react'
import moment from 'moment';
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from '../CheckoutProduct'
import './styles.css'

function Order({ order: { id, data: { created, basket, amount } } }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(created).format("MMMM Do YYYY, h:mm a")}</p>
            <p className="order__id">
                <small>{ id }</small>
            </p>
            {
                basket?.map(product => <CheckoutProduct key={product.id} disabled {...product} />)
            }
              <CurrencyFormat
                renderText={(value) => (
                    <>
                         <p className="order__amount">
                            Total: {value}
                        </p>
                       
                    </>
                )}
                decimalScale={2}
                value={amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
