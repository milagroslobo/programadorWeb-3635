var diaIngresado = prompt("Qué día es?")

switch (diaIngresado) {
  case "lunes":
  case "Lunes":
    console.log("Día hábil")
    break
  case "martes":
  case "Martes":
    console.log("Día hábil")
    break
  case "lunes":
  case "Lunes":
    console.log("Día hábil")
    break
  case "Miércoles":
  case "Miercoles":
  case "miércoles":
  case "miercoles":
    console.log("Día hábil")
    break
  case "jueves":
  case "Jueves":
    console.log("Día hábil")
    break
  case "viernes":
  case "Viernes":
    console.log("Día hábil")
    break
  case "sábado":
  case "Sábado":
  case "sabado":
  case "Sabado":
    console.log("Fin de semana!!!")
    break
  case "Domingo":
  case "domingo":
    console.log("Fin de semana!!")
    break
  default:
    console.log("día inválido")
}