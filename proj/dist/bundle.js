(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Demo Start
/* Boolen */
var isDone = true;
/* 数值*/
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
/* 字符串*/
var name1 = "bob";
name1 = "smith";
var name2 = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name + ".\n\nI'll be " + (age + 1) + " years old next month.";
/* 数组*/
var list = [1, 2, 3];
var list1 = [1, 2, 3];
/*元组
    规定数组中每一个值得类型
*/
var x;
x = ['ADFQWER', 10, true];
console.log(x[0].substr(1));
x[0] = 'world';
console.log(x[1].toString());
// 枚举
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
;
var c = color.blue;
var colorName = color[2];
console.log(colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// notSure.ifItExists();
// notSure.toFixed();
console.log(notSure);
var prettySure = 4;
var list2 = [1, "ASDD", 21];
function fn() {
    // return "123";
    console.log("Void");
}
fn();
// console.log(fn())
// let unusable:void = "Hello";   //Error
var unusable1 = undefined; //OK
var unusable2 = null; //OK
// let num:number = undefined;
function error(msg) {
    // throw new Error(msg);
}
;
error("Error");
function fail() {
    return error("Something failed");
}
;
function infiniteLoop() {
    // body...
    while (true) {
    }
}
;
// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f(true));
function sumMatrix(matrix) {
    console.log.apply(console, matrix);
    var sum = 0;
    // for (var i = 0; i < matrix.length; i++) {
    //     var currentRow = matrix[i];
    //     for (var i = 0; i < currentRow.length; i++) {
    //         sum += currentRow[i];
    //     }
    // }
    // return sum;
}
console.log(sumMatrix([1, 2, 3]));
//Demo End
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello Form " + name;
}
exports.sayHello = sayHello;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
// console.log(sayHello("TypeScript"));
// function hello(compiler:string) {
// 	console.log(`Hello from ${compiler}`);
// };
// hello("TypeScript");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
;
showHello("greeting", "TypeScript");
},{"./greet":2}]},{},[3,1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGVtby50cyIsInNyYy9ncmVldC50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsYUFBYTtBQUNiLFlBQVk7QUFDWixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUM7QUFFMUIsT0FBTztBQUNQLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztBQUMzQixJQUFJLFVBQVUsR0FBVyxNQUFNLENBQUM7QUFDaEMsSUFBSSxhQUFhLEdBQVcsRUFBTSxDQUFDO0FBQ25DLElBQUksWUFBWSxHQUFXLEdBQUssQ0FBQztBQUVqQyxRQUFRO0FBQ1IsSUFBSSxLQUFLLEdBQVUsS0FBSyxDQUFDO0FBQ3pCLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDaEIsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDO0FBQzNCLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztBQUNyQixJQUFJLFFBQVEsR0FBVyx1QkFBc0IsSUFBSSxzQkFFdEMsR0FBRyxHQUFHLENBQUMsNEJBQXlCLENBQUM7QUFFNUMsT0FBTztBQUNQLElBQUksSUFBSSxHQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM1QixJQUFJLEtBQUssR0FBaUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWxDOztFQUVFO0FBQ0YsSUFBSSxDQUF5QixDQUFDO0FBQzlCLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFN0IsS0FBSztBQUNMLElBQUssS0FBd0I7QUFBN0IsV0FBSyxLQUFLO0lBQUUsK0JBQUssQ0FBQTtJQUFDLG1DQUFLLENBQUE7SUFBQyxpQ0FBSSxDQUFBO0FBQUEsQ0FBQyxFQUF4QixLQUFLLEtBQUwsS0FBSyxRQUFtQjtBQUFBLENBQUM7QUFDOUIsSUFBSSxDQUFDLEdBQVMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN6QixJQUFJLFNBQVMsR0FBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV2QixJQUFJLE9BQU8sR0FBTyxDQUFDLENBQUM7QUFDcEIsT0FBTyxHQUFHLHdCQUF3QixDQUFDO0FBQ25DLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDaEIsd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3BCLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztBQUUzQixJQUFJLEtBQUssR0FBUyxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFakMsU0FBUyxFQUFFO0lBQ1YsZ0JBQWdCO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDcEIsQ0FBQztBQUNELEVBQUUsRUFBRSxDQUFBO0FBQ0osb0JBQW9CO0FBR3BCLHlDQUF5QztBQUN6QyxJQUFJLFNBQVMsR0FBUSxTQUFTLENBQUMsQ0FBRyxJQUFJO0FBQ3RDLElBQUksU0FBUyxHQUFRLElBQUksQ0FBQyxDQUFHLElBQUk7QUFDakMsOEJBQThCO0FBRTlCLFNBQVMsS0FBSyxDQUFDLEdBQVU7SUFDeEIsd0JBQXdCO0FBQ3pCLENBQUM7QUFBQSxDQUFDO0FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWYsU0FBUyxJQUFJO0lBQ1osT0FBTyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBQUEsQ0FBQztBQUVGLFNBQVMsWUFBWTtJQUNwQixVQUFVO0lBQ1YsT0FBTSxJQUFJLEVBQUM7S0FFVjtBQUNGLENBQUM7QUFBQSxDQUFDO0FBRUYsbURBQW1EO0FBRW5ELDZCQUE2QjtBQUM3QixzQkFBc0I7QUFFdEIsdUJBQXVCO0FBQ3ZCLDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIsOEJBQThCO0FBRTlCLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQjtJQUMxQixJQUFHLGdCQUFnQixFQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNYO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUVyQixTQUFTLFNBQVMsQ0FBQyxNQUFrQjtJQUNwQyxPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sRUFBUSxNQUFNLEVBQUM7SUFDbkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osNENBQTRDO0lBQzVDLGtDQUFrQztJQUNsQyxvREFBb0Q7SUFDcEQsZ0NBQWdDO0lBQ2hDLFFBQVE7SUFDUixJQUFJO0lBRUosY0FBYztBQUNsQixDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUdoQyxVQUFVOzs7O0FDL0dWLFNBQWdCLFFBQVEsQ0FBQyxJQUFXO0lBQ25DLE9BQU8sZ0JBQWMsSUFBTSxDQUFDO0FBQzdCLENBQUM7QUFGRCw0QkFFQzs7OztBQ0ZELGlDQUFpQztBQUVqQyx1Q0FBdUM7QUFFdkMsb0NBQW9DO0FBQ3BDLDBDQUEwQztBQUMxQyxLQUFLO0FBRUwsdUJBQXVCO0FBRXZCLFNBQVMsU0FBUyxDQUFDLE9BQWMsRUFBQyxJQUFXO0lBQzVDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFBQSxDQUFDO0FBRUYsU0FBUyxDQUFDLFVBQVUsRUFBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIERlbW8gU3RhcnRcclxuLyogQm9vbGVuICovIFxyXG5sZXQgaXNEb25lOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuLyog5pWw5YC8Ki8gXHJcbmxldCBkZWNMaXRlcmFsOiBudW1iZXIgPSA2O1xyXG5sZXQgaGV4TGl0ZXJhbDogbnVtYmVyID0gMHhmMDBkO1xyXG5sZXQgYmluYXJ5TGl0ZXJhbDogbnVtYmVyID0gMGIxMDEwO1xyXG5sZXQgb2N0YWxMaXRlcmFsOiBudW1iZXIgPSAwbzc0NDtcclxuXHJcbi8qIOWtl+espuS4siovXHJcbmxldCBuYW1lMTpzdHJpbmcgPSBcImJvYlwiO1xyXG5uYW1lMSA9IFwic21pdGhcIjsgXHJcbmxldCBuYW1lMjogc3RyaW5nID0gYEdlbmVgO1xyXG5sZXQgYWdlOiBudW1iZXIgPSAzNztcclxubGV0IHNlbnRlbmNlOiBzdHJpbmcgPSBgSGVsbG8sIG15IG5hbWUgaXMgJHsgbmFtZSB9LlxyXG5cclxuSSdsbCBiZSAkeyBhZ2UgKyAxIH0geWVhcnMgb2xkIG5leHQgbW9udGguYDtcclxuXHJcbi8qIOaVsOe7hCovIFxyXG5sZXQgbGlzdDpudW1iZXJbXSA9IFsxLDIsM107XHJcbmxldCBsaXN0MTpBcnJheTxudW1iZXI+ID0gWzEsMiwzXTtcclxuXHJcbi8q5YWD57uEXHJcblx06KeE5a6a5pWw57uE5Lit5q+P5LiA5Liq5YC85b6X57G75Z6LXHJcbiovIFxyXG5sZXQgeDpbc3RyaW5nLG51bWJlcixib29sZWFuXTtcclxueCA9IFsnQURGUVdFUicsMTAsdHJ1ZV07XHJcbmNvbnNvbGUubG9nKHhbMF0uc3Vic3RyKDEpKTtcclxuXHJcbnhbMF0gPSAnd29ybGQnO1xyXG5jb25zb2xlLmxvZyh4WzFdLnRvU3RyaW5nKCkpO1xyXG5cclxuLy8g5p6a5Li+XHJcbmVudW0gY29sb3Ige3JlZD0xLGdyZWVuLGJsdWV9O1xyXG5sZXQgYzpjb2xvciA9IGNvbG9yLmJsdWU7XHJcbmxldCBjb2xvck5hbWU6c3RyaW5nID0gY29sb3JbMl07XHJcbmNvbnNvbGUubG9nKGNvbG9yTmFtZSk7XHJcblxyXG5sZXQgbm90U3VyZTphbnkgPSA0O1xyXG5ub3RTdXJlID0gXCJtYXliZSBhIHN0cmluZyBpbnN0ZWFkXCI7XHJcbm5vdFN1cmUgPSBmYWxzZTtcclxuLy8gbm90U3VyZS5pZkl0RXhpc3RzKCk7XHJcbi8vIG5vdFN1cmUudG9GaXhlZCgpO1xyXG5jb25zb2xlLmxvZyhub3RTdXJlKVxyXG5sZXQgcHJldHR5U3VyZTogT2JqZWN0ID0gNDtcclxuXHJcbmxldCBsaXN0MjphbnlbXSA9IFsxLFwiQVNERFwiLCAyMV07XHJcblxyXG5mdW5jdGlvbiBmbigpOnZvaWQge1xyXG5cdC8vIHJldHVybiBcIjEyM1wiO1xyXG5cdGNvbnNvbGUubG9nKFwiVm9pZFwiKVxyXG59XHJcbmZuKClcclxuLy8gY29uc29sZS5sb2coZm4oKSlcclxuXHJcblxyXG4vLyBsZXQgdW51c2FibGU6dm9pZCA9IFwiSGVsbG9cIjsgICAvL0Vycm9yXHJcbmxldCB1bnVzYWJsZTE6dm9pZCA9IHVuZGVmaW5lZDsgICAvL09LXHJcbmxldCB1bnVzYWJsZTI6dm9pZCA9IG51bGw7ICAgLy9PS1xyXG4vLyBsZXQgbnVtOm51bWJlciA9IHVuZGVmaW5lZDtcclxuXHJcbmZ1bmN0aW9uIGVycm9yKG1zZzpzdHJpbmcpOm5ldmVyIHtcclxuXHQvLyB0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxufTtcclxuZXJyb3IoXCJFcnJvclwiKTtcclxuXHJcbmZ1bmN0aW9uIGZhaWwoKSB7XHJcblx0cmV0dXJuIGVycm9yKFwiU29tZXRoaW5nIGZhaWxlZFwiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGluZmluaXRlTG9vcCgpOm5ldmVyIHtcclxuXHQvLyBib2R5Li4uXHJcblx0d2hpbGUodHJ1ZSl7XHJcblxyXG5cdH1cclxufTtcclxuXHJcbi8vIGRlY2xhcmUgZnVuY3Rpb24gY3JlYXRlKG86IG9iamVjdCB8IG51bGwpOiB2b2lkO1xyXG5cclxuLy8gY3JlYXRlKHsgcHJvcDogMCB9KTsgLy8gT0tcclxuLy8gY3JlYXRlKG51bGwpOyAvLyBPS1xyXG5cclxuLy8gY3JlYXRlKDQyKTsgLy8gRXJyb3JcclxuLy8gY3JlYXRlKFwic3RyaW5nXCIpOyAvLyBFcnJvclxyXG4vLyBjcmVhdGUoZmFsc2UpOyAvLyBFcnJvclxyXG4vLyBjcmVhdGUodW5kZWZpbmVkKTsgLy8gRXJyb3JcclxuXHJcbmZ1bmN0aW9uIGYoc2hvdWxkSW5pdGlhbGl6ZSkge1xyXG5cdGlmKHNob3VsZEluaXRpYWxpemUpe1xyXG5cdFx0dmFyIHggPSAxMDtcclxuXHR9XHJcblx0cmV0dXJuIHg7XHJcbn1cclxuY29uc29sZS5sb2coZih0cnVlKSk7XHJcblxyXG5mdW5jdGlvbiBzdW1NYXRyaXgobWF0cml4OiBudW1iZXJbXVtdKSB7XHJcblx0Y29uc29sZS5sb2coLi4ubWF0cml4KVxyXG4gICAgdmFyIHN1bSA9IDA7XHJcbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgIHZhciBjdXJyZW50Um93ID0gbWF0cml4W2ldO1xyXG4gICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBzdW0gKz0gY3VycmVudFJvd1tpXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHN1bTtcclxufVxyXG5jb25zb2xlLmxvZyhzdW1NYXRyaXgoWzEsMiwzXSkpO1xyXG5cclxuXHJcbi8vRGVtbyBFbmQiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZTpzdHJpbmcpIHtcclxuXHRyZXR1cm4gYEhlbGxvIEZvcm0gJHtuYW1lfWA7XHJcbn0iLCJpbXBvcnQge3NheUhlbGxvfSBmcm9tIFwiLi9ncmVldFwiO1xyXG5cclxuLy8gY29uc29sZS5sb2coc2F5SGVsbG8oXCJUeXBlU2NyaXB0XCIpKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGhlbGxvKGNvbXBpbGVyOnN0cmluZykge1xyXG4vLyBcdGNvbnNvbGUubG9nKGBIZWxsbyBmcm9tICR7Y29tcGlsZXJ9YCk7XHJcbi8vIH07XHJcblxyXG4vLyBoZWxsbyhcIlR5cGVTY3JpcHRcIik7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTpzdHJpbmcsbmFtZTpzdHJpbmcpIHtcclxuXHRjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcclxuXHRlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSk7XHJcbn07XHJcblxyXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLFwiVHlwZVNjcmlwdFwiKTsiXX0=
