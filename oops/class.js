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


function demo(username,age,password){
    this.username=username
    this.age=age
    this.password=password
    return `my age is ${this.age}`
}

demo.prototype.displayname=function(){
    return `kaise hia aap ${this.username}`
}

const hey=new demo("piyush",34,"sbfkaj")
console.log(hey.displayname())