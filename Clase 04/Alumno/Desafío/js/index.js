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
      orderNumber = i
    }
  }

  return -1
}

console.log(studentSearch(search))
