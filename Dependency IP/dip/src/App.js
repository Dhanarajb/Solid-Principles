// Abstraction
class NotificationService {
  send(message) {
    throw new Error("Method 'send()' must be implemented.");
  }
}

// Concrete service
class EmailService extends NotificationService {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

// Another concrete service
class SmsService extends NotificationService {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

// Component with dependency injection
function NotificationSender({ service }) {
  const handleSendNotification = () => {
    service.send("Hello World!");
  };

  return <button onClick={handleSendNotification}>Send Notification</button>;
}

// Usage
const emailService = new EmailService();
const smsService = new SmsService();

function App() {
  return (
    <div>
      <h1>Notification System</h1>
      <NotificationSender service={emailService} />
      <NotificationSender service={smsService} />
    </div>
  );
}

export default App;
