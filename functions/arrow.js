const user={
    name:"piyush",
    age:10,

    welcome:function(){
        console.log(`${this.name} how are you?`)
        //console.log(this);
        
    }
}

// console.log(user.welcome())
// user.name="ramesh";
// console.log(user.welcome());


function app(){
    let username="piyush";
    console.log(this.username);//cant use this in inside function gives undefinedonly for objects its used
}

//app()

//Arrow function another way to declare function
// const func=function(){
//     console.log(10+20)
// }

// func()

// const func2=()=>{
//     console.log(10+20)
// }

// func2()

// const add=(num1,num2)=>{
// console.log(num1+num2)
// }

// const add1=(num1,num2)=>num1+num2
// add(10,20)
// console.log(add1(99,80))

// const add2=(num1,num2)=>{return {name:"piyush"}}

const add2=(num1,num2)=>({name:"piyush"})
console.log(add2(1,1))