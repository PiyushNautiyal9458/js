//destructure of object when we dont want to call like obj.name we can do const {name}=obj and then we can directly call console.log(name);

const obj={
    name:"a",
    2:"b",
    3:"c"
}

const {name}=obj
const {3:id}=obj
console.log(name)
console.log(id)