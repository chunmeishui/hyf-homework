//Movies exercise
async function badMovies() {
    try {
        const totalMovie = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
        const movieTotal = await totalMovie.json();
        const badMovie = await movieTotal.map(singleMovieInfo => singleMovieInfo).filter(movieData => movieData.rating < 4 && movieData.year >= 2000)
        console.log(badMovie);
    } catch (error) {
        throw ("error" + error)
    }

}
badMovies();

//Promise that resolves after set time
function makeUpYourOwnFunctionName(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("I am called asynchronously after 8 seconds");
        }, resolveAfter * 1000);
    })
}
makeUpYourOwnFunctionName(8).then((data) => {
    console.log(data); // logged out after 8 seconds
});
//method2 async/await
async function makeUpYourOwnFunctionName2(resolveAfter) {
    try {
        const myPromise = await makeUpYourOwnFunctionName(resolveAfter);
        console.log(myPromise);
    } catch (error) {
        console.log(error);
    }

}
makeUpYourOwnFunctionName2(8);



// get current position ???
//Rewrite time
function showPosition(position) {
    const positionXY = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    console.log(positionXY);
}
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            resolve();
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    })

}
getCurrentLocation()
    .then((data) => {
        // called when the users position is found
        console.log(data);//why undefined????
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

//setTimeout in promise way
function setTimeoutPromise(time) {
    return new Promise((resolve, reject) => {
        if (isNaN(time)) {
            reject();
        }
        setTimeout(() => resolve(), time);
    })
};
// call setTimeout prmise
setTimeoutPromise(3000)
    .then(() => {
        console.log("Called after 3 seconds");
    })
    .catch(() => console.log("time is not right"));

// call position promise
//Fetching and waiting
// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api

//method1
const dataPromise = fetch("https://yesno.wtf/api");
dataPromise.then((data) => data.json())
    .then(
        (data) => setTimeout(() => { console.log(data) }, 3000))
    .catch((err) => console.log(err));
//method2
// use the .then call the function
function bestWay(t) {
    return new Promise((resolv) => {
        setTimeout(() => { resolv(fetch("https://yesno.wtf/api")) }, t * 1000);
    })
};
bestWay(3)
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
//method 3
//use the asyncway call the function
async function asyncWay(t) {
    try {
        const timeOut = await fetch("https://yesno.wtf/api");
        const threeSeconds = await timeOut.json();
        setTimeout(() => {
            console.log(threeSeconds);
        }, t * 1000);

    } catch (error) {
        console.log(error);
    }

}
asyncWay(3);

