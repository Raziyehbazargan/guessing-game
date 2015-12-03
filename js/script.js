

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

//Define Varibales for Guessing 5 : set a number and ask user to guess
var myNum = 250;

//Define Varibales for Guessing 6: set a array with answers and ask user to guess
var arrayOfWeather=['rainy','sunny','cloudy','breezy'];


//Part 1 :get Username of user and change it to UpperCase
userName = prompt('What is your name?').toUpperCase();
console.log('the Name of User is :' + userName);

//show the Appropriate messeage to user
alert('Good to meet you ' + userName + '! ' + ' enjoy your doughnuts');

//Part 2 : anwser questions one from User
answerCity = prompt('Did I grow up in Washington state?').toUpperCase();

//Ask  First question from User
 if (answerCity =='NO' || answerCity=='N')
 {
      countCorrectAnswer++;
      alert('Well Done!, You got it right ' + userName + '!');
 }
 else {
   alert('Sorry ' + userName + '!' + ' I grew up in Tehran');
 }

 //Ask  Secound question from User
 answerSport = prompt("Is my favorite sport TRX?").toUpperCase();
   if (answerSport =='YES' || answerSport=='Y')
   {
     countCorrectAnswer++;
     alert('Well Done!, You got it right ' + userName + '!');
   }
   else
   {
   alert('Sorry ' + userName + '!' + ' My Favorite sport is TRX!');
   }

  //Ask  Third question from User
 answerColor = prompt(' Is my favorite color Green?').toUpperCase();;
   if (answerColor=='YES' || answerColor=='Y')
   {
     countCorrectAnswer++;
     alert('Well Done!, You got it right ' + userName + '!');
   }
   else
   {
     alert('Sorry ' + userName + '!' + ' My Favorite Color is Green!');
   }

   //Ask  Fourth question from User
   answerBook = prompt(' Is HTML & CSS my favorite book ?').toUpperCase();;
     if (answerColor=='YES' || answerColor=='Y')
     {
       countCorrectAnswer++;
       alert('Well Done!, You got it right ' + userName + '!');
     }
     else
     {
       alert('Sorry ' + userName + '!' + ' My Favorite Book is HTML & CSS!');
     }


   //show user number of correct answers
   alert(userName + ' you got '+ countCorrectAnswer + ' correct answers out of 3 questions');


//Part 3 : Guessing a number by user
   while (!finished)
   {
      var userNumber = parseInt(prompt('I\'m thinking of a number between 100 and 300 , Guess it!'));
      //recall the function checkNumber
      finished = checkNumber();
   }

// Define a function for checking the user's answer : Low,too Low, too too Low , High, too High , too too hight
//return the function result to while loop
   function checkNumber()
   {
     if(userNumber > 0 && userNumber < 100)
     {
       alert('oh No, your number is too Low!');
       return false;
     }
     else if (userNumber > 100 && userNumber < 250)
    {
      alert('oh No, your number is Low!');
       return false;
     }
     else if (userNumber > 250 && userNumber <= 350)
    {
      alert('oh No, your number is high!');
       return false;
     }
     else if (userNumber > 350 && userNumber <= 500)
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
var correctweatheranswer = false;
while (!correctweatheranswer)
 {
   //get the answer from user by a prompt and convert the answer to lowercase
   var userWeatherAnswer = prompt('Please guess my favorite Weather! you can have 3 guess!' + '\n' + 'Rainy,sunny,Cloudy,breezy').toLowerCase();

   //check that user's anwer exist is our array
   if(arrayOfWeather.indexOf(userWeatherAnswer)!== -1)
    {
    correctweatheranswer=true;
    alert('Wel Done, You guess right!');
  }
}
