import React from "react";
import CreditCardPayment from "./components/CreditCardPayment";
import PayPalPayment from "./components/PaypalPayment";

function App() {
  const handlePaymentComplete = () => {
    console.log("Payment complete!");
  };

  return (
    <div>
      <h1>Payment Processing System</h1>
      <CreditCardPayment
        amount={100}
        onPaymentComplete={handlePaymentComplete}
      />
      <PayPalPayment amount={200} onPaymentComplete={handlePaymentComplete} />
    </div>
  );
}

export default App;
