var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

function averageExam (examResults) {
  var sum = 0
  var result

  for (var i = 0; i < examResults.length; i++) {
    result = examResults[i]
    sum = sum + result
  }

  var average = sum / examResults.length
  return average
}

console.log(averageExam(examResults))
