// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function userInput (){
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  console.log(passwordLength)
  if (passwordLength<8){
    alert ("please enter a number between 8 & 130")
    return null
  }
  var specialCharacters = confirm("Do you want to use any special charaters? exp. (! ,@ , # ,$)");
  confirm("Do you want to use any numbers?");
  confirm("Do you want to use any capital letters?");
  confirm("Do you want to use any lowercase letters?");
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
