
let board = [
  /*0*/["","",""],
  /*1*/["","",""],
  /*2*/["","",""]
]

let turno = 1;

const casilla = document.getElementsByClassName("casillas");
let contadorJugador =  document.getElementsByClassName("contador");

let textoContador1 = "";
let textoContador2 = "";

let contadorCasillas = casilla.length;

let casillaRepetida = false;

let jugadorX = 0;
let jugadorO = 0;

contadorJugador[0].innerHTML = jugadorX;
contadorJugador[1].innerHTML = jugadorO;

let mensajeGanador =  document.getElementsByClassName("mensaje-ganador");
mensajeGanador[0].innerHTML = "COMIENCEN!"

iniciarTablero();

for(let i=0 ; i < casilla.length ; i++)
{
    casilla[i].addEventListener("click", function(){
         
            if(ganadorX() || ganadorO() || empateJugadores()){
               
               return false;
            }
            else{
               if( !casillaRepetida ){
                  if(turno === 1){
                     insertX(i);
                     turno = 2;
                  }else{
                     insertO(i);
                     turno = 1;
                  }
               }else{
                  if(turno === 1){
                     casillaRepetida = false;
                     insertO(i);
                  }else{
                     casillaRepetida = false;
                     insertX(i);
                  }                  
               }
               
            }         
    });
}

function iniciarTablero() {
 
   let contadorFila = 0;
   board.forEach( (row, i) => {
      row.forEach((value, index) => {

         if(contadorFila > 2){    
            casilla[contadorFila].innerHTML = "";
         }else{   
            casilla[index].innerHTML = ""; 
         }
         contadorFila++;
      })
   })
}