// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["!","#","$","%","$","&","(",")","*","+","-","/",":",";","<","=",">","@","?","{","}","[","]"]


// Write password to the #password input
function writePassword() {

  var characterCount = prompt("How many characters do you want in your password? (8-128 characters)")

  if(characterCount > 7 && characterCount <129){

  var lowerCaseConfirm = confirm("Click OK if want lower case letters?")
  var upperCaseConfirm = confirm ("Click OK if want upper case letters?")
  var numericConfirm = confirm("Click OK if you want any numbers?")
  var specialConfirm = confirm("Click OK you want any special characters?")


    var newPassword= ""
      function generatePassword() {
      if (lowerCaseConfirm===true && upperCaseConfirm===false && numericConfirm===false && specialConfirm===false){
        for (var i=0; i < characterCount; i++){
          var characterPosition=Math.floor(Math.random()*(lowerCase.length))
          newPassword += lowerCase[characterPosition]
          }
         }else if (lowerCaseConfirm===false && upperCaseConfirm===true && numericConfirm===false && specialConfirm===false){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(upperCase.length))
            newPassword += upperCase[characterPosition]
          }
        }else if (lowerCaseConfirm===false && upperCaseConfirm===false && numericConfirm===true && specialConfirm===false){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(numeric.length))
            newPassword += numeric[characterPosition]
          }
        }else if (lowerCaseConfirm===false && upperCaseConfirm===false && numericConfirm===false && specialConfirm===true){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(specialChar.length))
            newPassword += specialChar[characterPosition]
          }
        }else if (lowerCaseConfirm===true && upperCaseConfirm===true && numericConfirm===false && specialConfirm===false){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(upperCase.length + lowerCase.length))
            newPassword += lowerCase.concat(upperCase)[characterPosition]
          }
        }else if (lowerCaseConfirm===true && upperCaseConfirm===false && numericConfirm===true && specialConfirm===false){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(numeric.length + lowerCase.length))
            newPassword += lowerCase.concat(numeric)[characterPosition]
          }
        }else if (lowerCaseConfirm===true && upperCaseConfirm===false && numericConfirm===false && specialConfirm===true){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(specialChar.length + lowerCase.length))
            newPassword += lowerCase.concat(specialChar)[characterPosition]
          }
        }else if (lowerCaseConfirm===true && upperCaseConfirm===true && numericConfirm===true && specialConfirm===false){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(upperCase.length + lowerCase.length + numeric.length))
            newPassword += lowerCase.concat(upperCase,numeric)[characterPosition]
          }
        }else if (lowerCaseConfirm===true && upperCaseConfirm===true && numericConfirm===false && specialConfirm===true){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(upperCase.length + lowerCase.length + specialChar.length))
            newPassword += lowerCase.concat(upperCase,specialChar)[characterPosition]
          }
        }else if (lowerCaseConfirm===false && upperCaseConfirm===true && numericConfirm===true && specialConfirm===false){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(upperCase.length + numeric.length))
            newPassword += upperCase.concat(numeric)[characterPosition]
          }
        }else if (lowerCaseConfirm===false && upperCaseConfirm===true && numericConfirm===false && specialConfirm===true){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(upperCase.length + specialChar.length))
            newPassword += upperCase.concat(specialChar)[characterPosition]
          }
        }else if (lowerCaseConfirm===false && upperCaseConfirm===true && numericConfirm===true && specialConfirm===true){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(upperCase.length + numeric.length + specialChar.length))
            newPassword += upperCase.concat(numeric,specialChar)[characterPosition]
          }
        }else if (lowerCaseConfirm===false && upperCaseConfirm===false && numericConfirm===true && specialConfirm===true){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(numeric.length + specialChar.length))
            newPassword += numeric.concat(specialChar)[characterPosition]
          }
        }else if (lowerCaseConfirm===true && upperCaseConfirm===false && numericConfirm===true && specialConfirm===true){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(lowerCase.length + numeric.length + specialChar.length))
            newPassword += lowerCase.concat(numeric,specialChar)[characterPosition]
          }
        }else if (lowerCaseConfirm===true && upperCaseConfirm===true && numericConfirm===true && specialConfirm===true){
          for (var i=0; i < characterCount; i++){
            var characterPosition=Math.floor(Math.random()*(lowerCase.length + upperCase.length + numeric.length + specialChar.length))
            newPassword += lowerCase.concat(upperCase,numeric,specialChar)[characterPosition]
          }
        }

      }
  generatePassword();
      
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;

  }else {
    alert("Oops! Please type a number between 7 and 129. Click OK to try again.")
  }
}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



   
   

           
           
         