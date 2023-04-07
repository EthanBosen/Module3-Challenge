// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button Click Received.");
const chars = "01234556789, QWERTYUIOPASDFGHJKLZXCVBNM, qwertyuiopasdfghjklzxcvbnm, !@#$%^&*()_+";
let passwordlength = 10;
let password = '';

for (let i = 0; i < passwordlength; i++) {
  let randomNumber = Math.floor(Math.random() * chars.length);
  
  password += chars.substring(randomNumber,randomNumber + 1);
  console.log(password);
  }
  document.getElementById('password').value = password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("password");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//1. Prompt the user for the password criteria
//  a. Password Length 8 < 128
//  b. Lowercase, Uppercase, Numbers, Special Characters
//2. Validate the input.
//3. Generate password base on criteria.
//4. Display password to the page.