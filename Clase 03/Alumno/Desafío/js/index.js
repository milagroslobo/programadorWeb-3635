var operation = prompt(
  'Ingresá la operacion a realizar suma, resta, multiplicacion o division'
)

var numberOne = prompt('Primer número')
var numberOneParsed = parseInt(numberOne, 10)

do {
  var numberTwo = prompt('Segundo número')
  var numberTwoParsed = parseInt(numberTwo)
} while (numberTwoParsed === 0 && operation === 'division')

var message = 'el resultado es '
var resultadoSuma = numberOneParsed + numberTwoParsed
var resultadoResta = numberOneParsed - numberTwoParsed
var resultadoMultiplicacion = numberOneParsed * numberTwoParsed
var resultadoDivision = numberOneParsed / numberTwoParsed

switch (operation) {
  case 'suma':
    console.log(message + resultadoSuma)
    break
  case 'resta':
    console.log(message + resultadoResta)
    break
  case 'division':
    console.log(message + resultadoDivision)
    break
  case 'multiplicacion':
    console.log(message + resultadoMultiplicacion)
    break
}
