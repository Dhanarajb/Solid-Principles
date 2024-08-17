/**
 * A React component that renders a payment button.
 * 
 * @param {object} props - The component props.
 * @param {function} props.processPayment - A function to be called when the button is clicked, taking the `amount` as an argument.
 * @param {number} props.amount - The payment amount to be passed to the `processPayment` function.
 * @param {string} props.label - The label to be displayed on the button.
 * @returns {React.ReactElement} - A React element representing the payment button.
 */
import React from 'react';

const PaymentButton = ({ processPayment, amount, label }) => {
    return <button onClick={() => processPayment(amount)}>{label}</button>;
};

export default PaymentButton;
