console.log("test")

// Create a header/hero area that welcomes users to the application and displays the current time and date using day.js with `setInterval()`.
function updateTimer() {
    $("#time-heading").text(dayjs().format("DD MM YYYY [at] hh:mm:ss a"));
  }
  // Update the timer every second
  setInterval(updateTimer, 1000);
  // Initial update
  updateTimer();

$("form").on("submit",function (event) {
    event.preventDefault();
    var newProjectName = $("#newProjectName").val();
    var newProjectType = $("#newProjectType").val();
    var newProjectHourly = $("#newProjectHourly").val();
    var newProjectDue = $("#newProjectDue").val();
    console.log('newProjectName', newProjectName)
    console.log('newProjectType', newProjectType)
    console.log('newProjectHourly', newProjectHourly)
    console.log('newProjectDue', newProjectDue)


})