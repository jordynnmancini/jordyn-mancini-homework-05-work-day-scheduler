// using Moment to show the current date at the top of the screen
const currentDayEl = $("#currentDay"); 

var currentDay = moment().format("MMMM Do YYYY"); 
currentDayEl.text(currentDay); 

// save input to local storage 
const saveBtnEl = $(".saveBtn"); 

saveBtnEl.on("click", function() {
    var input = $(this).siblings("textarea").val(); 
    var storageKey = $(this).parent().attr("id"); 
    localStorage.setItem(storageKey, JSON.stringify(input));
});

// load data from Local Storage when user comes back to this site
$("#hour-9 textarea").val(JSON.parse(localStorage.getItem("hour-9")));
$("#hour-10 textarea").val(JSON.parse(localStorage.getItem("hour-10")));
$("#hour-11 textarea").val(JSON.parse(localStorage.getItem("hour-11")));
$("#hour-12 textarea").val(JSON.parse(localStorage.getItem("hour-12")));
$("#hour-1 textarea").val(JSON.parse(localStorage.getItem("hour-1")));
$("#hour-2 textarea").val(JSON.parse(localStorage.getItem("hour-2")));
$("#hour-3 textarea").val(JSON.parse(localStorage.getItem("hour-3")));
$("#hour-4 textarea").val(JSON.parse(localStorage.getItem("hour-4")));
$("#hour-5 textarea").val(JSON.parse(localStorage.getItem("hour-5")));








