// 1.Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWord(word) {
    //suppose the first is the shortest
    let shortest = danishWords[0].length;
    for (const word of danishWords) {
        if (word.length < shortest) {
            //always assign the shortest value to shortest
            shortest = word.length;
            console.log("shortest word is : " + word);
        }
    }
} shortestWord(danishWords); //ø

// 2 .Find and count the Danish letters
const danlishWord = ["å", "æ", "ø"];
const inputDanlishWord = [];
function letters(input) {
    let letters = input.split("")
    for (const letter of letters) {
        if (danlishWord.includes(letter)) {
            inputDanlishWord.push(letter);
        }
    }
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    for (let i = 0; i < inputDanlishWord.length; i++) {
        if (inputDanlishWord[i] === "ø") {
            sum1 += 1;
        } else if (inputDanlishWord[i] === "å") {
            sum2 += 1;

        } else if (inputDanlishWord[i] === "æ") {
            sum3 += 1;
        }
    } console.log("total:" + inputDanlishWord.length + ", ø:" + sum1 + ", å:" + sum2 + ", æ:" + sum3);
}
letters("Jeg har en blå bil");
letters("Blå grød med røde bær");

// 3.Spirit animal name generator--------
//select 3 input
const clickID = document.querySelector('#radioClickID');
const mouseoverID = document.querySelector('#radioMouseoverID');
const inputFieldID = document.querySelector('#radioInputID');
//create animal array
const spiritAnimalNames = ['The crying butterfly', ' The old wolf', ' The diminishing tiger', 'The gigantic giraff', 'The old elephant', "The cute cat", "The gold fish"];
//select button
let myButton = document.querySelector('#myButton');
let inputSelector = document.querySelector('#textinput');
myButton.addEventListener('click', function () {
    //get the input name from customer
    let username = document.querySelector('#textinput').value;
    // judge which input selected and then excute the function
    if (clickID.checked) {
        if (username === "") {
            alert('name can not be empty click');
        } else {
            //get the random index of the array
            let randomSpiritIndex = Math.floor((Math.random() * spiritAnimalNames.length));
            const sentence = username + '-' + spiritAnimalNames[randomSpiritIndex];
            document.querySelector('.displayClick1').innerHTML = '"' + 'Clicked : ' + '"' + sentence;
        }
        console.log('here i am click');
    }
})
myButton.addEventListener('mouseover', function () {
    //get the input name from customer
    let username = document.querySelector('#textinput').value;
    // judge which input selected and then excute the function
    if (mouseoverID.checked) {
        if (username === "") {
            alert('name can not be empty click');
        } else {
            let randomSpirit = Math.floor((Math.random() * spiritAnimalNames.length));
            const sentence = username + '-' + spiritAnimalNames[randomSpirit];
            document.querySelector('.displayMouseover1').innerHTML = '"' + 'Mouseover : ' + '"' + sentence;
        }
        console.log('here i am mouseover');
    }
})
function inputFunction() {
    //get the input name from customer
    let username = document.querySelector('#textinput').value;
    // judge which input selected and then excute the function
    if (inputFieldID.checked) {
        let randomSpirit = Math.floor((Math.random() * spiritAnimalNames.length));
        let sentence = username + '-' + spiritAnimalNames[randomSpirit];
        document.querySelector('.displayRadioinput1').innerHTML = ' inputFunction : ' + sentence;
        console.log('here i am inputFunction');
    }
}
inputFunction();