function getLocalList (key) {
  if (typeof key === 'string') {
    var savedList = localStorage.getItem(key)

    if (savedList) {
      var parsedList = JSON.parse(savedList)

      return parsedList
    } else {
      return []
    }
  }
}

function setLocalList (key, testList) {
  if (typeof key === 'string' && Array.isArray(testList)) {
    var stringifyStudents = JSON.stringify(testList)

    localStorage.setItem(key, stringifyStudents)
  }
}

var studentsList = getLocalList('studentsList')

var firstName = prompt('Ingresá nombre')

studentsList.push({
  firstName: firstName
})

setLocalList('studentsList', studentsList)

console.log(studentsList)
