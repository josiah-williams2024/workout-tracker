//store all workouts in an array
const workouts = [];
var editingID = null;

//Select DOM elements
const form = document.getElementById('workoutForm');
const workoutList = document.getElementById('workoutList');

const workoutTypeSelect = document.getElementById("workoutType");
const durationSection = document.getElementById("durationSection");
const strengthSection = document.getElementById("strengthSection");

// Switch fields based on workout type
workoutTypeSelect.addEventListener("change", updateFormFields);

function updateFormFields() {
    const type = workoutTypeSelect.value;

    if (type === "Cardio") {
        durationSection.style.display = "block";
        strengthSection.style.display = "none";

        document.getElementById("duration").required = true;
        document.getElementById("setNumber").required = false;
        document.getElementById("repNumber").required = false;
    }
    else if (type === "Strength") {
        durationSection.style.display = "none";
        strengthSection.style.display = "block";

        document.getElementById("duration").required = false;
        document.getElementById("setNumber").required = true;
        document.getElementById("repNumber").required = true;
    }
    else if (type === "Flexibility") {
        durationSection.style.display = "block";
        strengthSection.style.display = "none";

        document.getElementById("duration").required = true;
        document.getElementById("setNumber").required = false;
        document.getElementById("repNumber").required = false;
    }
}

// Call once on page load
updateFormFields();
//Handle Form Submission
form.addEventListener("submit",(e) => {
e.preventDefault(); //Stop page reload

//Read input values
const name = document.getElementById('workoutName').value.trim();
const type = document.getElementById('workoutType').value;
const duration = document.getElementById('duration').value;
const date = document.getElementById('date').value;
const sets = document.getElementById("setNumber").value;
const reps = document.getElementById("repNumber").value;

var workout;
//Check if we are editing or not
if(editingID === null){
    //Create a workout object
 workout = {
    id: Date.now(), // UNIQUE ID
    name,
    type,
    duration, 
    date
 
};

if (type === "Strength") {
    workout.sets = sets;
    workout.reps = reps;
} else {
    workout.duration = duration;
}

//Add workout to array
workouts.push(workout);
} else {
   workout = workouts.find(w => w.id === editingID);

    workout.name = name;
    workout.type = type;
    workout.date = date;

    if (type === "Strength") {
        workout.sets = sets;
        workout.reps = reps;
        delete workout.duration; // remove old duration if switching from cardio
    } else {
        workout.duration = duration;
        delete workout.sets;  // remove old values if switching from strength
        delete workout.reps;
    }

    editingID = null;
}


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

        let details = `
            <strong>${workout.name}</strong> (${workout.type})<br>
            Date: ${workout.date} <br>
        `;

        if (workout.type === "Strength") {
            details += `Sets: ${workout.sets} | Reps: ${workout.reps}<br>`;
        } else {
            details += `Duration: ${workout.duration} mins<br>`;
        }

        listItem.innerHTML = `
            ${details}
            <button onclick="editWorkout(${workout.id})">Edit</button>
            <button onclick="deleteWorkout(${workout.id})">Delete</button>
        `;

        workoutList.appendChild(listItem);
    });
}
/* ===========================================================
Function: deleteWorkout
Description: Delete the workout by index
Parameters: id
Returns: None
==============================================================*/
function deleteWorkout(id){
    const index = workouts.findIndex(w => w.id == id); //find item by array index 
    workouts.splice(index,1); //remove item from workout array
    displayWorkouts();
}
/* ===========================================================
Function: editWorkout
Description: Edit the workout by id
Parameters: id
Returns: None
==============================================================*/
function editWorkout(id){
    const workoutToEdit = workouts.find(w => w.id == id);

    document.getElementById('workoutName').value = workoutToEdit.name;
    document.getElementById('workoutType').value = workoutToEdit.type;
    document.getElementById('date').value = workoutToEdit.date;

    if (workoutToEdit.type === "Strength") {
        document.getElementById('setNumber').value = workoutToEdit.sets;
        document.getElementById('repNumber').value = workoutToEdit.reps;
    } else {
        document.getElementById('duration').value = workoutToEdit.duration;
    }

    // VERY IMPORTANT → show correct fields
    updateFormFields();

    editingID = id;
}

