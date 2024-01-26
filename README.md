# Mini Project: Project Tracker

## Overview

This mini-project involves collaborating with team members to develop a project tracker application using Bootstrap, jQuery, jQueryUI, Day.js, and Google Fonts. Allocate tasks among team members to complete the following phases:

## Instructions

This mini-project consists of four tasks. Focus on the first three tasks to achieve the Minimum Viable Product (MVP).

Open and preview website : 

### Task 1: HTML Build

#### Header and Hero Area
- Create a header/hero area welcoming users to the application, displaying the current time and date using Day.js with `setInterval()`.
- Develop a Bootstrap card component explaining app instructions with a button to open a Bootstrap modal dialog.

#### Modal and Form
- The modal should include a form asking users to fill in project data, such as project name, project type (using a `<select>` drop-down), hourly wage, and project due date (employ jQuery UI's datepicker with a minimum date setting).
- Incorporate a Bootstrap table to display project information with columns for project name, project type, hourly wage, due date, days until the due date (calculated using Day.js), and estimated total earned (hourly wage at 8 hours per day multiplied by the days until the due date).
- Follow guidelines, ensure proper identification of elements for JavaScript/jQuery interaction, and refer to Bootstrap documentation.

### Task 2: Capture Form Data

- Use jQuery to set up functionality capturing form input elements on submit.
- Save references to DOM elements in variables (e.g., `var projectFormEl = $("#project-form");`) for later use.
- Attach a submit event listener to the `<form>` element.
- Upon submission, capture input values and pass them to a function for printing project data.

### Task 3: Print Project Data to Page

- Develop a function accepting four input fields' data as arguments.
- Create a table row (`<tr>`) element and save it to a variable.
- Generate table detail (`<td>`) elements for each column created in Task 1.
- Use Day.js to calculate the days until the due date and estimate total earned amount based on an assumed eight-hour workday.
- Append all `<td>` elements to the table row and append the entire row to the `<tbody>` element on the page.
- Ensure modal closure upon completion.

### Task 4: Delete a Project From the Table

- Update the table to include an additional column without a name.
- When generating a new `<tr>` for a project, add an extra `<td>` containing a delete button.
- Use jQuery event delegation to attach an event listener to each delete button, removing the parent `<tr>` element from the page upon click.

## Setup
```
git clone git@github.com:jjbstudent/Project-Tracker-.git
code .
```

## Contribution 

- Third-Party APIs Day 4
- https://getbootstrap.com/docs/5.3/getting-started/introduction/
- https://getbootstrap.com/docs/5.3/components/modal/#how-it-works
- https://day.js.org/en/
- https://day.js.org/docs/en/display/format

## Licence

MIT licence 