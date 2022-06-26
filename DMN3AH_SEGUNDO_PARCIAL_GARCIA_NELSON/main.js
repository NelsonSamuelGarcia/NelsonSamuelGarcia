
 p = document.createElement("p");
arrayPersonajes = [
    '<button class="botonA"><img src="/img/crz.png" ></button>',
    '<button class="botonA"><img src="/img/cua.png"></button>',
    '<button class="botonA"><img src="/img/crz.png"></button>',
    '<button class="botonA"><img src="/img/cua.png"></button>',
    '<button class="botonA"><img src="/img/tra.png"></button>',
    '<button class="botonA"><img src="/img/tra.png"></button>',
    '<button class="botonA"><img src="/img/tri.png"></button>',
    '<button class="botonA"><img src="/img/tri.png"></button>',
    '<button class="botonA"><img src="/img/rom.png"></button>',
    '<button class="botonA"><img src="/img/rom.png"></button>',
    '<button class="botonA"><img src="/img/mas.png" ></button>',
    '<button class="botonA"><img src="/img/mas.png"></button>'
]

personajes = document.getElementsByClassName("botonA");
function mezclarPersonajes() {
function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
}
shuffleArray(arrayPersonajes);
 arrP2 = arrayPersonajes.join("")
return  botonPersonajes.innerHTML = arrP2;
}
mezclarPersonajes();
comparar = "";
 contadorN = 0;
 contadorP = 0;
toques = 12;
 for (i = 0; i < personajes.length; i++) {
     personajes[i].addEventListener("click", botones);
 }
 function botones() {
     this.firstChild.style.width = "70%";
    this.style = "box-shadow: none"
     if (comparar == "") {
         primerBoton = this;
         this.disabled = true;
         setTimeout(function () {
             primerBoton.firstChild.style.width = "70%";
             primerBoton.style.width = "92%";
             primerBoton.style.height = "92%";
             primerBoton.style.top = "4%";
             primerBoton.style.left = "4%";
         }, 10);
         setTimeout(function () {
             primerBoton.style.width = "90%";
             primerBoton.style.height = "90%";
             primerBoton.style.top = "5%";
             primerBoton.style.left = "5%";
         }, 500);
         comparar = this.innerHTML;
        
     } else {
         if (comparar == this.innerHTML) {
             //ganaste
             this.disabled = true;
             segundoBoton = this;
             contadorP += 1;
         } else {
             //perdiste
             toques -= 1;
             cuentaToques.innerHTML = toques;
             contadorN += 1;
             console.log(contadorN + " negativos")
             segundoBoton = this;
             segundoBoton.disabled = false;
             primerBoton.disabled = false;
             setTimeout(function () {
                 segundoBoton.firstChild.style.width = "70%";
                 segundoBoton.style.width = "92%";
                 segundoBoton.style.height = "92%";
                 segundoBoton.style.top = "4%";
                 segundoBoton.style.left = "4%";
             }, 10);
             setTimeout(function () {
                 segundoBoton.firstChild.style.width = "70%";
                 segundoBoton.style.width = "90%";
                 segundoBoton.style.height = "90%";
                 segundoBoton.style.top = "5%";
                 segundoBoton.style.left = "5%";
             }, 200);
             setTimeout(function () {
                 primerBoton.firstChild.style.width = "0%";
                 segundoBoton.firstChild.style.width = "0%";
                 primerBoton.style = "box-shadow: -6px -6px 14px rgba(255, 255, 255, .01),inset 2px 2px 3px rgba(255, 255, 255, .01), -6px -6px 10px rgba(255, 255, 255, .05), 6px 6px 10px rgba(0, 0, 0, .2), inset -2px -2px 3px rgba(0, 0, 0, .02);";
                 segundoBoton.style = "box-shadow: -6px -6px 14px rgba(255, 255, 255, .01),inset 2px 2px 3px rgba(255, 255, 255, .01), -6px -6px 10px rgba(255, 255, 255, .05), 6px 6px 10px rgba(0, 0, 0, .2), inset -2px -2px 3px rgba(0, 0, 0, .02);";
             }, 300);
         }
         comparar = "";
         if (contadorN == 12) {
            for (i = 0; i < personajes.length; i++) {
                personajes[i].firstChild.style.width = "0";
            personajes[i].disabled = true;
            }
            p.innerHTML = "¡PERDISTE!"
            ventanaResultado(); 
        }

         if (contadorP == arrayPersonajes.length/2) {
             p.innerHTML = "¡GANASTE!"
             ventanaResultado();
         }
     }
 }

 function ventanaResultado() {
     resultado.prepend(p);
     document.getElementById("resultado").style.visibility = "visible";
     contadorN = 0;
     contadorP = 0;  
 }

 /* boton.addEventListener("click", function () {
     resultado.style.visibility = "hidden"
     toques = 12;
     cuentaToques.innerHTML = toques;
     for (i = 0; i < personajes.length; i++) {
         personajes[i].firstChild.style.width = "0";
     personajes[i].disabled = false;
     }
 } ) */




