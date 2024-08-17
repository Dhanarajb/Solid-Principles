/**
 * Renders a payment method component that allows the user to complete a payment.
 *
 * @param {Object} paymentMethod - An object representing the payment method, with a `processPayment` function.
 * @param {number} amount - The amount to be paid.
 * @param {function} onPaymentComplete - A callback function to be called when the payment is complete.
 * @returns {JSX.Element} - A React component that renders a button to initiate the payment.
 */
import React from 'react';
import PropTypes from 'prop-types';

// PaymentMethod component
const PaymentMethod = ({ paymentMethod, amount, onPaymentComplete }) => {
    const handlePayment = () => {
        paymentMethod.processPayment(amount);
        onPaymentComplete();
    };

    return (
        <div>
            <button onClick={handlePayment}>Pay ${amount}</button>
        </div>
    );
};

PaymentMethod.propTypes = {
    paymentMethod: PropTypes.shape({
        processPayment: PropTypes.func.isRequired,
    }).isRequired,
    amount: PropTypes.number.isRequired,
    onPaymentComplete: PropTypes.func.isRequired,
};

export default PaymentMethod;
