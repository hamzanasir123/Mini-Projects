var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Student.idCounter++;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    Student.prototype.enrollCourse = function (course) {
        this.courses.push(course);
    };
    Student.prototype.viewBalance = function () {
        console.log("Balance for ".concat(this.name, ": $").concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("Payment of $".concat(amount, " received for ").concat(this.name));
        this.viewBalance();
    };
    Student.prototype.showStatus = function () {
        console.log("Student ID: ".concat(this.id));
        console.log("Name: ".concat(this.name));
        console.log("Courses Enrolled: ".concat(this.courses.join(', ')));
        this.viewBalance();
    };
    Student.idCounter = 10000;
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function (name) {
        var newStudent = new Student(name);
        this.students.push(newStudent);
        console.log("".concat(name, " added to the system with ID ").concat(newStudent.id));
    };
    StudentManagementSystem.prototype.findStudentById = function (id) {
        return this.students.find(function (student) { return student.id === id; });
    };
    StudentManagementSystem.prototype.enrollStudent = function (id, course) {
        var student = this.findStudentById(id);
        if (student) {
            student.enrollCourse(course);
            console.log("".concat(student.name, " enrolled in ").concat(course));
        }
        else {
            console.log("Student with ID ".concat(id, " not found"));
        }
    };
    StudentManagementSystem.prototype.payTuition = function (id, amount) {
        var student = this.findStudentById(id);
        if (student) {
            student.payTuition(amount);
        }
        else {
            console.log("Student with ID ".concat(id, " not found"));
        }
    };
    StudentManagementSystem.prototype.showStatus = function (id) {
        var student = this.findStudentById(id);
        if (student) {
            student.showStatus();
        }
        else {
            console.log("Student with ID ".concat(id, " not found"));
        }
    };
    return StudentManagementSystem;
}());
// Example Usage
var sms = new StudentManagementSystem();
sms.addStudent("Hamza");
sms.addStudent("Ameen");
sms.enrollStudent(10000, "Math");
sms.enrollStudent(10001, "Science");
sms.payTuition(10000, 500);
sms.payTuition(10001, 600);
sms.showStatus(10000);
sms.showStatus(10001);
