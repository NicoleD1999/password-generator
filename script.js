//Variables 
var passwordLength
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
var useNumbers = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"]
var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var selectedChar =[]
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create new function to store user input
function userInput () {
  passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  console.log(passwordLength)
  if (passwordLength<8 || passwordLength>128) {
    alert ("please enter a number between 8 & 128")
    return null
  } 
  specialCharacters = confirm("Click ok if you want to use special characters. exp. (! ,@ , # ,$)");

  useNumbers = confirm("Click ok if you want to use numbers.");

  capitalLetters = confirm("Click ok if you want to use capital letters.");

  lowercaseLetter = confirm("click ok if you want to us lowercase letters.");

}
if (specialCharacters && useNumbers)
specialCharacters=specialCharacters.concat(useNumbers)























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
