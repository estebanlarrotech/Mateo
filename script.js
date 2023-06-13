/*To create button click show hide navbar*/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");    
})

var typed=new Typed(".input",{
    strings:["  cores do Porto","  cores do Benfica","  cores do tua equipa"," cores que você goste",
    "  cores do Porto","  cores do Benfica","  cores do tua equipa","  cores que você goste",
    "  cores do Porto","  cores do Benfica","  cores do tua equipa","  cores que você goste"],
    typedSpeed:20,
    backSpeed:25,
    loop:true
})

var typed=new Typed(".input2",{
    strings:["    ","","   Pulseira = 2€  ","  Pulseira = 1€   "],
    typedSpeed:20,
    backSpeed:25,
    loop:true
})