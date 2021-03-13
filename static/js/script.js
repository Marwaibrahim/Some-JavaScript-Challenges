// console.log("HI MARWA");

// var age = prompt("Enter your age");
// document.getElementById('flex-box-result').innerHTML = age;
// console.log(age);
 
//////Challenge 1
function ageInDays(){

    var age = prompt("Enter your birth year");
    var ageIntoDays = ( 2021-age ) * 3645;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode ('Your are ' + ageIntoDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

////Challenge 2
function generateCat(){

    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}


/////Challenge 3
function rpsGame(yourChoice){

  var humenChoice, bootChoice;
  humenChoice = yourChoice.id;
  bootChoice = numberToChoice(randToRpsInt());
  result = decideWinner(humenChoice, bootChoice);
  message = finalMessage(result);
  rpsFrontEnd(yourChoice.id, bootChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3 );
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
  var rpsDatabase = {
      'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
      'paper':{'scissors': 0, 'paper': 0.5, 'rock': 1},
      'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0},
  }

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'you lost', 'color': 'red'};
    }
    else if (yourScore === 0.5){
        return {'message': 'you tied', 'color': 'yellow'};

    }
    else{
    return {'message': 'you won', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, bootImageChoice, finalMessage){

    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,

    }

    //////remove all elements
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humenDiv = document.createElement('div');
    var bootDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humenDiv.innerHTML = "<img src='" +imagesDatabase[humanImageChoice] + "' height=150 width = 150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    bootDiv.innerHTML = "<img src='" +imagesDatabase[bootImageChoice] + "' height=150 width = 150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";


    document.getElementById('flex-box-rps-div').appendChild(humenDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(bootDiv);


}



/////////Challenge 4

var allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
//////////first we need to remember the original colors of all buttons
var copyAllButtons = [];
for (let i = 0; i<allButtons.length; i++){
    copyAllButtons.push(allButtons[i]);
}
console.log(copyAllButtons[0].classList.value);
//copyAllButtons[0].classList.remove('btn-primary');

///////////Second we need to remove all colors 
function buttonColorChange(buttonThingy){

    if(buttonThingy.value === 'red'){
        buttonRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonGreen();
    }
    else if(buttonThingy.value === 'reset'){
        buttonReset();
    }
    else if(buttonThingy.value === 'random'){
        buttonRandom();
    }

}

function buttonRed(){
    for(let i=0; i< allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger')
        // allButtons[i].classList.value = 'btn btn-danger';
    }
}

function buttonGreen(){
     for(let i=0; i< allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success')
        // allButtons[i].classList.value = 'btn btn-success';
    }
}

function buttonReset(){
    for(let i=0; i< allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
        // allButtons[i].classList.value = copyAllButtons[i].classList.value;
    }
}

function buttonRandom(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for(let i = 0; i<allButtons.length; i++){
        var randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
    
}