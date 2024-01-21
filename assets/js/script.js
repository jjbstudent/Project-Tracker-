console.log("test")

// Create a header/hero area that welcomes users to the application and displays the current time and date using day.js with `setInterval()`.
function updateTimer() {
    $("#time-heading").text(dayjs().format("DD MM YYYY [at] hh:mm:ss a"));
  }
  // Update the timer every second
  setInterval(updateTimer, 1000);
  // Initial update
  updateTimer();


// 3. The modal should contain a form asking users to fill in the following data:

//     * The name of the project

//     * The type of project (use a `<select>` drop-down)

//     * The hourly wage for the project

//     * The due date for the project (use jQuery UI's datepicker with a minimum date setting in place)

// 4. Include a Bootstrap table that the project's information can be printed to with columns for the following data:

//     * Project name

//     * Project type

//     * Hourly wage

//     * Due date

//     * Days until the due date (use day.js to calculate)

//     * Estimated total earned (hourly wage at 8 hours per day multiplied by the number of days until the due date)
