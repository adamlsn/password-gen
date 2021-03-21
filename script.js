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


// generate password function
function generatePassword(characterAmount, includeLowerCase, includeUpperCase,
includeNumbers, includeSymbols) {
  function characterAmount() {
    window.prompt("How long would you like your password? Between 8 and 128 characters");
    return characterAmount;
  };
  characterAmount();
  
  function includeLowerCase() {
    window.confirm("Would you like to include lower case characters? YES or NO")
    return includeLowerCase;
  };
  
  includeLowerCase();
  
  function includeUpperCase() {
    window.confirm("Would you like to include upper case characters? YES or NO")
    return includeUpperCase;
  };
  
  includeUpperCase();
  
  function includeSymbols() {
    window.confirm("Would you like to include symbols? YES or NO")
    return includeSymbols;
  };
  
  includeSymbols();
  
  function includeNumbers() {
    window.confirm("Would you like to include numbers? YES or NO")
  };
  
  includeNumbers();
  

  var chars = [];
  if (includeLowerCase) chars = chars.concat(includeLowerCase);
  if (includeUpperCase) chars = chars.concat(includeUpperCase);
  if (includeSymbols) chars = chars.concat(includeSymbols);
  if (includeNumbers) chars = chars.concat(includeNumbers);


  const passwordCharacters = [];
  for (var i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * chars.length)]
    passwordCharacters.push(String.fromCharCode(characterCode));
  };
  console.log(chars);
  return passwordCharacters.join('');
};

//generate password functoin
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
