//fullname function
function getFullname(fullname1, fullname2) {

    return fullname1 + " " + fullname2;

}
console.log(getFullname("Benjamin", "Hughes"))


//Formal fullname
function getFullname(fullname1, fullname2, useFormalName = false, gender = "male") {
    if (useFormalName) {
        if (gender === "male") {

            return "Lord" + fullname1 + " " + fullname2;
            //return "lord"+getFullname(fullname1, fullname2);

        } else {
            return "Miss" + fullname1 + " " + fullname2;
            //return "Lordess" + getFullname(fullname1, fullname2);
        }
    } else {
        return fullname1 + " " + fullname2;
        // return getFullname(fullname1, fullname2);
    }

}


//Event application
const day = ["sunday", "monday", "tuesday", "wendsday", "thursday", "friday", "saterday"]

function getEventWeekday(today, eventDay) {

    // get the today´s index.
    let index = -1;
    for (let i = 0; i < day.length; i++) {
        if (today === day[i]) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        return undefined;
    }

    return "The event will take place in " + day[(index + eventDay) % 7];
}

console.log(getEventWeekday("tuesday", 41));

//method 2;
/*
const day = ["sunday", "monday", "tuesday", "wendsday", "thursday", "friday", "saterday"];
let d= new Date();
let today = day[d.getday()];
function getEventWeekday(today, eventDay){

    return "The event will take place in " +day[(today+eventDay)%7];
}
console.log(day[d.getday()],38);
*/




// wear clothes
function clothesToWear(temperature) {
    if (temperature > 25) {
        console.log("clothesToWear : " + "shorts and a t-shirt");
    } else if (temperature > 10) {
        console.log("clothesToWear : " + "Sweaters and coats");
    } else
        console.log("clothesToWear : " + "down jacket");
}
clothesToWear(15);



//Student manager
const class07Students = [];

function addStudentToClass(studentName) {

    if (studentName === "") {
        console.log("You cannot add an empty string to a class");
        return false;
    }

    for (let i = 0; i < class07Students.length; i++) {

        if (studentName === class07Students[i]) {

            console.log(class07Students[i] + " is already in the class");
            return false;
        }
    }

    if (studentName === "queen") {
        class07Students.push(studentName);
        console.log("queen is added to the class");
        return true;
    }

    if (getNumberOfStudents() > 6) {
        console.log("Cannot add more students to class 07");
        return false;
    }
    else {
        class07Students.push(studentName);
        console.log(studentName + " is added to the class");
        return true;
    }
}

function getNumberOfStudents() {

    return class07Students.length;

}

addStudentToClass("sunny");
addStudentToClass("daniel");
addStudentToClass("anna");
addStudentToClass("ab");
addStudentToClass("cd");
addStudentToClass("cgd");
addStudentToClass("cgd");
addStudentToClass("queen");
addStudentToClass("queen");
addStudentToClass("cfd");


//add candy------------------
//method 1--------------
const obj = {
    "Sweet": 0.5,
    "Chocolate": 0.7,
    "Toffee": 1.1,
    "Chewing-gum": 0.03
}

const boughtCandPrices = [];

const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {

    const price = weight * obj[candyType];
    console.log(" the price is " + price);
    boughtCandPrices.push(price);
    return price;

}
/*  method 2
switch(candyType){
case "Sweet":
    price = weight*0.5;
    break;
case "Chocolate":
    price = weight*0.7;
    break;
case "Toffee":
    price = weight*1.1;
    break;
case "Chewing-gum":
    price = weight*0.03;
    break;       
}
 boughtCandPrices.push(price);
 */
function canBuyMoreCandy() {
    let cost = 0;
    for (let i = 1; i < boughtCandPrices.length; i++) {
        cost += boughtCandPrices[i];
    }
    console.log("amountToSpend is : " + amountToSpend + "   cost is : " + cost);
    if (amountToSpend <= cost) {
        console.log("Enough candy for you!");
        return false;
    } else {
        console.log("You can buy more, so please do!");
        return true;
    }

}


addCandy("Sweet", 20);
addCandy("Chocolate", 2.7);
addCandy("Toffee", 20);
addCandy("Chewing-gum", 23);
canBuyMoreCandy()
