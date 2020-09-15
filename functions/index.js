const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')
("sk_test_51HQOGWBc0UiLaQI9S9Z9YugUbKbAYeHflGqmfSqpZBF7FfSLARAXaP4whttAetsQ0bHKRFxaNIcPBubDeQkmA4VC00Vpd8yyJL")


// API

// -- App config
const app = express()

// - middlewares
app.use(cors({ origin: true
 }))
app.use(express.json())

// -- API routes
app.get('/', (req, res) => res.status(200).send("hello world broh"))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    try {

        const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: 'usd'
        })
        
        res.status(201).send({
            clientSecret: paymentIntent.client_secret
        })
    } catch(err) {
        console.log(err)
    }
}) 

// - Listen Command
exports.api = functions.https.onRequest(app)

// ENDPOINT http://localhost:5001/clone-3f8c7/us-central1/api