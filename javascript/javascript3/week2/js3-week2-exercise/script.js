
// sychonous way
fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(yesOrNo => {
        console.log(yesOrNo);

    });

//promise way exercise1

//method1
async function YesOrNoData() {
    try {
        const yesOrNo = await fetch('https://yesno.wtf/api');
        const result1 = await yesOrNo.json();
        console.log(result1);
    }
    catch (error) { console.log(error) };
}
YesOrNoData()
//method 2
async function asyncAwaitExercise() {
    try {
        const yesOrNoData = await fetch("https://yesno.wtf/api");
        const result2 = await yesOrNoData.json();
        console.log(result2);
    } catch (err) {
        throw "Feching the yes or no went wrong";
    }
}
asyncAwaitExercise();

//exercise 2
//1 fetch yes or no 
async function getAnswer() {
    try {
        const data = await fetch('https://yesno.wtf/api');
        const totalAnswer = await data.json();
        console.log(totalAnswer.answer);
    }
    catch (error) { console.log(error) };
}
getAnswer()
// fetching a url that rejects
async function myUrl() {
    try {
        const response = await fetch("https://yesno.wtf/api");
        const urlTotal = await response.json();
        if (urlTotal.image !== "https://knajskdskj.jasdk") {
            resolve(urlTotal.image)
        } else {
            reject("error")
        }
    } catch (error) {
        console.log(error);
    }
};
myUrl()
    .then(data => { console.log(data.image); })
    .catch(error => {
        console.log(error);
    })

//exercise 3
//1.Create a promise that resolves after 4 seconds
function myNew() {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello"); 4000
        })
    })
    return promise1;
};
//method1
myNew()
    .then(data => console.log(data))
    .catch(error => console.log(error))
    //method 2
    ; (async () => {
        try {
            const result = await myNew();
            console.log(result);
        } catch (error) {
            console.log(error);
        }

    })();
// //2.make the promise fail by rejecting it with an error message instead of resolving it

function test() {
    const moreData = true;
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moreData) {
                reject("We dont have more data!!");
            } else {
                resolve("hello")
            }
        }, 4000);
    });
    return promise2;
}
//method 1
; (async () => {
    try {
        const result = await test();
        console.log(result);

    } catch (error) {
        console.log(error);

    }
})();
//method 2
test().then(res => console.log(res))
    .catch(err => console.log(err))
//exercise 4
// YesNoFail4Seconds should wait 4 seconds before it does one of the following 3 things:
// resolves with a yes
// resolves with a no
// or rejects
// Look into Math.random()
const result4 = ["yes", "no", "reject"];
let randomNo = Math.floor(Math.random() * 3);
const yesNo = result4[randomNo];
function YesNoFail4Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (yesNo === "yes" || yesNo === "no") {
                resolve(yesNo)
            } else {
                reject("reject")
            }

        }, 1000)
    })
}
//method1
YesNoFail4Seconds()
    .then((data) => {
        console.log(`The answer is ${data}`);
    })
    .catch((error) => {
        console.log(error);
    });

YesNoFail4Seconds();
//method2
// change to the async way
async function namedasync() {
    try {
        const yesOrNo = await YesNoFail4Seconds();
        console.log(yesOrNo);
    } catch (error) {
        console.log(error);
    }
}
namedasync();

//Exercise 5 
const astronautsAndMovie = async function asyncData() {
    try {
        const astronauts = await fetch("http://api.open-notify.org/astros.json");
        const jsonAsronauts = await astronauts.json();
        const nameAstonauts = await jsonAsronauts.people
        const eachPeople = await nameAstonauts.map((res) => res.name)
        console.log(eachPeople);
        const movies = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
        const moviesResult = await movies.json();
        const movieTitle = await moviesResult.map((res) => res.title).filter((nameMovie) => nameMovie.toLowerCase().includes("wak"));
        console.log(movieTitle);
        return [eachPeople, movieTitle];
    } catch (error) {
        console.log(error);
    }

}
astronautsAndMovie();
// //Exercise 6
// //Get the astronauts and the movies at the same time. Log out the movies and the battery status when both promises has been resolved.
const promiseAll = async function promiseAll() {
    try {
        //method 1 fetch at the same time and display at the sametime
        const API1 = "http://api.open-notify.org/astros.json";
        const API2 = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
        const results = await Promise.all([
            fetch(API1),
            fetch(API2)
        ])
        const eachApi = results.map(result => result.json());
        const finalData = await Promise.all(eachApi);
        console.log(finalData);
        //method 2 fetch is not at the same time ,only display at the same time
        const apiOne = await fetch("http://api.open-notify.org/astros.json");
        const oneJson = await apiOne.json();
        const apiTwo = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
        const twoJson = await apiTwo.json();
        const finalApiData = await Promise.all([oneJson, twoJson]);
        console.log(finalApiData);


        //the battery status
        //method 1
        let battery = await navigator.getBattery();//battery is an obj
        const getBatteryJason = await battryStatus(battery);
        async function battryStatus(battery) {
            try {
                console.log('battery level: ', battery.level);
                // ... and any subsequent updates.
                battery.onlevelchange = function () {
                    console.log('battery level changed: ', this.level);
                };
                battery.onchargingchange = function () {
                    const batteryStatus = battery.charging ? 'charging' : 'not charging';
                    console.log(batteryStatus);
                };
                battery.ondischargingtimechange = function () {
                    const ondischargingtimechange = battery.dischargingTime / 60
                    console.log(ondischargingtimechange);
                };

            } catch (error) {
                console.log(error);
            }

        } ;
    }
        catch (error) {
            console.log(error);
        }
    }
        promiseAll()
        //method 2  of get the battery status
//         navigator.getBattery().then(function (battery) {
//             function updateAllBatteryInfo() {
//                 updateChargeInfo();
//                 updateLevelInfo();
//                 updateChargingInfo();
//                 updateDischargingInfo();
//             }
//             updateAllBatteryInfo();

//             battery.addEventListener('chargingchange', function () {
//                 updateChargeInfo();
//             });
//             function updateChargeInfo() {
//                 console.log("Battery charging? "
//                     + (battery.charging ? "Yes" : "No"));
//             }

//             battery.addEventListener('levelchange', function () {
//                 updateLevelInfo();
//             });
//             function updateLevelInfo() {
//                 console.log("Battery level: "
//                     + battery.level * 100 + "%");
//             }

//             battery.addEventListener('chargingtimechange', function () {
//                 updateChargingInfo();
//             });
//             function updateChargingInfo() {
//                 console.log("Battery charging time: "
//                     + battery.chargingTime + " seconds");
            

//             battery.addEventListener('dischargingtimechange', function () {
//                 updateDischargingInfo();
//             });
//             function updateDischargingInfo() {
//                 console.log("Battery discharging time: "
//                     + battery.dischargingTime + " seconds");
//             }

//         }

//     })
// }
    