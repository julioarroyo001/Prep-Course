// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;


// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
   var saludo =  'hola, ' + str;
     return saludo
}
devolverString("Mario");


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
   var sumNum = x + y;
  

  return sumNum;
}
 suma(5,6);


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resNUm= x-y;
  return resNUm;
}
resta(5,6);


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var mulNUm= x-y;
  return mulNUm;
}
multiplica(3, 5)


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divNUm= x-y;
  return divNUm;
 }
 divide(6, 2)



   
 function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y){
    var a =true;
    return a
   }
    var a =false;
    return a
}

sonIguales(5,5);



function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var cadStr1 = str1.length;
  var cadstr2 = str2.length;

if (cadStr1==cadstr2){
return true;
}
return false;
}



function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>=90){
    return false;
    }
    return true;
}


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num<=50){
    return false;
    }
    return true;
}

  


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:

  return x % y ;
  
}




function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
   var mul = num % 2;
     if ( mul === 0 ){
      return 'true';
  }
  return 'false';
}




function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var mul = num % 2;
     if ( mul === 0 ){
      return 'false';
  }
  return 'true';
  
}




function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var x = Math.pow(num, 2); 
  return x
  
}



function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var z = Math.pow(num, 3); 
  return z
  
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var z = Math.pow(num, exponent)
  return z 
}



function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var x = Math.round(num)
  return x
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
 var arr = Math.ceil(num)
 return arr
}

function numeroRandom(min, max) {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  // metodo Math.random genera numero aleatorio entre 1 y 0 
     return Math.floor((Math.random() * (max - min + 1)) + min);
}


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero == 0){
   alert ("false")
    } else if (numero>0){
      alert("alert el numero es positivo.");
    } else if (numero<0){
      alert("alert el numero es negativo..");
  }
}




function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var cadena = str+'!'
return cadena 
}




function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreApellido = (nombre +', '+ apellido)
  return nombreApellido
}

combinarNombres('perro','gato')

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var nomHola = 'hola ' + nombre +'!'
  return nomHola
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  areaRectangulo = alto * ancho 
  return areaRectangulo

}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  perimetro= lado *4
  return perimetro
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
areaTriangulo = base * altura /2 
return areaTriangulo
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
 var dolarCambio= euro *  0.92
 return dolarCambio
}




function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí 
var long=letra.length;
  
          for (var i = 0; i<long; i++) {
              if(i==0){
                  //console.log(long)
                  letra.charAt(i);
                  //console.log(i)
                  var  caracter =  letra.charAt(i);
              if (letra[i]=='a' || letra[i]=='e' || letra[i]=='i' || letra[i]=='o' || letra[i]=='u'){
                 // console.log(caracter);
                  return 'Es Vocal';
              }
              return 'Dato Incorrecto'
              }
          
          }  
 
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
