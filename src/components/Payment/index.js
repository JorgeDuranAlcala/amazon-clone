import React, { useState, useEffect } from 'react'
import './styles.css'
import BasketList from "../BasketList";
import { Link, useHistory  } from 'react-router-dom'
import { useStateValue } from '../../context/stateContext';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from "react-currency-format";
import Axios from '../../api/axios';
import { db } from '../../firebase'
import { actionTypes } from '../../reducer';
import { geTotal } from '../../utils/geTotal';

function Payment() {

    const [{ bascket, user }, dispatch] = useStateValue();
    const [totalBasketValue, setTotalBascketValue] = useState(0)
    const history = useHistory()
    const elements = useElements();
    const stripe = useStripe();

    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)


    useEffect(() => {
       // let total = bascket.length > 0 ? bascket.map((item) => item.price).reduce((a,b) => a + b, 0) : 0
        //setTotalBascketValue(total)

        const getClientSecret = async () => {
            // Generate the special stripe secrect which allows us to charge
            const response = await Axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${geTotal(bascket) * 100}`
            })

            setClientSecret(response.data.clientSecret)

        }
        getClientSecret()
    }, [bascket])

    console.log("YOUR SECRET IS >>>>", clientSecret)
    
    const handleSubmit = async event => {
        event.preventDefault();
        setProcessing(true);
        try {
            
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then((response) => {
            let paymentInt = response.paymentIntent
            // paymentIntent = payment confirmation
            
                const orderData = {
                    basket: bascket,
                    amount: paymentInt.amount,
                    created: paymentInt.created
                }


                db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentInt.id)
                .set(Object.assign({}, orderData ))
               


            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: actionTypes.EMPTY_BASKET
            })

            history.replace('/orders')
        })
        } catch (error) {
            throw new Error(error)
        }

    }

    const handleChange = e => {
        // listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

    /* bascket.length > 0 ? bascket.map((item) => item.price).reduce((a,b) => a + b, 0) : 0 */



    return (
        <div className="payment">
            <div className="payment__container">
                <h1> Checkout  <Link className="link" to="/checkout"> ({bascket.length})items</Link> </h1>
                {/* Payment section -- adress */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* Payment section -- Priview */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__products">
                        <BasketList basket={bascket} />
                    </div>
                </div>
                {/* Payment section -- Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Methods</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                         <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={geTotal(bascket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button 
                                    className="payment__btn"
                                    disabled={processing || disabled || succeeded}
                                    type="submit"
                                    >
                                    <span>{ 
                                        processing ? <p>Proccessing</p> : "Buy Now"
                                    }</span>
                                </button>
                            </div>
                        </form>
                        <div>{error}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
