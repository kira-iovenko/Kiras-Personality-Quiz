/*Add your JavaScript here*/

/*variable to store each outcome*/
var eliScore = 0;
var joScore = 0;

/*variable to store the number of questions answered*/
var numQuestion = 0;

/*Store HTML variables using DOM*/
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

/*update quiz result*/
function updateResult(){
  if (eliScore >= 2){
    result.innerHTML = ("You are Elizabeth Bennet!");
    console.log("You are Elizabeth Bennet!");
  } else if (joScore >= 2){
    result.innerHTML = ("You are Jo March!");
    console.log("You are Jo March!");
  }
}

/*track eliScore and check if quiz is complete*/
function eli(){
  eliScore += 1;
  numQuestion += 1;

  console.log("numQuestion = "+ numQuestion+" eliScore = "+eliScore);
  if (numQuestion == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

/*track joScore and check if quiz is complete*/
function jo(){
  joScore += 1;
  numQuestion += 1;

  console.log("numQuestion = "+ numQuestion+" joScore = "+joScore);
  if (numQuestion == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}
/*variable for restart button*/
var restart = document.getElementById("restart");

/*listen for click on answer buttons and call function if clicked*/
q1a1.addEventListener("click", eli);
q1a2.addEventListener("click", jo);
q2a1.addEventListener("click", eli);
q2a2.addEventListener("click", jo);
q3a1.addEventListener("click", eli);
q3a2.addEventListener("click", jo);
restart.addEventListener("click", clear);

/*clear results*/
function clear(){
  result.innerHTML = ("Your result is...");
  eliScore = 0;
  joScore = 0;
  numQuestion = 0;
}