// // // Assignment Code
var generateBtn = document.querySelector("#generate");
alert("Welcome to the Password Generator. Please answer the following questions");

// // // Assigned variables
var pssLength = prompt("Enter desired password length below. Password length must be between 8 - 128 characters");
var minLength = 8;
var maxLength = 128;

// while loop repeats if user does not pick a password length between 8 -128

while (pssLength > maxLength || pssLength < minLength) {

  alert("Oops! Please proved a password length between 8 - 128 characters.");
  var pssLength = prompt("Enter desired password length below. Password length must be between 8 - 128 characters");

}


var lowerCase =  confirm("Would you like your password to include lowercase letters?");


// var upperCase =  confirm("Would you like your password to include uppercase letters?");
// var numeric =    confirm("Would you like your password to include numbers?");
// var specialChar = confirm("Would you like your password to include special characters?");

// Conditional Statements 

var text = "";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomLetter() {
  

  for (var i = 0; i < pssLength  ; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    if (lowerCase === true) {

      return text.toLowerCase();

    }

    else {
      return text;

    }

}

console.log(randomLetter(pssLength));




// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

