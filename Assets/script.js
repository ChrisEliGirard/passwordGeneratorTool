// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerator);

// Function that gets the users criteria for a password and generates a password for them based upon said criteria
function passwordGenerator(event) {

  // Prevent default action
  event.preventDefault();

  // Initalize variables and arrays needed for the parent function and its children functions  
  var lwrCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uprCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var nbrCharacters = ["0","1","2","3","4","5","6","7","8","9"];
  var spcCharacters = ["!", '"', "#", "$", "%", "&", '"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\', ', ']' ,"^", '_', "`", "{", "|", "}", "~"];
  var passwordChoices = [];
  
  // Function that asks the user their password criteria
  function passwordCriteria() {
    
    // Asks the user for a password length
    passwordLength = parseInt(prompt("How long would you like your password to be? (Length between 8 - 64 characters)"));
    
    // If length is less then 8 or greater than 64 the user will be asked to try again
    if (passwordLength < 8 || passwordLength > 64 || isNaN(passwordLength)) {
      alert("Try again, password length must be an integer ranging from 8 - 64")
      return false;
    //if the length is between 8 and 64 the user will be asked if they want uppercase, numbers, and special characters in their password each seperatly
    } else {
        passwordChoices = passwordChoices.concat(lwrCharacters);
        if (confirm("Would you like uppercase letters in your password? (ie: A,B,C,...X,Y,Z)")) {
          passwordChoices = passwordChoices.concat(uprCharacters);
        }
        if (confirm("Would you like numbers in your password? (ie: 1,2,...8,9)")){
          passwordChoices = passwordChoices.concat(nbrCharacters);
        }
        if (confirm("Would you like special characters in your password? (ie: !, ?, $)")) {
          passwordChoices = passwordChoices.concat(spcCharacters);
        }
      
        // Calls the password create function to generate the password after defining the password criteria and returns the array passwordChoices and passwordLength
      return true, passwordLength, passwordChoices, passwordWrite();
      }
  }
  
  // Function that generates the password and displays it on the page
  function passwordCreate() {
    var password = "";
    for (var i = 0; i < passwordLength; i++){
      var randomCharacter = (Math.floor(Math.random()*passwordChoices.length));
      password = password + passwordChoices[randomCharacter];
    }
    return password
  }
  
  // Function that writes the password to the #password input on the page
  function passwordWrite() {
    var password = passwordCreate()
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Calls the Password Criteria function to recieve the users password criteria
  passwordCriteria();
}