const empateJugadores = () => {

    if(contadorCasillas == 0){
 
       console.log("EMPATE!");
       mensajeGanador[0].innerHTML = "EMPATE!"
       reiniciarJuego(true);
       return true;
      
    }
    
 }
 
 const insertX = (i) =>{
 
     if(i == 0){
          if(board[0][0] == ""){
             board[0][0] = 'X';
             
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[0][0]);
             elemento.appendChild(textnode);
 
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
             
             contadorCasillas--;
             (ganadorX() || ganadorO() || empateJugadores())
               
          }
          else{
             casillaRepetida = true;
             mensajeNoSeleccionar()
          } 
      }
      else if(i == 1){
          if(board[0][1] == ""){
             board[0][1] = 'X';
             
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[0][1]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
             
             contadorCasillas--;
             (ganadorX() || ganadorO() || empateJugadores())
             
             
          }
          else{
               casillaRepetida = true;
             casillaRepetida = mensajeNoSeleccionar()
          } 
      }
      else if(i == 2){
          if(board[0][2] == ""){
             board[0][2] = 'X';
             
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[0][2]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
             
             contadorCasillas--;
             (ganadorX() || ganadorO() || empateJugadores())
             
             
          }
          else{
               casillaRepetida = true;
             casillaRepetida = mensajeNoSeleccionar()
          } 
      }
      else if(i == 3){
         if(board[1][0] == ""){
          board[1][0] = 'X';
          
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[1][0]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
          
          contadorCasillas--;
          (ganadorX() || ganadorO() || empateJugadores())
          
          
       }
       else{
            casillaRepetida = true;
          casillaRepetida = mensajeNoSeleccionar()
       } 
      }
      else if(i == 4){
         if(board[1][1] == ""){
          board[1][1] = 'X';
          
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[1][1]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
          
          contadorCasillas--;
          (ganadorX() || ganadorO() || empateJugadores())
          
          
       }
       else{
            casillaRepetida = true;
          casillaRepetida = mensajeNoSeleccionar()
       } 
      }
      else if(i == 5){
         if(board[1][2] == ""){
          board[1][2] = 'X';
          
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[1][2]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
          
          contadorCasillas--;
          (ganadorX() || ganadorO() || empateJugadores())
          
          
          }
          else{
               casillaRepetida = true;
             casillaRepetida = mensajeNoSeleccionar()
          } 
      }
      else if(i == 6){
         if(board[2][0] == ""){
          board[2][0] = 'X';
          
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[2][0]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
          
          contadorCasillas--;
          (ganadorX() || ganadorO() || empateJugadores())
          
          
          }
          else{
               casillaRepetida = true;
             casillaRepetida = mensajeNoSeleccionar()
          } 
      }
      else if(i == 7){
         if(board[2][1] == ""){
          board[2][1] = 'X';
          
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[2][1]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
          
          contadorCasillas--;
          (ganadorX() || ganadorO() || empateJugadores())
          
          
       }
       else{
            casillaRepetida = true;
          casillaRepetida = mensajeNoSeleccionar()
       } 
      }
      else if(i == 8){
         if(board[2][2] == ""){
          board[2][2] = 'X';
          
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[2][2]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
          
          contadorCasillas--;
          (ganadorX() || ganadorO() || empateJugadores())
          
          
          }
          else{
               casillaRepetida = true;
             casillaRepetida = mensajeNoSeleccionar()
          } 
      }
 
 }
 
 const insertO = (i) =>{
 
    if(i == 0){
         if(board[0][0] == ""){
            board[0][0] = "O";
            
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[0][0]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
            
            contadorCasillas--;
            (ganadorX() || ganadorO() || empateJugadores())
            
            
         }
         else{
            casillaRepetida = true;
            casillaRepetida = mensajeNoSeleccionar()
         } 
     }
     else if(i == 1){
         if(board[0][1] == ""){
            board[0][1] = "O";
            
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[0][1]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
            
            contadorCasillas--;
            (ganadorX() || ganadorO() || empateJugadores())
            
            
         }
         else{
            casillaRepetida = true;
            casillaRepetida = mensajeNoSeleccionar()
         } 
     }
     else if(i == 2){
         if(board[0][2] == ""){
            board[0][2] = "O";
            
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[0][2]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
            
            contadorCasillas--;
            (ganadorX() || ganadorO() || empateJugadores())
            
            
         }
         else{
            casillaRepetida = true;
            casillaRepetida = mensajeNoSeleccionar()
         } 
     }
     else if(i == 3){
        if(board[1][0] == ""){
         board[1][0] = "O";
         
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[1][0]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
         
         contadorCasillas--;
         (ganadorX() || ganadorO() || empateJugadores())
         
         
      }
      else{
         casillaRepetida = true;
         casillaRepetida = mensajeNoSeleccionar()
      } 
     }
     else if(i == 4){
        if(board[1][1] == ""){
         board[1][1] = "O";
         
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[1][1]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
         
         contadorCasillas--;
         (ganadorX() || ganadorO() || empateJugadores())
         
         
      }
      else{
         casillaRepetida = true;
         casillaRepetida = mensajeNoSeleccionar()
      } 
     }
     else if(i == 5){
        if(board[1][2] == ""){
         board[1][2] = "O";
         
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[1][2]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
         
         contadorCasillas--;
         (ganadorX() || ganadorO() || empateJugadores())
         
         
         }
         else{
            casillaRepetida = true;
            casillaRepetida = mensajeNoSeleccionar()
         } 
     }
     else if(i == 6){
        if(board[2][0] == ""){
         board[2][0] = "O";
         
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[2][0]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
         
         contadorCasillas--;
         (ganadorX() || ganadorO() || empateJugadores())
         
         
         }
         else{
            casillaRepetida = true;
            casillaRepetida = mensajeNoSeleccionar()
         } 
     }
     else if(i == 7){
        if(board[2][1] == ""){
         board[2][1] = "O";
         
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[2][1]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
         
         contadorCasillas--;
         (ganadorX() || ganadorO() || empateJugadores())
         
         
      }
      else{
         casillaRepetida = true;
         casillaRepetida = mensajeNoSeleccionar()
      } 
     }
     else if(i == 8){
        if(board[2][2] == ""){
         board[2][2] = "O";
         
             const elemento = document.createElement("p");
             const textnode = document.createTextNode(board[2][2]);
             elemento.appendChild(textnode);
             
             elemento.classList.add("fs-2");
             casilla[i].appendChild(elemento);
         
         contadorCasillas--;
         (ganadorX() || ganadorO() || empateJugadores())
         
         
         }
         else{
            casillaRepetida = true;
            casillaRepetida = mensajeNoSeleccionar()
         } 
     }
 
 }
 
 const mensajeNoSeleccionar = () => {
    console.log("NO PUEDES SELECCIONAR ESTA CASILLA");
    return true;
 }
 

 const ganadorX = () => {
 
    /*HORIZONTAL*/
    if(board[0][0] === "X" && 
       board[0][1] === "X" && 
       board[0][2] === "X" ){
          
       console.log("GANA X!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 1"
       reiniciarJuego(true, "X");
        return true;
        
    } 
    else if(board[1][0] === "X" && 
          board[1][1] === "X" && 
          board[1][2] === "X" ){
 
       console.log("GANA X!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 1"
       reiniciarJuego(true, "X");
        return true;
        
    }
    else if(board[2][0] === "X" && 
          board[2][1] === "X" && 
          board[2][2] === "X" ){
 
       console.log("GANA X!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 1"
       reiniciarJuego(true, "X");
        return true;
        
    }
    /*VERTICAL*/
    else if(board[0][0] === "X" && 
          board[1][0] === "X" && 
          board[2][0] === "X" ){
 
       console.log("GANA X!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 1"
       reiniciarJuego(true, "X");
        return true;
        
    }
    else if(board[0][1] === "X" && 
          board[1][1] === "X" && 
          board[2][1] === "X" ){
 
       console.log("GANA X!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 1"
       reiniciarJuego(true, "X");
        return true;
        
    }
    else if(board[0][2] === "X" && 
          board[1][2] === "X" && 
          board[2][2] === "X"){ 
 
       console.log("GANA X!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 1"
       reiniciarJuego(true, "X");
        return true;
        
    }
    /*DIAGONAL*/
    else if(board[0][0] === "X" && 
          board[1][1] === "X" && 
          board[2][2] === "X"){ 
 
       console.log("GANA X!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 1"
       reiniciarJuego(true, "X");
        return true;
        
    }
    else if(board[0][2] === "X" && 
          board[1][1] === "X" && 
          board[2][0] === "X"){ 
 
       console.log("GANA X!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 1"
       reiniciarJuego(true, "X");
        return true;    
    }
 }
 
 const ganadorO = () => {
 
    /*HORIZONTAL*/
    if(board[0][0] === "O" && 
       board[0][1] === "O" && 
       board[0][2] === "O" ){
          
       console.log("GANA O!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 2"
       reiniciarJuego(true, "O");
        return true;
       
    } 
    else if(board[1][0] === "O" && 
          board[1][1] === "O" && 
          board[1][2] === "O" ){
 
       console.log("GANA O!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 2"
       reiniciarJuego(true, "O");
        return true;
 
    }
    else if(board[2][0] === "O" && 
          board[2][1] === "O" && 
          board[2][2] === "O" ){
 
       console.log("GANA O!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 2"
       reiniciarJuego(true, "O");
        return true;
    }
    /*VERTICAL*/
    else if(board[0][0] === "O" && 
          board[1][0] === "O" && 
          board[2][0] === "O" ){
 
       console.log("GANA O!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 2"
       reiniciarJuego(true, "O");
        return true;
    }
    else if(board[0][1] === "O" && 
          board[1][1] === "O" && 
          board[2][1] === "O" ){
 
       console.log("GANA O!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 2"
       reiniciarJuego(true, "O");
        return true;
    }
    else if(board[0][2] === "O" && 
          board[1][2] === "O" && 
          board[2][2] === "O"){ 
 
       console.log("GANA O!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 2"
       reiniciarJuego(true, "O");
        return true;
    }
    /*DIAGONAL*/
    else if(board[0][0] === "O" && 
          board[1][1] === "O" && 
          board[2][2] === "O"){ 
 
       console.log("GANA O!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 2"
       reiniciarJuego(true, "O");
        return true;
    }
    else if(board[0][2] === "O" && 
          board[1][1] === "O" && 
          board[2][0] === "O"){ 
 
       console.log("GANA O!");
       mensajeGanador[0].innerHTML = "GANÓ JUGADOR 2"
       reiniciarJuego(true, "O");
        return true;
    } 
 }
 
 const reiniciarJuego = (reiniciar = false, jugador)  => {
    if(reiniciar) {
       board = [
          /*0*/["","",""],
          /*1*/["","",""],
          /*2*/["","",""]
        ]
        reiniciar = false;
        contadorCasillas = 9;
 
        /*Contador Victorias*/
        if(jugador === "X" || jugador === "O"){
          calculoContadorVictorias(jugador);
        }
        
        iniciarTablero();
    }
 }
 
 function calculoContadorVictorias(jugador){
 
    if(jugador === "X"){
       contadorJugador[0].innerHTML = "";
       jugadorX = (parseInt(jugadorX)+1);
       let textnode1 = document.createTextNode(jugadorX);
       textoContador1.innerHTML = jugadorX;
       contadorJugador[0].appendChild(textnode1);
     }
     else{
       contadorJugador[1].innerHTML = "";
       jugadorO = (parseInt(jugadorO)+1);
       let textnode2 = document.createTextNode(jugadorO);
       textoContador2.innerHTML = jugadorO;
       contadorJugador[1].appendChild(textnode2);
     }
 
 }