// Demo Start
/* Boolen */ 
let isDone:boolean = true;

/* 数值*/ 
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/* 字符串*/
let name1:string = "bob";
name1 = "smith"; 
let name2: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;

/* 数组*/ 
let list:number[] = [1,2,3];
let list1:Array<number> = [1,2,3];

/*元组
	规定数组中每一个值得类型
*/ 
let x:[string,number,boolean];
x = ['ADFQWER',10,true];
console.log(x[0].substr(1));

x[0] = 'world';
console.log(x[1].toString());

// 枚举
enum color {red=1,green,blue};
let c:color = color.blue;
let colorName:string = color[2];
console.log(colorName);

let notSure:any = 4;
notSure = "maybe a string instead";
notSure = false;
// notSure.ifItExists();
// notSure.toFixed();
console.log(notSure)
let prettySure: Object = 4;

let list2:any[] = [1,"ASDD", 21];

function fn():void {
	// return "123";
	console.log("Void")
}
fn()
// console.log(fn())


// let unusable:void = "Hello";   //Error
let unusable1:void = undefined;   //OK
let unusable2:void = null;   //OK
// let num:number = undefined;

function error(msg:string):never {
	// throw new Error(msg);
};
error("Error");

function fail() {
	return error("Something failed");
};

function infiniteLoop():never {
	// body...
	while(true){

	}
};

// declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

function f(shouldInitialize) {
	if(shouldInitialize){
		var x = 10;
	}
	return x;
}
console.log(f(true));

function sumMatrix(matrix: number[][]) {
	console.log(...matrix)
    var sum = 0;
    // for (var i = 0; i < matrix.length; i++) {
    //     var currentRow = matrix[i];
    //     for (var i = 0; i < currentRow.length; i++) {
    //         sum += currentRow[i];
    //     }
    // }

    // return sum;
}
console.log(sumMatrix([1,2,3]));


//Demo End