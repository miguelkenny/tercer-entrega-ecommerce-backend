import { Router } from 'express'
import Stripe from 'stripe';
import sendInfoEmail from '../Nodemailer/SendEmail.js'
<<<<<<< HEAD

=======
>>>>>>> 8511f8343d7a2ec919e82684da541fce26fd8c2b
const routes = Router()
const stripe = new Stripe(process.env.STRIPE_KEY);

routes.post('/payment', (req, res) => {
<<<<<<< HEAD
=======
    sendInfoEmail(req.body)
>>>>>>> 8511f8343d7a2ec919e82684da541fce26fd8c2b
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: 'usd',
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr)
            } else {
                sendInfoEmail(req.body, sale)
                res.status(200).json(stripeRes)
            }
        }
    )
})

export default routes