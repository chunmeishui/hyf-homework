//question 1:Item array removal------
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1)
    }
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


//question 2: 8 hours and 38 minutes
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
const travelTime = getTravelTime(travelInformation);
function getTravelTime() {
    let result = travelInformation.destinationDistance / travelInformation.speed; //8.64
    return Math.floor(result) + " hours and " + Math.floor((result - Math.floor(result)) * 60) + " minutes.";
}
console.log(travelTime);

//question 3:Series duration of my life---------
const seriesDurationsPercent = [];
const seriesDurations = [
    {
        title: "Run, brothers",
        days: 27,
        hours: 12,
        minutes: 24,
    },
    {
        title: "Movie&TV Awards",
        days: 43,
        hours: 10,
        minutes: 24,
    },
    {
        title: "MTV Videos Music Awards",
        days: 46,
        hours: 14,
        minutes: 24,
    },
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    }
];

function logOutSeriesText(seriesDurations) {
    // write code here
    let outputText = "";
    let percent = 0;
    let sum = 0;
    for (const newSeries of seriesDurations) {
        //count the percent of each series
        percent = (newSeries.days * 24 * 60 + newSeries.hours * 60 + newSeries.minutes) * 100 / (80 * 365 * 24 * 60);
        //push each percent to an array
        seriesDurationsPercent.push(percent);
        //out put percent
        outputText = outputText + newSeries.title + " took " + Math.floor(percent * 100) / 100 + " % of my life\n\n";


    }

    console.log(outputText);
    for (let i = 0; i < seriesDurationsPercent.length; i++) {
        sum += Math.floor(seriesDurationsPercent[i] * 100) / 100;
    }
    console.log("All series took " + sum + " % of my life.");
}
logOutSeriesText(seriesDurations);

// this is the example below--------
const seriesDurations1 = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    }
];

function logOutSeriesText1(seriesDurations) {
    // write code here
    const percent = (seriesDurations1[0].days * 24 * 60 + seriesDurations1[0].hours * 60 + seriesDurations1[0].minutes) * 100 / (80 * 365 * 24 * 60);

    return seriesDurations1[0].title + " took " + Math.floor(percent * 100) / 100 + " % of my life ";
}

console.log(logOutSeriesText1(seriesDurations1)); // logs out the text found above


//question 4:NOnoN0nOYes (Note taking app)-------------

const notes = [];
// save a note------------------------
function saveNote(content, id) {
    notes.push({
        "content": content,
        "id": id
    })
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


//Get a note------------
function aNote(id) {
    // get the object with name of id
    for (const getId of notes) {
        if (getId.id === id) {
            return getId;
        }
    } return "Error string";
}

const firstNote = aNote(2);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


//Log out notes---------
function logOutNotesFormatted(notes) {
    // your code here
    for (const notex of notes) {
        console.log("The note with id:" + notex.id + "," + "has the following note text:" + notex.content + " ");
    }

}

logOutNotesFormatted(notes); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry



//Unique feature-------------
//judge the same id ,if already have that id, we can not add same id.
function savedNote(content, id) {
    let idExistence = false;
    //judge the activities is true or false
    for (const checkId of notes) {
        if (id === checkId.id) {
            idExistence = true;
            break;
        }
    }
    //judge two codition true or false----
    if (idExistence === false) {
        notes.push({
            "content": content,
            "id": id
        })
        console.log("this id is added successfully");
    }
    else {
        return "already have this id";
    }
}

//question 5:Adding an activity------------------
const activities = [];
//get the today's date----
let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = date.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
//Adding an activity-----------
function addActivity(date, activity, duration) {
    activities.push({
        "date": date,
        "activity": activity,
        "duration": duration
    })
}

addActivity(today, "Youtube", 30);
addActivity(today, "facebook", 60);
addActivity("13/12/2021", "html", 20);
addActivity("10/12/2021", "css", 50);
addActivity("10/12/2021", "Javascript", 86);
console.log(activities);

//Show my status
function showStatus(activities) {
    let sumTime = 0;
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
    }
    for (const insideActivities of activities) {

        sumTime += insideActivities.duration;

        console.log("You have added " + activities.length + " activities ." + " " + "They amount to " + sumTime + " min. of usage.");
        //Usage limit--------
        if (sumTime > 120) {

            console.log("You have reached your limit, no more smartphoning for you!");
        }
    }
}
showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"

//Extra feature-----------
//only showing the number of actitivies for that specific day

function showStatus1(activities) {
    const todayActivites = [];
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
    }
    for (const tdActivites of activities) {
        if (tdActivites.date === today) {
            todayActivites.push(tdActivites);
        }
        console.log(`You have added ${todayActivites.length} activities today`);
    }
}
showStatus1(activities);

//calculating the activity a user has spent the most time on.

function activityMax(array) {
    let maxIndex = 0;
    let maxActivity = array[0].duration;
    for (let i = 1; i < array.length; i++) {
        if (maxActivity <= array[i].duration) {
            maxActivity = array[i].duration
            maxIndex = i;
        }
    }
    return maxIndex;
}
let index = activityMax(activities);

console.log(`The most time on: ${activities[index].activity} and the duration is: ${activities[index].duration}`);

