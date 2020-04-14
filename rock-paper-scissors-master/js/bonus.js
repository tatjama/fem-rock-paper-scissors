/*****DOM @media screen match, listener add on index.html. Function call here */
function displayRulesImageBonus(size){
  if(size.matches){
      document.querySelector('.rules').style.height = '765px';
  }else{
      document.querySelector('.rules').style.height = '470px';
  }
}      
function displayRulesImageOriginal(size){
if(size.matches){
  document.querySelector('.rules').style.height = '765px';
}else{
  document.querySelector('.rules').style.height = '400px';
}
}

/***Change play mode to bonus game */
function bonusGame(){
    playAgain();
    document.querySelector('.logo img').src = './images/logo-bonus.svg';
    document.querySelector('#rules-image').src = './images/image-rules-bonus.svg';    
    displayRulesImageBonus(size);
    document.getElementById('bonus').style.display = 'none';
    document.getElementById('original').style.display = 'initial';
    document.querySelector('.second').style.display = 'none';
    document.getElementById('bonus-intro').style.display = 'flex';
    //document.querySelector('.start-game').style.display = 'none';
    document.querySelector('.gradient').style.display= 'none';
    //playAgain();
}
/**Change play mode to original game */
function originalGame(){
   playAgain();
    document.getElementById('original').style.display = 'none';
    document.querySelector('.logo img').src = './images/logo.svg';
    document.querySelector('#rules-image').src = './images/image-rules.svg';
    displayRulesImageOriginal(size);
    document.getElementById('bonus').style.display = 'initial';
    //document.querySelector('.second').style.display = 'flex';
    document.getElementById('bonus-intro').style.display = "none";
    //document.querySelector('.start-game').style.display = 'none';
   // document.querySelector('.gradient').style.display = 'initial';
   
}
 
function pickCardBonus(e){
  var x = e.className;
  console.log(x);
  y = x.slice(11);
  console.log(y);
  document.getElementById('player-card-image').src = './images/icon-'+ y +'.svg';
  document.querySelector('#bonus-intro').style.display = "none";
  document.querySelector('.start-game').style.display = "initial";
  document.getElementById('player-card').className ='icon ' +y;
  document.querySelector('.gradient').style.display = 'initial';
}
function pickHouse(){
  document.querySelector('#blank').style.display = "none";
  document.querySelector('#house-card').style.display = "flex";
  showHouseCard();
  console.log(rules());
 setTimeout(showResult, 1000);
 
}
