//1.Log out the text Called after 2.5 seconds
window.addEventListener("load", loaded);
function loaded() {
    setTimeout(logout, 2500)
};
function logout() {
    console.log("Called after 2.5 second");
};
//2.Create a function that takes 2 parameters
function logoutString(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000)
}
logoutString(5, "This string logged after 5 seconds");
logoutString(3, "This string logged after 3 seconds");


//3.Create a button in html after5seconds
const clickButton = document.getElementById("myButton")
clickButton.addEventListener("click", after5seconds)
function after5seconds() {
    logoutString(5, "Called after 5 seconds")
}
//4 Create two functions and call them
const earthLogger = () => console.log("Earth");
const SaturnLogger = () => console.log("Saturn");
function PlanetLogFunction(planetLogFunction) {
    planetLogFunction();
}
PlanetLogFunction(earthLogger);
PlanetLogFunction(SaturnLogger);
//5 location
let button = document.getElementById("get-locationa");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        latText.innerText = lat.toFixed(2);
        longText.innerText = long.toFixed(2);
    });
});

//6 location in map
let buttonQ5 = document.getElementById("get-location");
let locationlink = document.querySelector('#locationlink');
buttonQ5.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        locationlink.href = `https://maps.google.com/maps?q=${lat},${long}&hl=es;z=14&amp;output=embed`;
        locationlink.innerText = `click here to see where are you in the map`
    });
});


7
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
    console.log('should be logged after 4 second');
});
runAfterDelay(2, function () {
    console.log(9 + 3);
});

//8 
let clickCountArray = [];
const doubleClick = document.getElementById("doubleClick");
//method 1
// doubleClick.addEventListener('dblclick', function (e) {
//     setTimeout(() => {
//               console.log("double clicked");
//    }, 500);
//   });
//method 2
doubleClick.addEventListener("click", doubleClickFunction);
function doubleClickFunction() {
    clickCountArray.push("click");
    if (clickCountArray.length > 1) {
        console.log("double click!");
    } else if (clickCountArray.length = 1) {
        console.log('clicked once');
    };
    //0.5s later execute this function
    setTimeout(() => {
        doubleClick.removeEventListener("click", doubleClickFunction)
    }, 500);
};

9 // funny joke or bad joke

const logFunnyJoke = () => {
    console.log("this is  a funny joke");
}
const logBadJoke = () => {
    console.log("this is  a bad joke");
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }

}
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);


//Function as a variable
//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const oneArray = () => console.log("i am fuction one");
const twoArray = () => console.log("i am fuction two");
const threeArray = () => console.log("i am fuction three");
let functionArray = [oneArray, twoArray, threeArray];
for (let i = 0; i < functionArray.length; i++) {
    functionArray[i]();
}
//Create a function as a const and try creating a function normally. Call both functions
const myVariable = () => console.log(" i am varible funtion");
function normalFunction() {
    console.log(" i am normal function");
}
myVariable();
normalFunction();
//Create an object that has a key whose value is a function. Try calling this function.
const myObject = {
    apple: function name(params) {
        console.log("i am apple in the obj function")
    }
}
myObject.apple();



//The fastest presser in this realm

//https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event
const inputTime = document.getElementById("number");
const gameButton = document.getElementById("gameButton");
const newGame = document.getElementById("newGame");
const countS = document.getElementById("countS");
const countL = document.getElementById("countL");
const winner = document.getElementById("win");
const gamePress = document.querySelector(".gameScore")
let gameTime = 0;
let sumS = 0;
let sumL = 0;
gameButton.addEventListener('click', startGame);
function startGame() {
    gameTime = Number(inputTime.value) * 1000;//get the input time
    if (gameTime === 0) {
        winner.textContent = " Pls enter the game time."
    }
    document.addEventListener('keypress', logKey);
    //this is how to get the value from keyboard
    function logKey(s) {
        if (s.key === 's') {
            sumS++;
            countS.textContent = sumS
        } else if (s.key === 'l') {
            sumL++;
            countL.textContent = sumL
        }
    }
    setTimeout(() => {
        document.removeEventListener('keypress', logKey);

    }, gameTime);
    setTimeout(() => {
        gameButton.removeEventListener('click', startGame);
        if (sumS > sumL) {
            winner.textContent = "S win !!!";
        } else if (sumS < sumL) {
            winner.textContent = "L win !!!!";
        }
        else if (sumS === 0 && sumL === 0 && gameTime > 0) {
            winner.textContent = "You did not press any S and L key, time is out!";
        } else if (sumS = sumL) {
            winner.textContent = "Same score,try again !";
        }
        inputTime.value = "";

    }, gameTime);

};

// the Play again button.
newGame.addEventListener("click", newGamer);
function newGamer() {
    window.location.reload(true);
    //method 2
    // gameButton.removeEventListener('click', startGame)
    // winner.textContent = "";
    // countS.textContent = "";
    // countL.textContent = "";
    // sumS = 0;
    // sumL = 0;
    // gameButton.addEventListener('click', startGame)
}