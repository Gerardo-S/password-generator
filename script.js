// Assignment Code
var generateBtn = document.querySelector("#generate");
var minLength = 8;
var maxLength = 128;
var possibleTxt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var possibleNumeric = "1234567890";
var possibleSpecialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
  var text = "";
  // prompt user for number of password chars
  var pssLength = prompt("Enter desired password length below. Password length must be between 8 - 128 characters");
  // IF length is < 8 OR length is > 128
// alert password length must be from 8 to 128
if (pssLength > maxLength || pssLength < minLength){


  alert("Oops! Please proved a password length between 8 - 128 characters.");
  var pssLength = prompt("Enter desired password length below. Password length must be between 8 - 128 characters");
  
} else if(pssLength <= maxLength && pssLength >= minLength){ 
  var lowerCase =  confirm("Would you like your password to include lowercase letters?");
  var upperCase =  confirm("Would you like your password to include uppercase letters?");
  var numeric =    confirm("Would you like your password to include numbers?");
  var specialChar = confirm("Would you like your password to include special characters?");
  for (var i = 0; i < pssLength-1; i++){
    text += possibleTxt.charAt(Math.floor(Math.random() * possibleTxt.length));

  }
  
  
  if (lowerCase===true && upperCase=== false) {
    text = text + possibleTxt.charAt(Math.floor(Math.random() * possibleTxt.length));
    
    return text.toLocaleLowerCase(); 
    
  } 
  
  else if (lowerCase === false && upperCase === true){
    
    return text;

  }
  
  
  
}
  return text;
}
// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);