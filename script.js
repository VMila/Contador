var visor = document.querySelector('.visor')
let atrasa
var soma

function somar() {
    

    soma = visor.textContent - -(document.getElementById('coiso').value);
    if(soma < 100000000){
    visor.textContent = visor.textContent - -(document.getElementById('coiso').value);
    console.log(document.getElementById('coiso').value); 
    visor.style.color = "green"
    delay()}
    else{
        ;
    }

    
}

function subtrair() {
    soma = visor.textContent - document.getElementById('coiso').value;
    if(soma > -10000000){
    visor.textContent = visor.textContent -  document.getElementById('coiso').value;
    visor.style.color = "red"
    delay()}
    else{
        ;
    }

    
   }

   function reseta() {
    visor.textContent = 0; 
   }
   

function delay() {
    atrasa = setTimeout(origin, 150);
 }

function origin(){
   visor.style.color = "black"
}