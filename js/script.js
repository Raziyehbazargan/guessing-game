
//Define Variables : store 3 User's answers
var answerCity;
var answerSport;
var answerColor;
//count the correct answer
var countCorrectAnswer=0;
//User NAme Variable : store the User Name
var userName;

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

 //show user number of correct answers
 alert(userName + ' you got '+ countCorrectAnswer + ' correct answers out of 3 questions');
