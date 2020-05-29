let numero1;
let numero2;
let operacion;

function cargarCalculadora() {
    let consola = document.getElementById('consola');
    const igual = document.getElementById('btnIgual');
    const botonReset = document.getElementById('btnReset');

    oprimirTeclaNumerica();
    oprimirTeclaOperacion();

    botonReset.onclick = e => {
        resetear();
    }

    igual.onclick = e => {
        numero2 = consola.textContent;
        realizarOperacion();
    }
}

function realizarOperacion() {
    let resultadoOperacion = 0;
    switch(operacion) {
        case "+":
            resultadoOperacion = parseFloat(numero1) + parseFloat(numero2);
            break;

        case "-":
            resultadoOperacion = parseFloat(numero1) - parseFloat(numero2);
            break;

        case "x":
            resultadoOperacion = parseFloat(numero1) * parseFloat(numero2);
            break; 
            
        case "/":
            resultadoOperacion = parseFloat(numero1) / parseFloat(numero2);
            break;

        case "^":
            resultadoOperacion = Math.pow(numero1, numero2);
            break;

        case "√X":
            resultadoOperacion = Math.pow(numero2, (1/numero1));
            break;

        case "%":
            resultadoOperacion = parseFloat(numero1) / 100;
            break;
    }
    resetear();
    consola.textContent = resultadoOperacion;
}

function oprimirTeclaNumerica() {
    const teclas = document.querySelectorAll('.teclaNumerica');
    teclas.forEach(tecla => {
        tecla.onclick = e =>{
            consola.textContent += tecla.value;
        }  
    });   
}

function oprimirTeclaOperacion() {
    const teclas = document.querySelectorAll('.teclaOperacion');
    teclas.forEach(tecla => {
        tecla.onclick = e => {
            numero1 = consola.textContent;
            operacion = tecla.value;
            limpiar();
        }
    })
}

function resetear() {
    consola.textContent = "";
    numero1 = 0;
    numero2 = 0;
    operacion = "";
}

function limpiar() {
    consola.textContent = "";
}