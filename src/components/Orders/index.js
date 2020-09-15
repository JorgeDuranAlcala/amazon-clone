import React, { useEffect, useState } from 'react'
import db from '../../firebase'
import { useStateValue } from "../../context/stateContext";
import Order from '../Order';
import "./styles.css";


function Orders() {

    const [{ user }] = useStateValue()
    const [orders, setorders] = useState([])

    useEffect(() => {
        if (user) {

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setorders( 
                        snapshot.docs.map(doc => ({
                                id: doc.id,
                                data: doc.data()
                            })) 
                        )
                })
                
        } else {
            setorders([])
        }
        
    }, [user])
    
    console.log(orders)
    
    return (
        <div className="orders">
            <h1>Your Ordes</h1>
            <div className="orders__container" >
                { orders && orders
                        .map(order => ( 
                            <Order key={order.id} order={order} />
                            )) 
                }
            </div>
        </div>
    )
}

export default Orders
