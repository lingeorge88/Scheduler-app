// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateDisplay = $('#currentDay');
var currentDate = dayjs().format(" dddd, MMMM D, YYYY");
var saveButton = $(".saveBtn");
// Displays current date
function displayDate(){
  $("#currentDay").text(currentDate);
}
// Saving user input and time to local storage
$(document).ready(function () {
    saveButton.on("click", function(){
      
      let value = $(this).siblings(".description").val();
      let time = $(this).parent().attr('id');
      localStorage.setItem(time, value);
      console.log(time);
    })
});
//  Comparing current time to the scheduled time on the webpage and setting each background color accordingly depending if they are past, present or future.
function trackTime() {
  var timeNow = dayjs().hour();
  console.log(timeNow);
  $(".time-block").each(function(){
    var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
    console.log(blockTime);
    if(blockTime < timeNow){
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }else if(blockTime > timeNow){
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if(blockTime == timeNow){
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  })
}

displayDate();
trackTime();
// Getting time data and user input information from local storage.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));