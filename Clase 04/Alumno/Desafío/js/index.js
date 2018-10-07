var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var result
var orderNumber
var search = prompt('alumno')

function studentSearch (search, studentsList) {
  for (var i = 0; i < studentsList.length; i++) {
    result = studentsList[i]
    if (search === result.firstName || search === result.lastName) {
      return i
    }
  }

  return -1
}

var search = 'Ana'

var result = studentSearch(search, studentsList)

if (result !== -1) {
  console.log('El usuario ' + search + ' está en la posición ' + result)
} else {
  console.log('No se encontro el usuario ' + search)
}
