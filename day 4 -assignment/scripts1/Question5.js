let i =+prompt("Enter the sales value to get the commission");
switch (true)
 {
    case ( i>0  && i<=5000):
    {
          let sum=(i*2)/100;
          console.log(`=>${sum} is your commission`);
    }
        break;
    case (i>5001 && i<=10000):
        {
            let sum1=(i*5)/100;
          console.log(`${sum1} is your commission`);
        }
        break;
    case (i>10000  && i<=20000):
        {
            let sum2=(i*7)/100;
          console.log(`${sum2} is your commission`);
        }
        break;
    case (i>=20001):
        {
            let sum3=(i*10)/100;
          console.log(`${sum3} is your commission`);
        }
        break;

    default:
        {
            console.log("BE HAPPY");
        }
}
