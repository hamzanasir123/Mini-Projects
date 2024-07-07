class Student {
    static idCounter: number = 10000;

    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.id = Student.idCounter++;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }

    enrollCourse(course: string) {
        this.courses.push(course);
    }

    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }

    payTuition(amount: number) {
        this.balance -= amount;
        console.log(`Payment of $${amount} received for ${this.name}`);
        this.viewBalance();
    }

    showStatus() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        this.viewBalance();
    }
}

class StudentManagementSystem {
    students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(name: string) {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        console.log(`${name} added to the system with ID ${newStudent.id}`);
    }

    findStudentById(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }

    enrollStudent(id: number, course: string) {
        const student = this.findStudentById(id);
        if (student) {
            student.enrollCourse(course);
            console.log(`${student.name} enrolled in ${course}`);
        } else {
            console.log(`Student with ID ${id} not found`);
        }
    }

    payTuition(id: number, amount: number) {
        const student = this.findStudentById(id);
        if (student) {
            student.payTuition(amount);
        } else {
            console.log(`Student with ID ${id} not found`);
        }
    }

    showStatus(id: number) {
        const student = this.findStudentById(id);
        if (student) {
            student.showStatus();
        } else {
            console.log(`Student with ID ${id} not found`);
        }
    }
}

// Example Usage
const sms = new StudentManagementSystem();

sms.addStudent("Hamza");
sms.addStudent("Ameen");

sms.enrollStudent(10000, "Math");
sms.enrollStudent(10001, "Science");

sms.payTuition(10000, 500);
sms.payTuition(10001, 600);

sms.showStatus(10000);
sms.showStatus(10001);