// using Moment Library to show the current date at the top of the screen
const currentDayEl = $("#currentDay"); 

var currentDay = moment().format("MMMM Do YYYY"); 
currentDayEl.text(currentDay); 

// save input in time blocks to Local Storage when user clicks the "Save Button"
const saveBtnEl = $(".saveBtn"); 

saveBtnEl.on("click", function() {
    var input = $(this).siblings("textarea").val(); 
    // by pulling the ID from the div parent element & storing in a variable, it allows that item to be stored with a unique name in Local Storage based on which timeblock it was entered into
    var storageKey = $(this).parent().attr("id"); 
    localStorage.setItem(storageKey, JSON.stringify(input));
    
});

// load data from Local Storage when user comes back to this page & show in the corresponding time block
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
    //note: the Moment Library uses military time
    
$(".time-block").each(function() {
    // for each time-block, we are going to store the number from the ID (i.e., "9" from ID "hour-9") into the blockHour variable
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    // we will then compare blockHour to currentHour to determine how to color code that block 
    if(currentHour < blockHour) {
        $(this).addClass("future"); 

    } else if(currentHour > blockHour) {
        $(this).addClass("past");
    } else {
        $(this).addClass("present"); 
    }
});






