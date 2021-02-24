// using Moment to show the current date at the top of the screen
const currentDayEl = $("#currentDay"); 

var currentDay = moment().format("MMMM Do YYYY"); 
currentDayEl.text(currentDay); 

// save input in time blocks to Local Storage 
const saveBtnEl = $(".saveBtn"); 

saveBtnEl.on("click", function() {
    var input = $(this).siblings("textarea").val(); 
    var storageKey = $(this).parent().attr("id"); 
    localStorage.setItem(storageKey, JSON.stringify(input));
});

// load data from Local Storage when user comes back to this site & show in the corresponding time block
$("#hour-9 textarea").val(JSON.parse(localStorage.getItem("hour-9")));
$("#hour-10 textarea").val(JSON.parse(localStorage.getItem("hour-10")));
$("#hour-11 textarea").val(JSON.parse(localStorage.getItem("hour-11")));
$("#hour-12 textarea").val(JSON.parse(localStorage.getItem("hour-12")));
$("#hour-13 textarea").val(JSON.parse(localStorage.getItem("hour-13")));
$("#hour-14 textarea").val(JSON.parse(localStorage.getItem("hour-14")));
$("#hour-15 textarea").val(JSON.parse(localStorage.getItem("hour-15")));
$("#hour-16 textarea").val(JSON.parse(localStorage.getItem("hour-16")));
$("#hour-17 textarea").val(JSON.parse(localStorage.getItem("hour-17")));

// color code time blocks based on time of day 
var currentHour = moment().hours(); 

$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if(currentHour < blockHour) {
        $(this).addClass("future"); 

    } else if(currentHour > blockHour) {
        $(this).addClass("past");
    } else {
        $(this).addClass("present"); 
    }
});






