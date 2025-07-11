// class user{
//     constructor(username,age,password){
//         this.username=username
//         this.age=age
//         this.password=password
//     }



//     displayage(){
//         console.log(`the age is ${this.age}`)
//     }

// }

// const chai=new user("piyush",70,"apple")
// console.log(chai)
// chai.displayage()


// function demo(username,age,password){
//     this.username=username
//     this.age=age
//     this.password=password
//     return `my age is ${this.age}`
// }

// demo.prototype.displayname=function(){
//     return `kaise hia aap ${this.username}`
// }

// const hey=new demo("piyush",34,"sbfkaj")
// console.log(hey.displayname())

// class user{
//     constructor(username){
//         this.username=username
//     }

//     callme(){
//         return `this is my new space ${this.username}`
//     }
// }

// class parent extends user{
//     constructor(user,email,age){
//         super(user)
//         this.email=email
//         this.age=age
//     }

//     anothercall(){
//         return `hey ${this.age}`
//     }
// }

// const chai=new parent("ravi","raman@gmail.com",20)
// const chai1=new parent("aman","sam@gmail.com",90)
// console.log(chai.callme())
// console.log(chai1.anothercall())

