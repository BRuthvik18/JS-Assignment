const name=prompt("Enter your name","Ram");
title.innerText+=`LetsUpgrade Welcomes to ${name};`
const ctime=document.getElementById('time');
function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    ctime.innerText=time;
}
setInterval(clock,1000);
const darkmode=document.body.style.backgroundColor="black"
document.body.style.color='white';
darkmode.classList.remove('black');
darkmode.classList.toggle('black');
