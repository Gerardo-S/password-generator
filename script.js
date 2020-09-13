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
  if (pssLength > maxLength || pssLength < minLength) {


    alert("Oops! Please proved a password length between 8 - 128 characters.");
    var pssLength = prompt("Enter desired password length below. Password length must be between 8 - 128 characters");

  } else if (pssLength <= maxLength && pssLength >= minLength) {
    var lowerCase = confirm("Would you like your password to include lowercase letters?");
    var upperCase = confirm("Would you like your password to include uppercase letters?");
    var numeric = confirm("Would you like your password to include numbers?");
    var specialChar = confirm("Would you like your password to include special characters?");
    for (var i = 1; i < pssLength; i++) {
      text += possibleTxt.charAt(Math.floor(Math.random() * possibleTxt.length));

    }

    // returns a password with lowercase, uppercase, and numeric
    if (lowerCase === true && upperCase === true && numeric === true) {

      // this function replaces an index with a numeric character 
      String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
      var mixed = possibleTxt.charAt(Math.floor(Math.random() * possibleTxt.length)) + text.toLocaleLowerCase();
      return (mixed.replaceAt(7, possibleNumeric.charAt(Math.floor(Math.random() * possibleNumeric.length)) )); 
    

    
    

    }
    // returns a password with both lowercase and uppercase characters
    else if (lowerCase === true && upperCase === true && numeric === false) {

      var mixed = possibleTxt.charAt(Math.floor(Math.random() * possibleTxt.length)) + text.toLocaleLowerCase();
      return mixed;

    }

    // returns a password with lowercase characters only
    else if (lowerCase === true && upperCase === false && numeric === false) {
      text = text + possibleTxt.charAt(Math.floor(Math.random() * possibleTxt.length));

      return text.toLocaleLowerCase();


    }


    // returns a password with uppercase only
    else if (lowerCase === false && upperCase === true && numeric === false) {

      return text += possibleTxt.charAt(Math.floor(Math.random() * possibleTxt.length));

    }

    // continuation of possible out comes will revisit

    // else if (){



    // }

    // else if (){



    // }

    // else if (){



    // }



  }

}
// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);