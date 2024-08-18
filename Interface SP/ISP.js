class Workable {
  work() {
    console.log("Working...");
  }
}

class Eatable {
  eat() {
    console.log("Eating...");
  }
}

class Sleepable {
  sleep() {
    console.log("Sleeping...");
  }
}

class MeetingAttender {
  attendMeeting() {
    console.log("Attending a meeting...");
  }
}

class OfficeWorker {
  constructor() {
    this.workable = new Workable();
    this.eatable = new Eatable();
    this.meetingAttender = new MeetingAttender();
  }

  performDuties() {
    this.workable.work();
    this.eatable.eat();
    this.meetingAttender.attendMeeting();
  }
}
console.log("Office Worker:");
const officeWorker = new OfficeWorker();
officeWorker.performDuties();
// Output:
// Working...
// Eating...
// Attending a meeting...

class RobotWorker {
  constructor() {
    this.workable = new Workable();
    this.sleepable = new Sleepable();
  }

  performDuties() {
    this.workable.work();
    this.sleepable.sleep();
  }
}
console.log("Robot Worker:");
const robotWorker = new RobotWorker();
robotWorker.performDuties();
// Output:
// Working...
// Sleeping...
