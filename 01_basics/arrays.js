//const arr=[1,2,3,4,"piyush",true]
// console.log(arr[4])
// arr[1]=5
// console.log(arr[1])
// const newarr=new Array(1,2,3,4,5,6,7);
// console.log(newarr[3]); 

// //Araay methods
// arr.push(10);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(22)
// console.log(arr)
// arr.shift()
// console.log(arr)
// let ans=arr.includes(4)
// console.log(ans);
// const heyarr=arr.join();
// console.log(heyarr);
// console.log(typeof heyarr)//string

//slice and splice

// console.log("A ",arr);
// const myth=arr.slice(1,3);
// console.log(myth);
// console.log("B ",arr);
/*
A  [ 1, 2, 3, 4, 'piyush', true ]
[ 2, 3 ]
B  [ 1, 2, 3, 4, 'piyush', true ]
*/

// console.log("A ",arr);
// const myth2=arr.splice(1,3);
// console.log(myth2);
// console.log("B ",arr);

//output=>
// A  [ 1, 2, 3, 4, 'piyush', true ]
// [ 2, 3, 4 ]
// B  [ 1, 'piyush', true ]

const arr1=["piyush","ravi","aman","abhishek"]
const arr2=["sumit","ashish","ris","shashank"]
// arr1.push(arr2);
// console.log(arr1);//arr2 inside arr1 [....[]]

const merged=arr1.concat(arr2);
console.log(merged)