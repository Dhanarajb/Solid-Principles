/**
 * The `PaymentProcessor` component is responsible for rendering two payment buttons, one for credit card and one for PayPal.
 * It uses the `processCreditCardPayment` and `processPayPalPayment` functions from the respective payment modules to handle the payment processing.
 * The `PaymentButton` component is used to render each payment button, passing the appropriate payment processing function and other necessary props.
 */
import React from 'react';
import PaymentButton from './PaymentButton';
import { processCreditCardPayment } from '../components/payments/CreditCardPayment';
import { processPayPalPayment } from '../components/payments/PaypalPayment';

function PaymentProcessor() {
    return (
        <div>
            <PaymentButton processPayment={processCreditCardPayment} amount={100} label="Pay with Credit Card" />
            <PaymentButton processPayment={processPayPalPayment} amount={100} label="Pay with PayPal" />
        </div>
    );
}

export default PaymentProcessor;
