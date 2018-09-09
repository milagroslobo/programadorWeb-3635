function Student (firstName, lastName, dni, email) {
  this.firstName = firstName

  this.lastName = lastName

  this.dni = dni

  this.email = email

  var id = Math.random()

  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    if (!firstName && lastName) {
      return lastName
    } else if (!lastName && firstName) {
      return firstName
    } else if (firstName && lastName) {
      return firstName + ' ' + lastName
    } else {
      return ''
    }
  }
}

var oldStudents = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

for (var i = 0; i < oldStudents.length; i++) {
  oldStudent = oldStudents[i]
  newStudent = new Student(
    oldStudent.firstName,
    oldStudent.lastName,
    oldStudent.dni,
    oldStudent.email
  )
  console.log(newStudent(), newStudent.getFullName())
}

function createStudentNode () {
  var listNode = document.createElement('ul')
  listNode.className = 'list'

  var liNode = document.createElement('li')
  liNode.className = 'list-group-item'

  for (var i = 0; i < oldStudents.length; i++) {
    liNode.innerHTML = oldStudents[i]

    listNode.appendChild(liNode)
  }
}

var studentNode = createStudentNode(oldStudents)
