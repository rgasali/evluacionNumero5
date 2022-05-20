//declaracion de variables
let btnCalcular = <HTMLButtonElement>document.getElementById("btnCalcular");
let imputNumero1 = <HTMLInputElement>document.getElementById("imputNumero1");
let imputNumero2 = <HTMLInputElement>document.getElementById("imputNumero2");
let imputNumero3 = <HTMLInputElement>document.getElementById("imputNumero3");
let divMostrarResultados = <HTMLDivElement>(
  document.getElementById("divMostrarResultados")
);
let valor1: number;
let valor2: number;
let valor3: number;

//declaracion de funciones

function calcularMayor(numero1: number, numero2: number, numero3: number) {
  return Math.max(numero1, numero2, numero3);
}

function calcularMenor(numero1: number, numero2: number, numero3: number) {
  return Math.min(numero1, numero2, numero3);
}

function leerMayorYMenor(numeroMayor: number, numeroMenor: number) {
  return String(
    `el numero mayor es ${numeroMayor} y el numero menor es ${numeroMenor}`
  );
}

//resto del codigo

btnCalcular.addEventListener("click", () => {
  valor1 = Number(imputNumero1.value);
  valor2 = Number(imputNumero2.value);
  valor3 = Number(imputNumero3.value);
  divMostrarResultados.innerHTML = String(
    leerMayorYMenor(
      calcularMayor(valor1, valor2, valor3),
      calcularMenor(valor1, valor2, valor3)
    )
  );
});
