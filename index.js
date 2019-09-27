// Type String
function tsStr(person) {
    return "Hello," + person;
}
;
var user = "Jane User";
document.body.innerHTML = tsStr(user);
// Type number
function tsNum(num) {
    return "Hello," + num;
}
;
var num = 1;
document.body.innerHTML = tsNum(num);
// 
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
    return Student;
}());
;
;
function greeter(person) {
    console.log(person);
    return "Hello," + person.firstName + " " + person.lastName + "===" + person.middleInitial;
}
;
// let pUser = {firstName:"Jane",lastName:"User"};
var pUser = new Student("Jane", "M.", "User");
console.log(pUser);
document.body.innerHTML = greeter(pUser);
