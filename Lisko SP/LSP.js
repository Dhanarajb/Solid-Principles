/**
 * Represents a payment method that can be used to process payments.
 * The `processPayment` method must be implemented by concrete payment method classes.
 */
class PaymentMethod {
  /**
   * Processes a payment with the given amount.
   * @param {number} amount - The amount to be processed.
   * @throws {Error} If the `processPayment` method is not implemented.
   */
  processPayment(amount) {
    throw new Error("processPayment method must be implemented");
  }
}

/**
 * Represents a credit card payment method.
 * Implements the `processPayment` method to log the payment processing.
 */
class CreditCard extends PaymentMethod {
  /**
   * Processes a payment with the given amount using a credit card.
   * @param {number} amount - The amount to be processed.
   */
  processPayment(amount) {
    console.log(`Processing ${amount} payment with credit card.`);
  }
}

/**
 * Represents a PayPal payment method.
 * Implements the `processPayment` method to log the payment processing.
 */
class PayPal extends PaymentMethod {
  /**
   * Processes a payment with the given amount using PayPal.
   * @param {number} amount - The amount to be processed.
   */
  processPayment(amount) {
    console.log(`Processing ${amount} payment with PayPal.`);
  }
}

/**
 * Processes a payment using the provided payment method.
 * @param {PaymentMethod} paymentMethod - The payment method to be used.
 * @param {number} amount - The amount to be processed.
 */
function processPayment(paymentMethod, amount) {
  paymentMethod.processPayment(amount);
}
// PaymentMethod.js
class PaymentMethod {
  processPayment(amount) {
    throw new Error("processPayment method must be implemented");
  }
}

// CreditCard.js
class CreditCard extends PaymentMethod {
  processPayment(amount) {
    console.log(`Processing $${amount} payment with credit card.`);
  }
}

// PayPal.js
class PayPal extends PaymentMethod {
  processPayment(amount) {
    console.log(`Processing $${amount} payment with PayPal.`);
  }
}

// app.js
function processPayment(paymentMethod, amount) {
  paymentMethod.processPayment(amount);
}

// Example usage
const creditCardPayment = new CreditCard();
const payPalPayment = new PayPal();

processPayment(creditCardPayment, 100); // Outputs: Processing $100 payment with credit card.
processPayment(payPalPayment, 200); // Outputs: Processing $200 payment with PayPal.
