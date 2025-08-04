let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `acertaste en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");


    }else{
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "el numero secreto es menor");
        } else { asignarTextoElemento("p", "el numero secreto es mayor");}}
        intentos++
        limpiarCaja();
        return;
    }

function limpiarCaja(){
document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+ 1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los numeros");

        } else{

            if(listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            }else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }}
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p", `inserte un numero del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //reinicar mensaje
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
   }


condicionesIniciales();