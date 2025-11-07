//store all workouts in an array
const workouts = [];

//Select DOM elements
const form = document.getElementById('workoutForm');
const workoutList = document.getElementById('workoutList');

//Handle Form Submission
form.addEventListener("submit",(e) => {
e.preventDefault(); //Stop page reload

//Read input values
const name = document.getElementById('workoutName').value.trim();
const type = document.getElementById('workoutType').value;
const duration = document.getElementById('duration').value;
const date = document.getElementById('date').value;

//Create a workout object
const workout = {
    name,
    type,
    duration, 
    date
};

//Add workout to array
workouts.push(workout);

//Clear form
form.reset();

//Refresh displayed list
displayWorkouts();
});

/* ===========================================================
Function: displayWorkouts
Description: Displays the list of workouts
Parameters: None
Returns: None
==============================================================*/
function displayWorkouts(){
workoutList.innerHTML = "";

workouts.forEach((workout) => {
const listItem = document.createElement('li');
listItem.innerHTML = `
<strong>${workout.name}</strong> (${workout.type})<br>
Duration: ${workout.duration} mins <br>
Date: ${workout.date}
`;
workoutList.appendChild(listItem);
});
}

