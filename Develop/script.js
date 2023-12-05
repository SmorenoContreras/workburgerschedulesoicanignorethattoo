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

// gets from local storage
$("#hour-9 textarea").val(localStorage.getItem("hour-9"))
$("#hour-10 textarea").val(localStorage.getItem("hour-10"))
$("#hour-11 textarea").val(localStorage.getItem("hour-11"))
$("#hour-12 textarea").val(localStorage.getItem("hour-12"))
$("#hour-13 textarea").val(localStorage.getItem("hour-13"))
$("#hour-14 textarea").val(localStorage.getItem("hour-14"))
$("#hour-15 textarea").val(localStorage.getItem("hour-15"))
$("#hour-16 textarea").val(localStorage.getItem("hour-16"))
$("#hour-17 textarea").val(localStorage.getItem("hour-17"))

//Jquery that displays the current time with month day and year
$('#currentDay').text(dayjs().format('MMM DD YYYY'))

});