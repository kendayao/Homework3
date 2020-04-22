// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



    var characterCount = prompt("How many characters do you want in your password 8-128")

    var lowerCaseConfirm = confirm("Do you want lower case letters?")
    
    var upperCaseConfirm = confirm ("Do you want upper case letters?")
   
    var numericConfirm = confirm("Do you want any numbers?")
  
    var specialConfirm = confirm("Do you want any special characters?")
   
    
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var numeric = ["0","1","2","3","4","5","6","7","8","9"]
    var special = ["!","#","$","%","$","&","(",")","*","+","-","/",":",";","<","=",">","@","?","{","}","[","]"]

   

           
           
         