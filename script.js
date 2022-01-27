var visor = document.querySelector('.visor')
function somar() {
    
    visor.textContent = visor.textContent - -(document.getElementById('coiso').value);
    console.log(document.getElementById('coiso').value); 
    
}

function subtrair() {
    
    visor.textContent = visor.textContent-  document.getElementById('coiso').value;
    
   }
   
