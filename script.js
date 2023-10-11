// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').on('click', function(){
    //gets users input
    var description = $(this).siblings('.description').val();
    //
    var timeBlockId = $(this).closest('.time-block').attr('id')

    localStorage.setItem(timeBlockId,description);
    console.log('Note: '+ description + '. ' + 'Time: ' + timeBlockId);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  $('.time-block').each(function(){
    //has us use military time to simplify the equation
    var currentTime = parseInt(dayjs().format('H'))
    console.log(this)
    var timeDiv = $(this)
    /// when console logged it removes the id portion and displays the time in military time
    var blockTime = parseInt(timeDiv.attr('id').replace("hour-","")) 
    console.log(blockTime)
    if(currentTime === blockTime){
      timeDiv.addClass("present")
    }else if(currentTime > blockTime){
      timeDiv.addClass("past")
    }else{
      timeDiv.addClass("future")
    }
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //what helps save the values of the text area so when it is refreshed that data is not lost
$('.time-block').each(function(){
    //gets id from the time block
    var timeBlockId = $(this).attr('id');

    //retrieves saved information
    var noteDescription = localStorage.getItem(timeBlockId);

    //sets the value of that text area
    $(this).find('.description').val(noteDescription);

})

  // TODO: Add code to display the current date in the header of the page.
  //displays time ontop of page
  var currentDay = dayjs()
$('#currentDay').text(currentDay.format('dddd, MMMM D'));
});
