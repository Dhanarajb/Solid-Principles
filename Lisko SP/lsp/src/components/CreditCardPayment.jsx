/**
 * A React component that renders a credit card payment form.
 *
 * @param {object} props - The component props.
 * @param {number} props.amount - The amount to be paid.
 * @param {function} props.onPaymentComplete - A callback function to be called when the payment is complete.
 * @returns {JSX.Element} - The credit card payment component.
 */
import React from 'react';
import PaymentMethod from './PaymentMethods';

const CreditCardPayment = ({ amount, onPaymentComplete }) => {
    const processPayment = (amount) => {
        // Logic for processing payment with a credit card
        console.log(`Processing $${amount} payment with credit card`);
    };

    return (
        <div>
            <h3>Credit Card Payment</h3>
            <PaymentMethod paymentMethod={{ processPayment }} amount={amount} onPaymentComplete={onPaymentComplete} />
        </div>
    );
};
export default CreditCardPayment;