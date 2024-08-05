/*Add your JavaScript here*/

/*variable to store each outcome*/
var eliScore = 0;
var joScore = 0;

/*variable to store the number of questions answered*/
var numQuestion = 0;

/*variables to store the buttons*/
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

/*update quiz result*/
function updateResult(){
  if (eliScore >= 2){
    console.log("You are Elizabeth Bennet!");
  } else if (joScore >= 2){
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

/*listen for click on answer buttons and call function if clicked*/
q1a1.addEventListener("click", eli);
q1a2.addEventListener("click", jo);
q2a1.addEventListener("click", eli);
q2a2.addEventListener("click", jo);
q3a1.addEventListener("click", eli);
q3a2.addEventListener("click", jo);