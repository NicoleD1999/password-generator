// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function generatePassword (){
  prompt("How many characters would you like your password to be?");
  confirm("Do you want to use any special charaters? exp. (! ,@ , # ,$)");
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
