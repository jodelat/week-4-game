
var wins = 0;

var losses = 0;

var total = 0;


var randomArray = [];

var clickNum1 = [Math.floor(Math.random()*12 +1)];
var clickNum2 = [Math.floor(Math.random()*12 +1)];
var clickNum3 = [Math.floor(Math.random()*12 +1)];
var clickNum4 = [Math.floor(Math.random()*12 +1)];

function resetTotal(){
  total = 0;
}
function resetRandom(){
  randomArray = [];
}

function resetClick(){
  clickNum1 = [Math.floor(Math.random()*12 +1)];
  clickNum2 = [Math.floor(Math.random()*12 +1)];
  clickNum3 = [Math.floor(Math.random()*12 +1)];
  clickNum4 = [Math.floor(Math.random()*12 +1)];
}

function generateRandom(){
  resetRandom();
  var randomNum = [Math.floor(Math.random()*101+19)];
  $("#random-number").html("<div>" + randomNum + "</div>")
  randomArray.push(randomNum);
  console.log(randomNum);
  return randomNum;
}



function generateNumber(){

  if(total > randomArray){
    alert("you lose");
    losses++;
   $("#lossUpdate").html("<div>"+ "losses:" + losses + "</div>")
    generateRandom();
    resetClick();
    resetTotal();
  }

  else if(total == randomArray){
    alert("you gain a win!");
    wins++;
    $("#winUpdate").html("<div>"+ "wins:" + wins +"</div>")
    generateRandom();
    resetClick();
    resetTotal();
  }

}

$(document).ready(function(){

  generateRandom();

  $("#blueCrystal").on("click", function(){
    total += parseInt(clickNum1);
    generateNumber();
    console.log(total);
    $("#scoreNumber").html("<div>" + total + "</div>")
  });

  $("#pinkDiamond").on("click", function(){
    total += parseInt(clickNum2);
    generateNumber();
    console.log(total);
    $("#scoreNumber").html("<div>" + total + "</div>")
  });

  $("#greenCrystal").on("click", function(){
    total += parseInt(clickNum3);
    generateNumber();
    console.log(total);
    $("#scoreNumber").html("<div>" + total + "</div>")
  });

  $("#blueDiamond").on("click", function(){
    total += parseInt(clickNum4);
    generateNumber();
    console.log(total);
    $("#scoreNumber").html("<div>" + total + "</div>")
  });

});
