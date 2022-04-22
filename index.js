var readlineSync= require('readline-sync');
var score=0;
//INPUT
var userName=readlineSync.question('Hello, may I have your name?: ')
userName=userName.toUpperCase();
console.log('Welcome '+userName+' to the ME quiz!');

//FUNCTION
function play(question,answer)
  {
    var userAnswer=readlineSync.question(question);
    if(userAnswer===answer){
      console.log("you are RIGHT!");
      score++;
    }
    else{
      console.log("you are WRONG!");
    }
    console.log('Your current score is: ', score);
    console.log('--------------');
  }
//array of objects
var questions=[{
  question: 'what is my full name ?',
  answer: 'dev tripathi'
}, {
  question: "Where do I live ?",
  answer: "kanpur"
               },{
  question: "What is my favourite hobby ?",
  answer: 'gaming'
},{
  question: "What is my favorite food ?",
  answer: 'pizza'
  },{
  question: "Which climate is my favourite ?",
  answer: "winters"
  },{
    question: "Which is my favourite IPL Team",
    answer: "kkr"
  }]

for(var i=0; i<questions.length; i++){
  var currentQuestion=(questions[i]);
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Thankyou for your participation "+userName+" !");
console.log("YAY !Your final score is: ", score);