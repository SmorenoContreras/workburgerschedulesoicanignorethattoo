//Displays current time.
var currentTime = dayjs().hour()

//function for button also sets items for storage
$(function () {

  $(".saveBtn").on('click', function () {

    var key = $(this).parent().attr('id')

    var value = $(this).siblings('textarea').val()

    localStorage.setItem(key, value)

  })

//this is to run through the time block and add classes depending on time
$('.time-block').each(function () {

  var timeBlockHour = parseInt($(this).attr('id').split('-')[1])

  if (timeBlockHour < currentTime) {

    $(this).addClass("past")
  } else if (timeBlockHour === currentTime) {

    $(this).addClass("present")
  } else {
    $(this).addClass("future")
  }

})

