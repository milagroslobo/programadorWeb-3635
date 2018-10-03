$(document).ready(function () {
  console.log('Init HP app')

  $('.btn').click(function () {
    console.log('click')
    $(this).parent().parent().hide(2000)
  })
})
