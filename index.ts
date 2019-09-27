// Type String
function tsStr(person:string) {
	return "Hello," + person;
};

let user = "Jane User";

document.body.innerHTML = tsStr(user);

// Type number
function tsNum(num:number) {
	return "Hello," + num;
};

let num = 1;

document.body.innerHTML = tsNum(num);


// 

class Student{
	fullName:string;
	constructor(public firstName,public middleInitial, public lastName){
		this.fullName = firstName + "" + middleInitial + "" +lastName;
	}
};
interface Person{
	firstName:string,
	lastName:string,
	middleInitial:string,
};

function greeter(person:Person) {
	console.log(person)
	return "Hello,"+person.firstName+" "+person.lastName+"==="+person.middleInitial;
};

// let pUser = {firstName:"Jane",lastName:"User"};
let pUser = new Student("Jane", "M.", "User");
console.log(pUser)

document.body.innerHTML = greeter(pUser);





