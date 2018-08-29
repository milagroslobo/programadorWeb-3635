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

var newStudent = new Student('Juan', 'Perez', 45678987, 'juan@gmail.com')
console.log(newStudent.getFullName(), newStudent.getId())

var newStudent1 = new Student('Ana', 'Fernandez', 45678989, 'ana@gmail.com')
console.log(newStudent1.getFullName())

var newStudent2 = new Student('Pedro', 'Marmol', 45678956, 'pedro@gmail.com')
console.log(newStudent1.getFullName())
