const dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let shouldShowResultInDogYears = true;
const dogYear = dogYearFuture - dogYearOfBirth;
if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + "!")
} else {
    console.log("Your dog will be" + " " + dogYear * 7 + " " + "years old in " + " " + dogYearFuture + " " + "!")
}
