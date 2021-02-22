// ---------------------  variables / Constan -----------------------
const idFormulario = document.getElementById("formulario")
const idImporte = document.getElementById("importe");
const idDivisa1 = document.getElementById("divisa1");
const idDivisa2 = document.getElementById("divisa2");

const valorDivisas = {
    "euros":
    {
        "euros": 1,
        "dolares": 1.2116823874653
    },
    "dolares":
    {
        "euros": 0.8252987832,
        "dolares": 1,
    },
};

// -----------  Limpiar el despliegue de resultado-----------------------
document.querySelector('#importe').addEventListener('click', () => {
    resultado.textContent = '';
});


// -----------------------  Escucha boton convertir  ---------------------
document.querySelector('#botonConvertir').addEventListener('click', () => {
    calculoCoversion([divisa1.value],[divisa2.value]);
});


// ----------------------- Calculo  -------------------------------------
const calculoCoversion = (divisa1, divisa2) => {
    // let importeConvert = idImporte.value - 0;
    let importe = idImporte.value - 0
    const fijo = valorDivisas[divisa1][divisa2]
    // const fijo = valorDivisas[divisa1]
    const total = importe * fijo;
    let simbolo = ''
    if(divisa2 == 'euros') {
        simbolo = '€'
    } else {
        simbolo = '$'
    }
    resultado.textContent = "La conversion es de " + simbolo + total.toLocaleString();
};
