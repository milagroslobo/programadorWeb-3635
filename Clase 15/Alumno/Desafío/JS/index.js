$(document).ready(function () {
  console.log('Init app')

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }
  var mainListNode = $('#mainList')

  var showMoreButton = $('#showMore')

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {
      console.log('Ok los personajes son:', data)
      var people = data.results

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]

        mainListNode.append(
          '<li class="list-group-item">' + person.name + '</li>'
        )
      }
      if (data.next) {
        showMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        showMoreButton.remove()
      }
    }
  }
})
