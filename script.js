// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function userInput (){
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  console.log(passwordLength)
  if (passwordLength<8 || passwordLength>128)
    alert ("please enter a number between 8 & 128")
    return null
  } 
  else if () {

  }
  var specialCharacters = confirm("Click ok if you want to use special characters. exp. (! ,@ , # ,$)");
  if (specialCharacters=true) {

  }
  var useNumbers = confirm("Click ok if you want to use numbers.");
  if (useNumbers=true) {

  }
  var capitalLetters = confirm("Click ok if you want to use capital letters.");
  if (capitalLetters=true) {

  }
  var lowercaseLetter = confirm("click ok if you want to us lowercase letters.");
  if (lowercaseLetter=true) {

  }
}
function generatePassword ();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
