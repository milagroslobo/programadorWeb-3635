import { getData } from '../utils/ajax'
function peopleController () {
  console.log('Se cargo el controller de people')

  var tableBodyNode = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {
      var people = data.results

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]
        var url = person.url
        url = url.replace('https://swapi.co/api/people/', '')
        var id = url.replace('/', '')
        console.log(id)
        console.log(person)

        tableBodyNode.append(
          ' <tr id="' +
            id +
            '"><th scope="row">' +
            id +
            '</th><td>' +
            person.name +
            '</td><td>' +
            genderTranslate(person.gender) +
            '</td><td>' +
            person.height +
            ' cm</td><td>' +
            person.mass +
            ' kg</td><td>' +
            eyeTranslate('ES', person.eye_color) +
            '</td><td><button type="button" class="btn btn-success">Guardar</button></td></tr>'
        )
      }
      if (data.next) {
        seeMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        seeMoreButton.remove()
      }
    }
  }
}

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

export default peopleController
