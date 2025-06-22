"use strict"
//alert(3+6)//we cannot do it here because we are using nodejs not browser 
//null is a stand alone value
//undefined is different from null means value not assigned

console.log(typeof undefined)//=>undefined
console.log(typeof null)//=>object
let score=22;
console.log(typeof score)
let nsc="2f34";
console.log(typeof nsc);
let nval=Number(nsc);
console.log(typeof nval);
console.log(nval);
//non primitive datatype gets value in heap and we get reference of the object
let obj={
    name:"piyush",
    age:24
}

let nobj=obj
nobj.age=66
console.log(nobj.age)
console.log(obj.age);