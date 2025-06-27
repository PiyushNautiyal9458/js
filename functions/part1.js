function app1(){
  console.log("hi");
}
app1();

function app2(num1,num2){
  console.log(num1+num2);
}
app2(3,5)
const answer=app3(2,7)
function app3(num1,num2){
  return num1+num2;
}

console.log(answer)

const answer1=app4()
function app4(num1=10,num2=50){
  return num1+num2;
}
console.log(answer1);
