
//----------------Define Variables------------------------------
//User Name Variable : store the User Name
var userName;

//Define Variables : store 4 User's answers
var answerCity;
var answerSport;
var answerColor;
var answerBook;

//count the correct answer of 4 first question
var countCorrectAnswer=0;

//Define Variables for question 5 : guess number by user
var guessNumber;
var finished = false;
var userNumber;

//Define Varibales for Guessing 5 : set a number and ask user to guess
var myNum = 250;

//Define Varibales for Guessing 6: set a array with answers and ask user to guess
var arrayOfWeather=['rainy','sunny','cloudy','breezy'];
var correctweatheranswer = false;

//-------------------------Body of Code----------------------------
//Part 1 :get Username of user and convert it to UpperCase
//show the Appropriate messeage to user
userName = prompt('What is your name?').toUpperCase();
//console.log('the Name of User is :' + userName);
//alert('Good to meet you ' + userName + '! ' + ' enjoy your doughnuts');
var welcome = document.getElementById('welcome');
welcome.textContent='Good to meet you ' + userName;
//recall Functions
questionCity();
questionSport();
questionColor();
questionFavoriteBook();
resultCorrectAnswers();
questionGuessNumber();
questionGuessWeather();

function questionCity(){
  var answer = document.getElementById('cityId');
  //Part 2 : ask question No1 from User
  answerCity = prompt('Did I grow up in Washington state?').toUpperCase();
  //check user's answer - because before convert user's answer to uppercase, here just check by NO or N
   if (answerCity =='NO' || answerCity=='N')
   {
        countCorrectAnswer++;
        //alert('Well Done!, You got it right ' + userName + '!');
        answer.textContent='Well Done!, You got it right ' + userName + '!';
   }
   else {
     //alert('Sorry ' + userName + '!' + ' I grew up in Tehran');
      answer.textContent='Sorry ' + userName + '!' + ' I grew up in Tehran';
   }
}
function questionSport() {
  var answer = document.getElementById('sportId');
 //Ask  and check Secound question from User- because before convert user's answer to uppercase, here just check by YES or Y
 answerSport = prompt("Is my favorite sport TRX?").toUpperCase();
   if (answerSport =='YES' || answerSport=='Y') {
      countCorrectAnswer++;
      answer.textContent='Well Done!, You got it right ' + userName + '!';
     //alert('Well Done!, You got it right ' + userName + '!');
   } else {
    //  alert('Sorry ' + userName + '!' + ' My Favorite sport is TRX!');
     answer.textContent='Sorry ' + userName + '!' + ' My Favorite sport is TRX!';
   }
}
function questionColor(){
  var answer = document.getElementById('colorId')
  answerColor = prompt(' Is my favorite color Green?').toUpperCase();
  //Ask  and check Third question from User- because before convert user's answer to uppercase, here just check by YES or Y
   if (answerColor=='YES' || answerColor=='Y')
   {
     countCorrectAnswer++;
     answer.textContent = 'Well Done!, You got it right ' + userName + '!';
    // alert('Well Done!, You got it right ' + userName + '!');
   } else {
     answer.textContent = 'Sorry ' + userName + '!' + ' My Favorite Color is Green!';
     //alert('Sorry ' + userName + '!' + ' My Favorite Color is Green!');
   }
}
function questionFavoriteBook(){
  var answer = document.getElementById('bookId')
   //Ask  and check Fourth question from User- because before convert user's answer to uppercase, here just check by YES or Y
   answerBook = prompt(' Is HTML & CSS my favorite book ?').toUpperCase();;
     if (answerBook=='YES' || answerBook=='Y')
     {
       countCorrectAnswer++;
       answer.textContent = 'Well Done!, You got it right ' + userName + '!';
       //alert('Well Done!, You got it right ' + userName + '!');
     }
     else
     {
       answer.textContent = 'Sorry ' + userName + '!' + ' My Favorite Book is HTML & CSS!';
       //alert('Sorry ' + userName + '!' + ' My Favorite Book is HTML & CSS!');
     }
}
function resultCorrectAnswers(){
  //show user number of correct answers
  var result= document.getElementById('correctAnwser')
  result.textContent = userName + ' you got '+ countCorrectAnswer + ' correct answers out of 4 questions';
  //alert(userName + ' you got '+ countCorrectAnswer + ' correct answers out of 4 questions');
}


//Part 3 : Guessing a number by user; finished is a variable with default value=false
// Define a function for checking the user's answer : Low,too Low, too too Low , High, too High , too too hight
//return the function result to while loop
function questionGuessNumber(){
   while (!finished){
      userNumber = parseInt(prompt('I\'m thinking of a number between 100 and 300 , Guess it!'));
      //recall the function checkNumber
      finished = checkNumber();
   }
}
function checkNumber(){
     if(userNumber < 100)
     {
       alert('oh No, your number is too too Low!');
       return false;
     }
     else if (userNumber >= 100 && userNumber < 250)
    {
      alert('oh No, your number is Low!');
       return false;
     }
     else if (userNumber > 250 && userNumber <= 350)
    {
      alert('oh No, your number is high!');
       return false;
     }
     else if (userNumber > 350 && userNumber < 500)
    {
      alert('oh No, your number is too high!');
       return false;
     }
     else if (userNumber >= 500)
     {
        alert('oh No, your number is too too high!');
        return false;
      }
      else if(userNumber === myNum)
      {
        return true;
        alert('Well Done!');
      }
    }


//Part 4: ask question from user by a array of anwsers
function questionGuessWeather(){
  //get the answer from user by a prompt and convert the answer to lowercase
  while (!correctweatheranswer){
  var userWeatherAnswer = prompt('Please guess my favorite Weather!' + '\n' + 'rainy,sunny,cloudy,breezy').toLowerCase();

   //check that user's anwer exist is our array
   if(arrayOfWeather.indexOf(userWeatherAnswer)!== -1){
      correctweatheranswer = true;
      var answer = document.getElementById('weatherId')
      answer.textContent = 'Wel Done, You guess right!';
      //alert('Wel Done, You guess right!');
    }
  }
}
