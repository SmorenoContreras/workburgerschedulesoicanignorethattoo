//Displays current time.
var currentTime = dayjs().hour()

//function for button also sets items for storage
$(function () {

  $(".saveBtn").on('click', function () {

    var key = $(this).parent().attr('id')

    var value = $(this).siblings('textarea').val()

    localStorage.setItem(key, value)

  })

})