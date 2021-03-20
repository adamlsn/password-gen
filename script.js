// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseCharCodes = arrayFromLowtoHigh(65, 90);
const uppercaseCharCodes = arrayFromLowtoHigh(97, 122);
const numberCharCodes = arrayFromLowtoHigh(48, 57);
const symbolCharCodes = arrayFromLowtoHigh(37,47).concat(
  arrayFromLowtoHigh(58, 64)
).concat(
  arrayFromLowtoHigh(91,64)
).concat(
  arrayFromLowtoHigh(123,126)
);

//windowPrompts

function characterAmount() {
  window.prompt("How long would you like your password? Between 8 and 128 characters");
};
characterAmount();

function includeLowerCase() {
  window.prompt("Would you like to include lower case characters? YES or NO")
};

includeLowerCase();

function includeUpperCase() {
  window.prompt("Would you like to include upper case characters? YES or NO")
};

includeUpperCase();

function includeSymbols() {
  window.prompt("Would you like to include symbols? YES or NO")
};

includeSymbols();

function includeNumbers() {
  window.prompt("Would you like to include numbers? YES or NO")
};

includeNumbers();

// function generatePassword() {
  
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password functoin
function arrayFromLowtoHigh (low, high) {
  const array = [];
  for(var i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
