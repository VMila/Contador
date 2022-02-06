var visor = document.querySelector('.visor')
function somar() {
    
    visor.textContent = visor.textContent - -(document.getElementById('coiso').value);
    console.log(document.getElementById('coiso').value); 
    if(visor.textContent > 0)
    visor.style.color = "green";
    if(visor.textContent == 0)
    visor.style.color = "black";
    if(visor.textContent < 0)
    visor.style.color = "red";
    
}

function subtrair() {
    
    visor.textContent = visor.textContent-  document.getElementById('coiso').value;
    if(visor.textContent > 0)
    visor.style.color = "green";
    if(visor.textContent == 0)
    visor.style.color = "black";
    if(visor.textContent < 0)
    visor.style.color = "red";
    
   }

   function reseta() {
    visor.textContent = 0; 
    visor.style.color = "black" 
   }
   
