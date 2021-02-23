const convert = document.getElementById("convertidor");
const autonomo = document.getElementById("autonomo");
const zombie = document.getElementById("zombie");
const calculator = document.getElementById("calculadora");


convert.addEventListener("click", () =>
{
    window.location.href = "../_divisas/divisas.html";
});

autonomo.addEventListener("click", () =>
{
    window.location.href = "../_autonomo/autonomo.html";
});

zombie.addEventListener("click", () =>
{
    window.location.href = "../_zombies/zombies.html";
});

calculator.addEventListener("click", () =>
{
    window.location.href = "../_calculadora/calculadora.html";
});