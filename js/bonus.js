/*****DOM @media screen match, listener add on index.html. Function call here */
function displayRulesImageBonus(size){
  if(size.matches){
      document.querySelector('.rules').style.height = '790px';
  }else{
      document.querySelector('.rules').style.height = '460px';
      document.querySelector('.rules').style.width = '405px';
  }
}      
function displayRulesImageOriginal(size){
if(size.matches){
  document.querySelector('.rules').style.height = '790px';
}else{
  document.querySelector('.rules').style.height = '400px';
  document.querySelector('.rules').style.width = '385px';
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
    document.getElementById('blank').removeEventListener('click', pickCardHouse);
    document.getElementById('play-again').addEventListener('click', playAgain);
}

/**Change play mode to original game */
function originalGame(){
   playAgain();
    document.getElementById('original').style.display = 'none';
    document.querySelector('.logo img').src = './images/logo.svg';
    document.querySelector('#rules-image').src = './images/image-rules.svg';
    displayRulesImageOriginal(size);
    document.getElementById('bonus').style.display = 'initial';
    document.getElementById('bonus-intro').style.display = "none";
   document.getElementById('blank').removeEventListener('click', pickCardHouseBonus);
   document.getElementById('play-again').removeEventListener('click', playAgainBonus);
}

function playAgainBonus(){    
  playAgain();
  document.querySelector('#bonus-intro').style.display = "flex";
  document.querySelector('.second').style.display = 'none';    
}

