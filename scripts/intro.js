let marks=Number(prompt("Enter the Marks?"));
console.log(marks)
let grade
if (marks>75) { grade='a';
    
} else (marks>=50) 
{ grade='b';
}
switch (true) {
    case (marks>75):
        console.log(`Marks are ${marks} and grade is ${ grade}`);
        break;
    case (marks>=50):
        console.log(`Marks are ${marks} and grade is ${grade}`);
        break;

    default:
        console.log(" PASS ")
        break;
}