//1
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

//2
function botonConsole(){
    console.log("El botón fue clicado");
}

//3
function botonPrompt(){
    let ciudad = prompt('Escriba el nombre de una ciudad de Brasil: ');
    console.log(ciudad);

    alert(`"Estuve en ${ciudad} y me acordé de ti".`);
}

//4
function botonAlerta() {
    alert('Yo amo JS');
}

//5
function botonSuma(){
    let a = parseInt(prompt('Ingrese un número: '));
    let b = parseInt(prompt('Ingrese otro número: '));
    let suma = a+b;
    alert(`La suma es : ${a+b}`)
}

