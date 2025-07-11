// fetch('https://jsonplaceholder.typicode.com/users').
// then((data)=>{
//     const val=data.json();
//     return val;
// }).then((user)=>{
//     console.log(user)
// }).catch((e)=>{
//  console.log(e)
// })

fetch('https://jsonplaceholder.typicode.com/users').
then((data)=>{
    console.log(data.json());
}).catch((e)=>{
 console.log(e)
})