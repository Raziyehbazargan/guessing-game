
//Define Variables : store 3 User's answers
var answerCity;
var answerSport;
var answerColor;
var answerBook;

var guessNumber;
var finished=false;
//count the correct answer
var countCorrectAnswer=0;

//User NAme Variable : store the User Name
var userName;
var myNum = 250;
var arrayOfWeather=['rainy','sunny','cloudy','breezy'];


//get Username of user and change it to UpperCase
userName = prompt('What is your name?').toUpperCase();
console.log('the Name of User is :' + userName);

//show the Appropriate messeage to user
alert('Good to meet you ' + userName + '! ' + ' enjoy your doughnuts');

//anwser questions one from User
answerCity = prompt('Did I grow up in Washington state?').toUpperCase();
//anwser questions one from User
 if (answerCity =='NO' || answerCity=='N')
 {
      countCorrectAnswer++;
      alert('Well Done!, You got it right ' + userName + '!');
 }
 else
 {
   alert('Sorry ' + userName + '!' + ' I grew up in Tehran');
 }
 //anwser questions two from User
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

 //anwser questions three from User
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

   //anwser questions Four from User
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

   while (!finished)
   {
      var userNumber = parseInt(prompt('I\'m thinking of a number between 100 and 300 , Guess it!'));
      finished = checkNumber();
   }



   function checkNumber()
   {
     if(userNumber>0 && userNumber<100)
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

var correctweatheranswer = false;
while (!correctweatheranswer)
{
  var userWeatherAnswer = prompt('Please guess my favorite Weather! you can have 3 guess!' + '\n' + 'Rainy,sunny,Cloudy,breezy').toLowerCase();
  if(arrayOfWeather.indexOf(userWeatherAnswer)!== -1)
  {
    correctweatheranswer=true;
    alert('Wel Done, You guess right!');
  }
}
