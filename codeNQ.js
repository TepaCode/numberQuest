
//-------------------Declaracion de variables----------------

let listaGameNumbers = [];
let rangoDeJuego = 5;
let secretNumber = generateSecretNumber();
console.log(`El numero secreto es ${secretNumber}.`);
//console.log(listaGameNumbers);

let mainMessage = document.querySelector('.start__message');
mainMessage.innerHTML = "Are your ready?";

let numberUser;
let counterAttemps = 1;


//-------------------Definicion de Funciones-----------------

//alert("Hola Mundo");

function asignTextElement(selector, content){
    let setSelector = document.querySelector(selector);
    setSelector.innerHTML = content;
}

//asignTextElement("footer","Juego del numero secreto");
//asignTextElement("p","Juego del numero secreto")

function userSecretNumber() {
    numberUser = parseInt(document.getElementById("userInputNumber").value);
    console.log(`El numero que escribio el usuario es: ${numberUser}`);
    console.log(`Y es un dato de tipo: ${typeof(numberUser)}`);
    return numberUser;
}

function generateSecretNumber(){
  let numeroGenerado = Math.floor(Math.random()*10)+1;
  console.log(`numero generado: ${numeroGenerado}`);
  console.log(listaGameNumbers);
 /* if(listaGameNumbers.length == rangoDeJuego) {
    alert("--------Juego Terminado--------")
    asignTextElement(".ending__message", "---------GAME OVER-------");
    asignTextElement(`.attempsCounter`, `--------GAME OVER--------`);
  }else{*/
  //Si el numero ya existe en la lista va a generar un nuevo numero despues de verificar en la lista//
    if(listaGameNumbers.includes(numeroGenerado)){
      return generateSecretNumber();   //Se llama a si misma, generando "Recursividad" 
    }else{
      listaGameNumbers.push(numeroGenerado);
      return numeroGenerado;
    /*}*/
  }
  counterAttemps++

  
}

/*
function generateSecretNumber(){
    return Math.floor(Math.random()*10)+1;
}*/

function compareNumbers(){
    userSecretNumber();    
    if (secretNumber === numberUser){
        asignTextElement(".ending__message", "Correcto, Adivinaste el numero!");
        asignTextElement(`.attempsCounter`, `Lo lograste en ${counterAttemps} ${(counterAttemps == 1) ? `intento.`:`intentos.`}`);
        document.getElementById("reloadButton").removeAttribute(`disabled`);
        document.querySelector(".input__button").setAttribute(`disabled`, `true`);
      
        }else{
            if(secretNumber > numberUser){
                asignTextElement(".ending__message", "El numero secreto es mas grande!");
                console.log(`Estas en el intento numero ${counterAttemps}.`)
                counterAttemps++;
                cleanInput();
            }else{
                asignTextElement(".ending__message", "El numero secreto es mas pequeño!");
                console.log(counterAttemps)
                counterAttemps++;
                cleanInput();
            }
        }
} 

function cleanInput(){
  document.querySelector(`#userInputNumber`).value = "Set a number between 1 to 10";
} 

function reloadGame(){
  document.querySelector(".input__button").removeAttribute(`disabled`);


  if(listaGameNumbers.length == rangoDeJuego) {
    mainMessage.innerHTML = "Juego Terminado";
    //document.getElementById(".input__button").removeAttribute(`placeholder`);
    //document.querySelector(".input__button").setAttribute(`placeholder`,`Juego terminado`);

    asignTextElement(".ending__message", "Se han sorteado los 5 numeros permitidos!");
    asignTextElement(".attempsCounter", "---------Bien hecho! presiona F5 para volver a jugar-------");

    document.querySelector(".input__button").setAttribute(`disabled`, `true`);
    document.getElementById("reloadButton").setAttribute(`disabled`, `true`);
  }else{
  //alert("Reboot Game");
  //Generate random number
    secretNumber = generateSecretNumber();
    console.log("------------------New Attempt-----------------");
    console.log(`El numero secreto es ${secretNumber}.`);
  //Clean BoxInput
    cleanInput();
  //Disabled new game button
    document.getElementById("reloadButton").setAttribute(`disabled`, `true`);
  //Reboot attemps
    counterAttemps = 1;
  //Empty final message
    asignTextElement(".ending__message", "");
    asignTextElement(`.attempsCounter`, ``);
  }
}


