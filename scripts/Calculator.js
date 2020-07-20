let i=+prompt(`Press 1 for Addition,press 2 for subtraction,press 3 for multiplication,press 4 Division,press 5 for Square root,press 6 for Percentage`);
let a,b;
switch (true) {
    case i==1:
    {
        a=+prompt(`enter the number1 `);
        b=+prompt(`enter the number2`);
    sum=a+b;
     console.log(sum);
    }
        break;
    case i==2:
        {
        a=+prompt(`enter the number1 `);
        b=+prompt(`enter the number2`);
        if(a>b)
        {
            sub=a-b;
            console.log(sub);
        }
        else
        {
           sub=b-a;
           console.log(sub);
        }
        }
          break;
        case i==3:
            {
                a=+prompt(`enter the number1 `);
                b=+prompt(`enter the number2`);
                mul=a*b;
                console.log(mul);
            }
            break;
        case i==4:
            {
                a=+prompt(`enter the number1 `);
                b=+prompt(`enter the number2`);
                div=a/b;
                console.log(div);
            }
            break;
        case i==5:
            {
                a=+prompt(`enter the number1 `);
                console.log(Math.sqrt(a));
            }
            break;
        case i==6:
            {
            a=+prompt(`The number you have to calculate from the total to get percentage`);
            b=+prompt(`the total number from which it should becalculated`);
            per=(a/b)*100;
            console.log(`${per}%`);
            }
            break;
    default:
        console.log(" Be Happy");
        break;
}