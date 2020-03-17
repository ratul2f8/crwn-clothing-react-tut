import React from"react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_yNt8LJimDDRqlJBVwC5hGrYi00LW7kOEMy'
    
    const onToken = token => {
        alert("Your payment is succesfull")
        console.log( token )
    }

    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'CRWN Cloting Ltd.'
        shippingAddress
        billingAddress
        description = {`Your total amount is : $${price}`}
        image = 'https://sendeyo.com/up/d/f3eb2117da'
        token = {onToken}
        amount = { priceForStripe }
        panelLabel = 'Pay Now'
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton