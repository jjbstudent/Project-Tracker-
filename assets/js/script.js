console.log("test");
// adds array to store the data locally
var projects = JSON.parse(localStorage.getItem("savedProjects")) || [];
// Create a header/hero area that welcomes users to the application and displays the current time and date using day.js with `setInterval()`.
function updateTimer() {
  $("#time-heading").text(dayjs().format("DD/MM/YYYY [at] hh:mm:ss a"));
}
// Update the timer every second
setInterval(updateTimer, 1000);
// Initial update
updateTimer();

//Create a function to print the data on the table
function printProjectData(name, type, hourly, due) {
  //1.Create element (new Table Row)
  var dueDateDayjs = dayjs(due); //added dayjs
  var daysLeft = dueDateDayjs.diff(dayjs(), "day"); //display day left
  var potentialEarnings = daysLeft * 8 * hourly; // 8 working hours per day

  var newTr = $("<tr>"); // Table Row
  var nameTd = $("<td>"); // table data
  var typeTd = $("<td>");
  var hourlyTd = $("<td>");
  var dueTd = $("<td>");
  var daysLeftTd = $("<td>");
  var earningsTd = $("<td>");
  var deleteTD = $("<td>");
  //2. add the contents/styles
  nameTd.text(name);
  typeTd.text(type);
  hourlyTd.text(hourly);
  dueTd.text(dueDateDayjs.format("DD/MM/YYYY")); //show the due date and format
  daysLeftTd.text(daysLeft);
  earningsTd.text(potentialEarnings.toFixed(2));
  deleteTD.text("X");
  deleteTD.addClass(" delete-btn"); // delete button added in TD

  //3.append (select the information you want to append)
  newTr.append(
    nameTd,
    typeTd,
    hourlyTd,
    dueTd,
    daysLeftTd,
    earningsTd,
    deleteTD
  );
  $("tbody").append(newTr); // adding the new table row within table body area
}

// When form is submitted
$("form").on("submit", function (event) {
  event.preventDefault();
  // store the values in a variable
  var newProjectName = $("#newProjectName").val();
  var newProjectType = $("#newProjectType").val();
  var newProjectHourly = $("#newProjectHourly").val();
  var newProjectDue = $("#newProjectDue").val();
  //test output with console log
  console.log("newProjectName", newProjectName);
  console.log("newProjectType", newProjectType);
  console.log("newProjectHourly", newProjectHourly);
  console.log("newProjectDue", newProjectDue);
  //once submitted set the input fields to empty
  $("#newProjectName").val("");
  $("#newProjectType").val("");
  $("#newProjectHourly").val("");
  $("#newProjectDue").val("");

  //call the print Project function
  printProjectData(
    newProjectName,
    newProjectType,
    newProjectHourly,
    newProjectDue
  );
//stores data in local storage 
  projects.push({
    name: newProjectName,
    type: newProjectType,
    hourly: newProjectHourly,
    due: newProjectDue,
  });

  // Save the updated Projects array to localStorage
  localStorage.setItem("savedProjects", JSON.stringify(projects));
});
$("table").on("click", ".delete-btn", function (event) {
  var thisButton = $(event.target);
  thisButton.parent().remove();
});
