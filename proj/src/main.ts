import {sayHello} from "./greet";

// console.log(sayHello("TypeScript"));

// function hello(compiler:string) {
// 	console.log(`Hello from ${compiler}`);
// };

// hello("TypeScript");

function showHello(divName:string,name:string) {
	const elt = document.getElementById(divName);
	elt.innerText = sayHello(name);
};

showHello("greeting","TypeScript");