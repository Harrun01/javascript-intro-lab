document.querySelector('nav ul li').setAttribute('class', 'currentPage');
let firstButton = document.querySelector(".btn");
console.log(firstButton); // Logs the first element with the class 'btn'
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'
document.getElementById('myTestBtn').addEventListener('click', (ev) => console.dir(ev));

document.querySelector(".red").addEventListener('click', function(){
         document.body.setAttribute('class', "redBack");
   })
   document.querySelector(".blue").addEventListener('click',function(){
            document.body.setAttribute('class', "blueBack");
   })
   document.querySelector(".green").addEventListener('click',function(){
    document.body.setAttribute('class',"greenBack");
   })
    document.querySelector(".reset").addEventListener('click',function(){
     document.body.setAttribute('class', "resetBack");
    })
