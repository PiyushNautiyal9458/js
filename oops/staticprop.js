// class user{
//     constructor(username){
//         this.username=username
//     }

//     logme(){
//         return `123`
//     }
// }

// const obj=new user("piyush")
// console.log(obj.logme())

class user{
    constructor(username){
        this.username=username
    }

    static logme(){//can't access it
        return `123`
    }
}

const obj=new user("piyush")
console.log(obj.logme())