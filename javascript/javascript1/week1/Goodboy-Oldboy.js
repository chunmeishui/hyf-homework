const yearOfBirth = 1987;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;
const dogYear = dogYearFuture - dogYearOfBirth;
if (shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear+" human years old in "+dogYearFuture+"!")
}else{
    console.log("Your dog will be 70 dog years old in " +" " + yearFuture+"!")
}
