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









