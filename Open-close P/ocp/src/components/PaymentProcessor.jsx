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
