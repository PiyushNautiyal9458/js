// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("this is an async task")
//         resolve()
//     },1000);
    
// })

// //consuming a promiseOne
// promiseOne.then(function(){
//     console.log("promise one consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//        console.log("async task 2");
//        resolve() 
//     },1000)
// }).then(function(){
//     console.log("the task has been resolved");
// })

// const obj={
//     username:"piyush",
//     rollno:25
// }

// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(obj)
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user);
// })

// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"piyush",age:60})
//         }
//         else{
//             reject('something went wrong here plzz check')
//         }
//     },1000)
// }) 

// promisefour.then((user)=>{
//     console.log(user);
//     return user.age
// }).then((age)=>{
//     console.log(age);
// }).catch(function(err){
//     console.log(err)
// })


// const promisefive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"piyush",age:60})
//         }
//         else{
//             reject('something went wrong here plzz check')
//         }
//     },1000)
// }) 

// promisefive.then((user)=>{
//     console.log(user);
//     return user.age
// }).then((age)=>{
//     console.log(age);
// }).catch(function(err){
//     console.log(err)
// }).finally(function(){
//     console.log("promise is either resolved or rejected");
// })

//use of async and await

// const promise6=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err=true
//         if(!err){
//             resolve({username:"hey",pass:"12233"})
//         }
//         else{
//             reject("something went wrong")
//         }

//     },1000)
// })

// async function consume() {
//     try{
//     const response=await promise6
//     console.log(response.username);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// consume()



