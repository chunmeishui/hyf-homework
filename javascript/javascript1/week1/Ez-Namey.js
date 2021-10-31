const firstWords = ["Sun", "waves", "beach", "blue-sky", "clear-water", "coconut-grove", "coral", "canoe", "fishing-fire", "white-sail"];
const secondWords = ["trade-wind", "boat-song", "flowing-cloud", "full-moon", "alaxy", "green-field", "Guanlan", "twilight", "morning-sun", "bright-sun"];
const firstName = firstWords[Math.floor(Math.random() * firstWords.length)];
const secondName = secondWords[Math.floor(Math.random() * secondWords.length)];
const startupName = [firstName] + " " + [secondName];
const length = firstName.length + secondName.length;
console.log(`The startup: "${startupName}" contains ${length} characters.`);

/*console.log("The startup: " + firstName  + ` ` + secondName + " " + "contains" + " " + length + " " + "characters.")*/
