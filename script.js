//Esto es un pop-up
//alert("Hola mundo")

//Variables. Se agrega el let para que identifique que ya fueron utilizadas y no me las deje pisar. No hace falta inicializarlas como en JAVA

let alumno = "" 
let nota = 9

//Constantes
const entidad = "Gobierno Ciudad"
//entidad = "Nación"

console.log("El nombre del alumno es " + alumno + " y su nota es " + nota)

//Variables que pueden utilizarse
let nombreApellido = "Juan batman"
let User = "Juan Carlos"
let _usuario
let $user
let nombre_apellido = "Snake case"

//Tipos de STRING
let str1 = "String con comillas dobles"
let str2 = 'Sting con comillas simples'
//let str3 = ´backtriks´

let str4 = str1 + " y " + str2
//let str5 = ´${str1} y ${str2}´
console.log(str4)

/*//Tipos de Number
let num1 = 2
let num2 = 3.14

//OPERACIONES BÁSICAS
let num1 = 2
let num2 = 3.14

let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2
let division = num1 / num2

console.log("La suma es:" +suma)
console.log("La resta es:" +resta)
console.log("La multiplicacion es:" +multiplicacion)
console.log("La division es:" +division)
*/

//Ahora quiero que el usuario ingrese un valor
let num1 = parseInt(prompt("Ingresa el primer número")) //Se parsea para que devuelva un entero
let num2 = parseFloat(prompt("Ingresa el segundo número")) //Se parsea para que devuelva un flotante

//Operaciones básicas
console.log(num1 + num2)

let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2
let division = num1 / num2

console.log("La suma es:" +suma)
console.log("La resta es:" +resta)
console.log("La multiplicacion es:" +multiplicacion)
console.log("La division es:" +division)

//Otras formas de mostrar el resultado
alert("La suma es:" +suma)
document.write(suma)