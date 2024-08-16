// Scenario: You have a system that manages user profiles and sends notifications. According to SRP, these should be separated into different classes or modules.

// UserManager.js - Responsible for user data management
class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`User added: ${user.name}`);
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }
}

// NotificationService.js - Responsible for sending notifications
class NotificationService {
  sendEmail(user, message) {
    console.log(`Sending email to ${user.email} with message: ${message}`);
  }

  sendSms(user, message) {
    console.log(`Sending SMS to ${user.phone} with message: ${message}`);
  }
}

// Usage
const userManager = new UserManager();
const notificationService = new NotificationService();

const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "123-456-7890",
};
userManager.addUser(user);
notificationService.sendEmail(user, "Welcome to our service!");
