// const obj={//non singleton
//     name:"piyush",
//     age:22,
//     gender:"male",
//     istrue:1,
//     favsub:["maths","chemistry"],
// }

// console.log(obj.favsub[0])
// console.log(obj["favsub"][0])
// console.log(obj["istrue"])
// obj.gender="female"
// obj.name="ram"
// //Object.freeze(obj)
// obj.name="ravi"
// console.log(obj["gender"])
// console.log(obj["name"])
// console.log(obj)

// obj.greeting=function(){
//     console.log("hello user")
// }

// obj.greeting2=function(){
//     console.log(`hello ${this.name} how are u`)
// }

// console.log(obj.greeting)
// console.log(obj.greeting2())

//SINGLETON OBJECT

const newobj=new Object();
//object inside object
const reguser={
    name:
    {
        fullname:{
            firstname:"piyush",
            lastname:"nautiyal"
        }
    }

}

//console.log(reguser.name);
//console.log(reguser.name.fullname)
//console.log(reguser.name.fullname.lastname);
//merge objects

const obj1={
    1:"a",
    2:"b"
}
//const obj3=Object.assign({},obj1,reguser)
const obj3={...obj1,...reguser}
//console.log(obj3);

//console.log(Object.keys(obj3));
//console.log(Object.values(obj3));