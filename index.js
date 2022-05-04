//voy a crear un programa que ingresando "x" numero
// me muestre en una alerta la tabla de multiplicar de ese numero//
let numero = parseInt(prompt("Ingrese un numero"))

for(let i = 1;i<=10;i++){
    let multiplicar = numero*i;

    alert(numero + "x" + i + "=" + multiplicar)
}