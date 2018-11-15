
var t =document.getElementById('container');
var x = document.getElementsByClassName('dot'); 
var z = document.getElementsByClassName('menue'); 

console.log(t);

t.addEventListener("click",function(){
    x[0].classList.toggle('fox0');
    x[1].classList.toggle('fox1');
    x[2].classList.toggle('fox2');
    z[0].classList.toggle('vis');
});




