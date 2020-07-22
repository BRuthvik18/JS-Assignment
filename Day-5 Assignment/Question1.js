let arr=[];

while(true)
{
    
let k=prompt("Enter a number"); 
if(k === null) 
{
    break;
}

arr.push(Number(k));
}
let even=arr.filter((k)=>k%2!=0).map(k=>k**3);
console.log(even);