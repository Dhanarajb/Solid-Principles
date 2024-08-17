/**
 * A React component that renders a PayPal payment method.
 *
 * @param {object} props - The component props.
 * @param {number} props.amount - The amount to be paid.
 * @param {function} props.onPaymentComplete - A callback function to be called when the payment is complete.
 * @returns {JSX.Element} - The PayPal payment component.
 */

import React from 'react';
import PaymentMethod from './PaymentMethods';

const PayPalPayment = ({ amount, onPaymentComplete }) => {
    const processPayment = (amount) => {
        // Logic for processing payment with PayPal
        console.log(`Processing $${amount} payment with PayPal`);
    };

    return (
        <div>
            <h3>PayPal Payment</h3>
            <PaymentMethod paymentMethod={{ processPayment }} amount={amount} onPaymentComplete={onPaymentComplete} />
        </div>
    );
};
export default PayPalPayment;