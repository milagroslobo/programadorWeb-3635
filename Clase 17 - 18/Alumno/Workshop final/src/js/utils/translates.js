function genderTranslate (gender) {
  switch (gender) {
    case 'male':
      return 'Masculino'
      break
    case 'female':
      return 'Femenino'
      break
    case 'n/a':
      return 'n/a'
      break
    default:
      return gender
      break
  }
}

var TRANSLATES = {
  ES: {
    blue: 'Azul',
    yellow: 'Amarillo',
    red: 'Rojo'
  },
  EN: {
    blue: 'Blue',
    yellow: 'Yellow',
    red: 'Red'
  },
  PT: {
    blue: 'Azul',
    yellow: 'Amarelo',
    red: 'Vermelho'
  }
}

function eyeTranslate (lang, eyeColor) {
  return TRANSLATES[lang][eyeColor] || eyeColor
}
export { genderTranslate, eyeTranslate }
