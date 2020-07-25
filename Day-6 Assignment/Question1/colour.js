var i=0
function changeColor(){
    let c=["red","white","orange","green","purple"]    
document.body.style.backgroundColor=c[i];
i=(i+1)%c.length;

}
setInterval(changeColor,5000);