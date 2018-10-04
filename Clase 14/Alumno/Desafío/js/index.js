$(document).ready(function () {
  console.log('Init HP app')

  $('.btn-primary').click(function () {
    var buttonParentParent = $(this).parent().parent()

    var id = buttonParentParent.attr('id')

    removeElementWithAnimation(id)
  })
})

function removeElementWithAnimation (id) {
  $('#' + id).click(function () {
    $(this).hide(2000, function () {
      $(this).remove()
    })
  })
}

removeElementWithAnimation(1)
console.log('funciona')
