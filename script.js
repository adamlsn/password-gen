// Assignment Code
var generateBtn = document.querySelector("#generate");

//const variables to set array length/values for ASCII integers
const lowercaseCharCodes = arrayFromLowtoHigh(97, 122);
const uppercaseCharCodes = arrayFromLowtoHigh(65, 90);
const numberCharCodes = arrayFromLowtoHigh(48, 57);
const symbolCharCodes = arrayFromLowtoHigh(37,47).concat(
  arrayFromLowtoHigh(58, 64)
).concat(
  arrayFromLowtoHigh(91,64)
).concat(
  arrayFromLowtoHigh(123,126)
);


// generate password function
function generatePassword() {

  //window prompts to get user input
  var characterAmount = window.prompt("How long would you like your password? Between 8 and 128 characters");
  if(characterAmount < 8 || characterAmount > 128 || isNaN(characterAmount)) {
    window.alert ('WARNING: You must insert a number between "8" and "128"!');
    return chars = 'Press "Generate Password" to try again.';
  }

  var includeLowerCase = window.confirm("Would you like to include lower case characters?");
  var includeUpperCase = window.confirm("Would you like to include upper case characters?");
  var includeSymbols = window.confirm("Would you like to include symbols?");
  var includeNumbers = window.confirm("Would you like to include numbers?");
  if(includeLowerCase === false && includeUpperCase === false && includeSymbols === false && includeNumbers === false) {
    window.alert("WARNING: You must choose at least one of the previous options!")
    return chars = 'Press "Generate Password" to try again.';
  }

  //checking user input to concat on choices
  var chars = [];
  if (includeLowerCase) chars = chars.concat(lowercaseCharCodes);
  if (includeUpperCase) chars = chars.concat(uppercaseCharCodes);
  if (includeSymbols) chars = chars.concat(symbolCharCodes);
  if (includeNumbers) chars = chars.concat(numberCharCodes);

  //generating password
  const passwordCharacters = [];
  for (var i = 0; i < characterAmount; i++) {
    const characterCode = chars[Math.floor(Math.random() * chars.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  };

  return passwordCharacters.join('');
};

//function to set character integers for ASCII .fromCharCode
function arrayFromLowtoHigh (low, high) {
  const array = [];
  for(var i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
