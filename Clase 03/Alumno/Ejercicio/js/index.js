var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var message

for (var i = 0; i < daysOfTheWeek.length; i++) {
  message = daysOfTheWeek[i]

  switch (daysOfTheWeek[i]) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log(message + ' es día hábil')
      break
    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      console.log(message + ' es fin de semana!!')
      break
    default:
      console.log(message + ' es día inválido')
  }
}
