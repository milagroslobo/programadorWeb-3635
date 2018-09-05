var testList = [ 'CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS' ]

function setLocalList (key, testList) {
  if (typeof key === 'string' && Array.isArray(testList)) {
    var stringifyStudents = JSON.stringify(testList)

    localStorage.setItem(key, stringifyStudents)
  }
}

setLocalList('studentsList', testList)

setLocalList('pato', [ 1, 2, 3, 45 ])

setLocalList(2, [ 1, 2, 3, 45 ])

setLocalList('pato', {
  name: 'pepe'
})
