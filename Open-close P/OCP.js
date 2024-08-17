/**
 * The `PaymentMethod` class is an abstract base class that defines the interface for processing payments. Subclasses of `PaymentMethod` must implement the `processPayment()` method to handle the specific logic for their payment method.
 *
 * The `CreditCardPayment`, `PayPalPayment`, and `BitcoinPayment` classes are concrete implementations of the `PaymentMethod` interface, each handling the logic for their respective payment methods.
 *
 * The `PaymentButton` component is a reusable UI component that renders a button and calls the `processPayment()` method of the provided `PaymentMethod` instance when the button is clicked.
 *
 * The `PaymentProcessor` component is the main entry point that creates instances of the different payment methods and renders the `PaymentButton` components for each one.
 */
import React from "react";

// Abstract base class for payment methods
class PaymentMethod {
  processPayment(amount) {
    throw new Error("processPayment() must be implemented in subclasses");
  }
}

// CreditCardPayment class
class CreditCardPayment extends PaymentMethod {
  processPayment(amount) {
    console.log(`Processing credit card payment of $${amount}`);
    // Logic for processing credit card payment
  }
}

// PayPalPayment class
class PayPalPayment extends PaymentMethod {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
    // Logic for processing PayPal payment
  }
}

// BitcoinPayment class
class BitcoinPayment extends PaymentMethod {
  processPayment(amount) {
    console.log(`Processing Bitcoin payment of $${amount}`);
    // Logic for processing Bitcoin payment
  }
}

// PaymentButton component
const PaymentButton = ({ paymentMethod, amount, label }) => {
  return (
    <button onClick={() => paymentMethod.processPayment(amount)}>
      {label}
    </button>
  );
};

// PaymentProcessor component
function PaymentProcessor() {
  const creditCardPayment = new CreditCardPayment();
  const payPalPayment = new PayPalPayment();
  const bitcoinPayment = new BitcoinPayment();

  return (
    <div>
      <PaymentButton
        paymentMethod={creditCardPayment}
        amount={100}
        label="Pay with Credit Card"
      />
      <PaymentButton
        paymentMethod={payPalPayment}
        amount={100}
        label="Pay with PayPal"
      />
      <PaymentButton
        paymentMethod={bitcoinPayment}
        amount={100}
        label="Pay with Bitcoin"
      />
    </div>
  );
}

export default PaymentProcessor;
