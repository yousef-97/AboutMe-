'use strict';
var z=0;
var userName = prompt('whats your name?');
alert('most welcome ' + userName);
alert('lets go ' + userName);


//1st Q
function videoGames(){
  var gamesLike = prompt('do i like vedio games?').toUpperCase();
  if (gamesLike ==='YES' ||gamesLike === 'Y') {
    //   console.log('yes i\'m');
    alert('correct');z++;
  }
  else if (gamesLike === 'NO' ||gamesLike === 'N') {
    //   console.log('wrong answer');
    alert('wrong answer');
  }
  else {
  // console.log('PLZ choose (yes , no , y , n)');
    alert('PLZ choose (yes , no , y , n)'); }}

//2nd Q
function swim(){
  var swimng = prompt('can i swim?').toUpperCase();
  if (swimng ==='YES' || swimng === 'Y') {
    //   console.log('good boii');
    alert('i can not');
  }
  else if (swimng === 'NO'|| swimng === 'N') {
    //   console.log('yes im bad');
    alert('yes im bad');z++;
  }
  else {
  // console.log('PLZ choose (yes , no , y , n)');
    alert('PLZ choose (yes , no , y , n)'); }}

//3rd Q
function fly(){
  var flying = prompt('can i fly ?').toUpperCase();
  if (flying ==='YES'|| flying === 'Y') {
    //   console.log('im not a BIRD LOL');
    alert('im not a BIRD LOL');
  }
  else if (flying === 'NO' ||flying === 'N') {
    //   console.log('unfortunately ');
    alert('unfortunately ');z++;
  }
  else {
  // console.log('PLZ choose (yes , no , y , n)');
    alert('PLZ choose (yes , no , y , n)'); }}

//4th Q
function cats(){
  var cat = prompt('do i like cats?').toUpperCase();
  if (cat ==='YES' || cat === 'Y') {
    //   console.log('MIOW');
    alert('MIOW');z++;
  }
  else if (cat === 'NO' || cat === 'N') {
    //   console.log('cats are fluffy and cute');
    alert('cats are fluffy and cute');
  }
  else {
  // console.log('PLZ choose (yes , no , y , n)');
    alert('PLZ choose (yes , no , y , n)'); }}

//5th Q
function mansafLover(){
  var mansaf = prompt('do i love mansaf?').toUpperCase();
  if (mansaf ==='YES' || mansaf === 'Y') {
    //   console.log('yami');
    alert('yami');z++;
  }
  else if (mansaf === 'NO' || mansaf === 'N') {
    //   console.log('GG');
    alert('GG');
  }
  else {
  // console.log('PLZ choose (yes , no , y , n)');
    alert('PLZ choose (yes , no , y , n)'); }}



//6th Q
function chooseNumber(){
  var luckyNum = 12;
  var guessNum = prompt('guess my lucky number','0-25');
  // while (guessNum < 0 || guessNum>100){guessNum = prompt('guess my luky number','0-100');}

  for(var i=1 ; i<=3 ; i++){
    if(Number(guessNum)===luckyNum){alert('that\'s correct');z++;break;}
    // else if(Number(guessNum)>lovleyNum && Number(guessNum)<=lovleyNum+20){alert('high but close');}
    // else if(Number(guessNum)<lovleyNum && Number(guessNum)>=lovleyNum-20){alert('low but close');}
    else if(Number(guessNum)>luckyNum){alert('too high');}
    else if(Number(guessNum)<luckyNum){alert('too low');}
    guessNum = prompt('guess again','0-25');
    if (i===3){alert('answer is '+ luckyNum);}
  }}

//7th Q
function car(){
  var topCar=['bmw','mitsubishi','mercedes','mini cooper','chevrolet','ferrari','purusha'];
  var gameGuess = prompt('guess one of my lovely cars','you have 6 attempt').toLowerCase();

  for( var counter=1;counter<=5;counter++){

    for(var otherCounter=0 ; otherCounter <= topCar.length-1;otherCounter++ ){
      if(topCar[otherCounter]===gameGuess){alert('NICE Guessing');z++;alert('answer is all of these '+topCar);break;}
    }
    if (topCar[otherCounter]===gameGuess){break;}
    gameGuess = prompt('guess again');
    if (counter===5){alert('answer is all of these '+topCar);}

  }}
videoGames();
swim();
fly();
cats();
mansafLover();
chooseNumber();
car();
alert('Your score '+z+' of 7');
