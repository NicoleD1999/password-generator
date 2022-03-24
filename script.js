//Variables 
var passwordLength;
var specialCharacters;
var useNumbers;
var capitalLetters;
var lowercaseLetters;
// Special characters 
characters = ["!", "@", "#","$","%","^","&","*","-","+"];
// Numers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for toUpper conversion so lowercase letters can be changed to uppercase letters
space = [];

var userChoices;

var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});










//-----------------------------------------------------------------------------------------------------------------------------------------------
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create new function to store user input
function userInput () {
  passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  console.log(passwordLength)
  if (!passwordLength) {
    alert ("please enter a number between 8 & 128")
    return null
  } 
    else if (passwordLength<8 || passwordLength>128) {
      alert ("please enter a number between 8 & 128")
      return null
    }
    else {
  specialCharacters = confirm("Click ok if you want to use special characters. exp. (! ,@ , # ,$)");

  useNumbers = confirm("Click ok if you want to use numbers.");

  capitalLetters = confirm("Click ok if you want to use capital letters.");

  lowercaseLetters = confirm("click ok if you want to us lowercase letters.");
  };
}

//if user does not select anything
if (!specialCharacters && !useNumbers && !capitalLetters && !lowercaseLetters) {
  userChoices = alert("Please select at least 1 criteria");

}
//if user selects "ok" on all 4 criteria 
  else if (specialCharacters && useNumbers && capitalLetters && lowercaseLetters) {
  userChoices = characters.concat(numbers, letters, letters2);
}
//if user selects 3 criteria
else if (specialCharacters && useNumbers && capitalLetters) {
  userChoices = characters.concat(numbers, letters2);
}
else if (specialCharacters && useNumbers && lowercaseLetters) {
  userChoices = character.concat(number, alpha);
}
else if (specialCharacters && lowercaseLetters && capitalLetters) {
  userChoices = characters.concat(letters, letters2);
}
else if (cuseNumbers && lowercaseLetters && capitalLetters) {
  userChoices = numbers.concat(letters, letters2);
}
// if user selects 2 criteria
else if (specialCharacters && useNumbers) {
  userChoices = characters.concat(numbers);

} else if (specialCharacters && lowercaseLetters) {
  userChoices = characters.concat(letters);

} else if (specialCharacters && capitalLetters) {
  userChoices = characters.concat(letters2);
}
else if (lowercaseLetters && useNumbers) {
  userChoices = letter.concat(numbers);

} else if (lowercaseLetters && capitalLetters) {
  userChoices = letters.concat(letters2);

} else if (confirmNumber && confirmUppercase) {
  userChoices = numbers.concat(letters2);
}























//------------------------------------------------------------------------------------------------------------------------------------------
function generatePassword () {
  userInput();
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
