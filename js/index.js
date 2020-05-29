class Calculadora {

    constructor() {
        this.consola = document.getElementById('consola');
        this.igual = document.getElementById('btnIgual');
        this.botonReset = document.getElementById('btnReset');
    }

    suscribirClickTeclasNumericas() {
        const teclas = document.querySelectorAll('.teclaNumerica');
        teclas.forEach(tecla => {
            tecla.onclick = e => {
                consola.textContent += tecla.value;
            }
        });
    }

    suscribirEventosClick() {

        this.suscribirClickTecla('.teclaNumerica', tecla => {
            this.consola.textContent += tecla.value;
        });

        this.suscribirClickTecla('.teclaOperacion', tecla => {
            this.numero1 = this.consola.textContent;
            this.operacion = tecla.value;
            this.consola.textContent = '';
        });

        this.botonReset.onclick = e => {
            this.resetear();
        }

        this.igual.onclick = e => {
            this.numero2 = consola.textContent;
            realizarOperacion();
        }
    }

    suscribirClickTecla(selector, callback) {

        const teclas = document.querySelectorAll(selector);

        teclas.forEach(tecla => tecla.onclick(event => {
            callback.call(this, tecla);
        }));
    }

    resetear() {
        this.consola = '';
        this.numero1 = 0;
        this.numero2 = 0;
        this.operacion = '';
    }

}


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
    switch (operacion) {
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
            resultadoOperacion = Math.pow(numero2, (1 / numero1));
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
        tecla.onclick = e => {
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