let mydate=new Date()
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
let mycreated=new Date("2025-02-11")
console.log(mycreated)

let timestamp=Date.now()
console.log(timestamp)
let nd=mydate.toLocaleString('default',{
    month:"long",
    day:"numeric",
    weekday:"narrow"
})
console.log(nd)