var num1 = []
var num2 = []
var llenaCifra1 = false,
    llenaCifra2 = false,
    cifra1 = 0,
    cifra2 = 0,
    ultimoOperador = ''

let resultadoPantalla = document.getElementById('visor')
resultadoPantalla = 0
visor.innerHTML = resultadoPantalla


document.querySelectorAll('calculadora')
// const formulario = document.getElementById('calculadora')


/* ******************* Inicio escucha Teclas numéricas************************* */

document.querySelector('#cero').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 0
            cifra1 += 1
            mostrarVisorNum1() 
        } else if(cifra2 <= 5 && !llenaCifra2) {
            num2[cifra2] = 0
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#uno').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 1
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 1
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#dos').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 2
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 2
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#tres').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 3
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 3
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#cuatro').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 4
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 4
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#cinco').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 5
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 5
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#seis').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 6
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 6
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#siete').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 7
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 7
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#ocho').addEventListener('click', 
    () => {
        if (cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 8
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 8
            cifra2 += 1
            mostrarVisorNum2() 
        }
    }
)

document.querySelector('#nueve').addEventListener('click', 
    () => {
        if(cifra1 <= 5 && !llenaCifra1) {
            num1[cifra1] = 9 
            cifra1 += 1
            mostrarVisorNum1()
        } else if(cifra2 <= 5 && !llenaCifra2){
            num2[cifra2] = 9
            cifra2 += 1
            mostrarVisorNum2()
        }
    }
)

/* ******************* Fin escucha Teclas numéricas************************* */

// ------------------   Inicio Operadores aritméticos  ---------------
document.querySelector('#sumar').addEventListener('click', () => {
    llenaCifra1 = true 
    ultimoOperador = 'sumar'
})

document.querySelector('#restar').addEventListener('click', () => {
    llenaCifra1 = true 
    ultimoOperador = 'restar'

})

document.querySelector('#multiplicar').addEventListener('click', () => {
    llenaCifra1 = true 
    ultimoOperador = 'multiplicar'

})

document.querySelector('#dividir').addEventListener('click', () => {
    llenaCifra1 = true 
    ultimoOperador = 'dividir'
    
})

// ------------------   Fin Operadores aritméticos  ------------------

// ------------------  Desplegar en el visor -------------------------
function mostrarVisorNum1() {
    resultadoPantalla = num1.join("")
    visor.innerHTML = resultadoPantalla
}
  
function mostrarVisorNum2() {
    resultadoPantalla = num2.join("")
    visor.innerHTML = resultadoPantalla
}
// ---------------------------------------------------------------------



// -------- Calcula el resultado según el operador aritmético ----------
document.querySelector('#resultado').addEventListener('click', () => {
    llenaCifra2 = true

    let operando1 = num1.join("")
    operando1 = operando1 - 0;

    let operando2 = num2.join("")
    operando2 = operando2 - 0;

    if(ultimoOperador == 'sumar') {
        resultadoPantalla = parseFloat(operando1 + operando2)
    } else if (ultimoOperador == 'restar') {
        resultadoPantalla = parseFloat(operando1 - operando2)
    } else if( ultimoOperador == 'multiplicar') {
        resultadoPantalla = operando1 * operando2
    } else if (ultimoOperador == 'dividir'){
        resultadoPantalla = parseFloat(operando1 / operando2)
    }

    visor.innerHTML = resultadoPantalla

    resultadoPantalla = 0
    llenaCifra1 = false
    llenaCifra2 = false
    cifra1 = 0
    cifra2 = 0
    num1 = []
    num2 = []
})
// -------------------------------------------------------------------------

// ------------------------  cancela  --------------------------------------
document.querySelector('#cancelar').addEventListener('click', () => {
    resultadoPantalla = 0
    llenaCifra1 = false
    llenaCifra2 = false
    cifra1 = 0
    cifra2 = 0
    num1 = []
    num2 = []
    visor.innerHTML = resultadoPantalla
})
// -------------------------------------------------------------------------


