var submitButton = document.getElementById('button')

submitButton.onclick = validateAge

function validateAge (event) {
  var ageNode = document.getElementById('age')

  var value = ageNode.value

  if (value < 18) {
    console.log('Es menor de edad')
  } else {
    console.log('Es mayor de edad')
  }
}

// function showMessage (event) {
//   var emailNode = document.getElementById('email')

//   var value = emailNode.value

//   // if (value.length < 5) {
//   //   console.log('Email muy corto')
//   // } else {
//   //   console.log('Email correcto')
//   // }
// }
