var gender = prompt("Ingrese Femenino, Masculino u otros")

var age = prompt("Ingrese su edad")

if (age >= 18) {
  switch (gender) {
    case "femenino":
    case "Femenino":
      console.log("Sra. usted es mayor de edad puede ingresar")
      break
    case "masculino":
    case "Masculino":
      console.log("Sr. usted es mayor de edad puede ingresar")
      break
    case "otros":
      console.log("Sx. usted es mayor de edad puede ingresar")
      break
  }
} else {
  switch (gender) {
    case "femenino":
    case "Femenino":
      console.log("Sra. usted es menor de edad no puede ingresar")
      break
    case "masculino":
    case "Masculino":
      console.log("Sr. usted es menor de edad no puede ingresar")
      break
    case "otros":
      console.log("Sx. usted es menor de edad no puede ingresar")
      break
  }
}