let newName = [];
let nameSaved = [];
const toDo = [];
function getReply(command) {
    //push the single words to a array[words]
    const words = [];
    const word = command.split(` `);
    for (const singleWord of word) {
        words.push(singleWord);
    }
    //get the index of symble + - * / from array[words]
    const indexPlus = words.indexOf("+");
    const indexMinus = words.indexOf("-");
    const indexMultiply = words.indexOf("*");
    const indexDivid = words.indexOf("/");
    //if input is empty
    if (command === "") {
        console.log("add some activities");
    }
    //get the command.name from command
    let splitt = command.split(` `);
    if (command.includes('my name is')) {
        newName.push(splitt);
        let result = "";
        for (let name of newName) {
            result = name;
            inputName = result[result.length - 1];
        }
        function userName(a) {
            let result = "Nice to meet you " + inputName;
            console.log(result);
        } userName(inputName);
    }
    else if (command.includes("what is your name")) {
        newName.push(splitt);
        function userName(a) {
            let result = "My name is " + inputName;
            console.log(result);
        } userName(inputName);
    } else if (command.includes("Add fishing to my todo")) {
        //this is the add todo function
        function todolist(command) {
            toDo.push("fishing");
            console.log("fishing added to your todo");
        }
        todolist(command);
    } else if (command.includes("Add singing in the shower to my todo")) {
        //this is the add todo function
        function todolist(command) {
            toDo.push(" singing in the shower");
            console.log("singing in the shower added to your todo");
        }
        todolist(command);
    } else if (command.includes("Remove fishing from my todo")) {
        // remove function
        function removeList(command) {
            toDo.shift(command);
            console.log("fishing removed from your todo");
        } removeList(command)
        //show todo list
    } else if (command.includes("What is on my todo")) {
        function toDoLi(command) {
            let item = toDo.length;
            console.log("Fx you have " + item + " todos - " + toDo[0]);
        }
        toDoLi(command)
        // show today
    } else if (command.includes("What day is it today?")) {
        const month = ["January", "February", "March", "April", "May", "June", "july", "Auguast", "September", "Octomber", "November", "December"]
        //get the today
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        console.log(dd + ".of " + month[mm - 1] + " " + yyyy);
        // "+" function
    } else if (command.includes("+")) {
        const num1 = Number(words[indexPlus - 1]);
        const num2 = Number(words[indexPlus + 1]);
        function sum(command) {
            let sum = num1 + num2;
            console.log(sum);
        }
        sum(command)
        //"-" function
    } else if (command.includes("-")) {
        const num1 = Number(words[indexMinus - 1]);
        const num2 = Number(words[indexMinus + 1]);
        function sum(command) {

            let sum = num1 - num2;
            console.log(sum);
        }
        sum(command)
        //"*" function
    } else if (command.includes("*")) {
        const num1 = Number(words[indexMultiply - 1]);
        const num2 = Number(words[indexMultiply + 1]);
        function sum(command) {

            let sum = num1 * num2;
            console.log(sum);
        }
        sum(command)
        // "/" function
    } else if (command.includes("/")) {
        const num1 = Number(words[indexDivid - 1]);
        const num2 = Number(words[indexDivid + 1]);
        function sum(command) {

            let sum = num1 / num2;
            console.log(sum);
        }
        sum(command)
    } else if (command.includes("Set a timer for minutes")) {
        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            setInterval(function () {
                let minutes = parseInt(timer / 60, 10);
                let seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
        window.onload = function () {
            const fourMinutes = 60 * 4,
                display = document.querySelector('#time');
            startTimer(fourMinutes, display);
        };
        setTimeout(function () {
            console.log("Timer done");
        }, 240000);

    }
}
getReply("")
getReply("my name is chunmei")
getReply("what is your name")
getReply("Add fishing to my todo")
getReply("Add singing in the shower to my todo")
getReply("Remove fishing from my todo")
getReply("What is on my todo")
getReply("What day is it today?")
getReply("what is 3 + 3")
getReply("what is 18 - 3")
getReply("what is 7 * 3")
getReply("what is 9 / 3")
getReply("Set a timer for minutes")