//-----------------------Funciones de desafios  Nivel 01------------------
function saludarMundo(){
  console.log("Hola Mundo Alura!");
  alert("Hola mundo Alura!");
}

function saludarNombre(){
  let nameUser = prompt("Ingresa tu nombre:")
  console.log(`Hola ${nameUser}, bienvenido al Mundo Alura!`);
  alert(`Hola ${nameUser}, bienvenido al Mundo Alura!`);
}

function doubleNumber(){
  let numberUserDesafio = prompt("Ingresa un numero:");
  alert(`El doble del numero ${numberUserDesafio} es igual a: ${numberUserDesafio * 2}.`);
}

function tripleNumber(){
    let number01Desa = parseInt(document.getElementById("inputDesa01").value);
    let number02Desa = parseInt(document.getElementById("inputDesa02").value);
    let number03Desa = parseInt(document.getElementById("inputDesa03").value);

    let sumaNumbers = number01Desa+number02Desa+number03Desa;
    let promedioNumbers = sumaNumbers/3;
    alert(`La suma de los tres numeros ingresados es: ${sumaNumbers}, y el promedio de es igual a: ${promedioNumbers}.`)
  }

 function compareTwoNumbers(){
    let number04Desa = parseInt(document.getElementById("inputDesa04").value);
    let number05Desa = parseInt(document.getElementById("inputDesa05").value);
    if(number04Desa > number05Desa){
      alert(`El numero ${number04Desa} es mayor que ${number05Desa}.`)
    }else if (number04Desa == number05Desa){
      alert(`Los numeros ingresados, son iguales!`)
    }else{
      alert(`El numero ${number05Desa} es mayor que ${number04Desa}.`)
    }
 }

 function multiplyNumbers(){
    let number06Desa = parseInt(document.getElementById("inputDesa06").value);
    alert(`El resultado de multiplicar ${number06Desa} por si mismo es: ${number06Desa * number06Desa}.`)
}

//-----------------------Funciones de desafios  Nivel 02------------------
function calculateIMC(){
    let dataUser01 = document.getElementById("dataUser01").value;
    let dataUser02 = document.getElementById("dataUser02").value;
    
    let resultIMC = dataUser01 / (dataUser02 * dataUser02);

    asignTextElement(`#resultingIMC`, `IMC = ${resultIMC.toFixed(4)}`);
}

function calculateFactorial(){
  let dataUser03 = document.getElementById("dataUser03").value;
  
  let positionFactor = 1;
  let factorialObtained = 1;
  let factorialAcumulado = 1;

  while(positionFactor != dataUser03){
    factorialAcumulado = factorialAcumulado * positionFactor;

    console.log(factorialAcumulado);
    positionFactor++;
  }
  factorialObtained = factorialAcumulado * positionFactor;

  asignTextElement(`#resultingFactorial`, `El factorial de ${dataUser03} es: ${factorialObtained}`);
  console.log(factorialObtained);
}


function translateToPesosMXN(){
  let dataUser04 = document.getElementById("dataUser04").value;
  
  let valorDolarActual = 17.10;
  let equivalentePesos = dataUser04 * valorDolarActual;

  asignTextElement(`#resultingPesos`, `$${dataUser04}USD es igual a $${equivalentePesos.toFixed(2)}MXN Pesos Mexicanos.`);
  //console.log(dataUser04);
}

function calculateAreaPeri(){
  let dataUser05 = document.getElementById("dataUser05").value;
  let dataUser06 = document.getElementById("dataUser06").value;

  let areaSala = dataUser05 * dataUser06;
  let perimetroSala = (dataUser05 * 2) + (dataUser06 *2);

  asignTextElement(`#resultingArea`, `Area de sala: ${areaSala.toFixed(2)}m2. | `);
  asignTextElement(`#resultingPerimetro`, `Perimetro: ${perimetroSala}m.`);
}

function calculateCircle(){
  let dataUser07 = document.getElementById("dataUser07").value;
  const PI = 3.14;

  let areaCircle = PI * (dataUser07 * dataUser07);
  let perimetroCircle = 2 * PI * dataUser07;

  asignTextElement(`#resultingAreaCircle`, `Area: ${areaCircle.toFixed(2)}m2. | `);
  asignTextElement(`#resultingPerimetroCircle`, `Perimetro: ${perimetroCircle.toFixed(2)}m.`);
}

function multiplyTable(){

  let dataUser08 = document.getElementById("dataUser08").value;
  let counterElement = 1;
  //console.log(liElement);
  
  while(counterElement <= 10){
    let liElement = counterElement * dataUser08;
    console.log(`${dataUser08} x ${counterElement} = ${liElement}`);
    counterElement++;
  }

}


//-----------------------Funciones de desafios  Nivel 03------------------


let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

let listaUnoNumeros = [7,10,9,8,6,8];

let listaDosNumeros = [8,10,5,9,7,6];


function alertListaVacia(){
  let listaGenerica = [];
  alert(`let listaGenerica = [ ];`);
  console.log(`lista generica = []; `);
  console.log(listaGenerica);
}

function verListaConsola(){
  console.log(`Lista de programas = ${lenguajesDeProgramacion}`);
}

function alertLenguajes(){
  while(lenguajesDeProgramacion.length > 5){
    lenguajesDeProgramacion.pop();
  }
  alert(lenguajesDeProgramacion);
  verListaConsola();
}

function agregarLenguajes(){
  if(lenguajesDeProgramacion.includes("Java", "Ruby","Golang")){
    alert(lenguajesDeProgramacion);
  }else{
    lenguajesDeProgramacion.push("Java","Ruby","Golang");
    alert(lenguajesDeProgramacion)}
    verListaConsola();
}

function verListaInversa(){
  console.log(lenguajesDeProgramacion.reverse());
  lenguajesDeProgramacion.reverse()
}

function listaCalcularPromedio(){
    let posicionLista = 0;
    let sumaLista = 0;
    let lengthLista = listaUnoNumeros.length;
    while(posicionLista < lengthLista ){
      sumaLista = sumaLista + listaUnoNumeros[posicionLista];
      posicionLista++;
    }
    let promedioLista = sumaLista / listaUnoNumeros.length;

    alert(`Lista de numeros: ${listaUnoNumeros}.
La suma de los numeros es: ${sumaLista}.
El promedio es: ${promedioLista}.`);
} 

function mostrarMaxMin(){
    let numeroMax = Math.max(...listaUnoNumeros);
    let numeroMin = Math.min(...listaUnoNumeros);

    console.log(`El numero mas grande es: ${numeroMax}`);
    console.log(`El numero mas chico es: ${numeroMin}`);
}

function sumaLista(){
  let posicionLista = 0;
  let sumaLista = 0;
  let lengthLista = listaUnoNumeros.length;

  while(posicionLista < lengthLista ){
    sumaLista = sumaLista + listaUnoNumeros[posicionLista];
    posicionLista++;
  }

  alert(`La suma de los numeros es: ${sumaLista}.`);
}

function posicionLista(){
    let verificadorPosition = parseInt(document.getElementById("dataUser09").value);
    
    if(listaUnoNumeros.includes(verificadorPosition)){
      asignTextElement(`.positionInputArray`, `"${verificadorPosition}" SI existe en la lista`);

    }else{
      asignTextElement(`.positionInputArray`, `"${verificadorPosition}" NO existe en la lista.`);
    }

    // ----------Mostrar posicion-----no conseguido :( .....aun...----
    /*
    for (let i = 0; i < listaUnoNumeros.length; i++) {
      if (listaUnoNumeros[i] === verificadorPosition) {
        asignTextElement(`.positionInputArray`, `"${verificadorPosition}" SI existe en la lista, y se encuentra en la posicion: ${i}`);
      }else{
        asignTextElement(`.positionInputArray`, `"${verificadorPosition}" NO existe en la lista.`);
      }
    }*/
 
}

function sumarDosListas(){
    let listaA = listaUnoNumeros;
    let listaB = listaDosNumeros;
    console.log(`Los elementos de la lista A son: ${listaA}`);
    console.log(`Los elementos de la lista B son: ${listaB}`);

    for(n in listaUnoNumeros){
      let sumaDosNumeros = listaUnoNumeros[n] + listaDosNumeros[n];
      console.log(`La suma de ${listaUnoNumeros[n]} + ${listaDosNumeros[n]} es igual a: ${sumaDosNumeros}.`);
    }
    //console.log(listaA + listaB);
}

function cuadradoLista(){
  for(i in listaUnoNumeros){
    let cuadradoNumeros = listaUnoNumeros[i] * listaUnoNumeros[i];
    
    console.log(`El cuadrado de ${listaUnoNumeros[i]} es: ${cuadradoNumeros}.`);
  }
}







//---------------Experimental Functions--------------------------

function reloadPage(){
    alert("Click desde el botton");
}
