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
    document.getElementById('blank').removeEventListener('click', pickHouse);
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
   document.getElementById('blank').removeEventListener('click', pickHouseBonus);
   document.getElementById('play-again').removeEventListener('click', playAgainBonus);
}

function playAgainBonus(){  
  document.querySelector('#bonus-intro').style.display = "flex";
  document.querySelector('.second').style.display = 'none';    
}

function rulesBonus(){
  let a = document.getElementById('player-card').className.slice(5);
  let b = document.getElementById('house-card').className.slice(5);  
      
  
    if(a == b){
      return 'equal'
    }else if((a =='paper'&& (b =='rock' ||b =='spock')) || (a =='rock' && ( b =='lizard' || b =='scissors')) ||
    (a == 'lizard' && ( b =='spock' || b == 'paper')) || (a == 'spock' && ( b == 'scissors' || b == 'rock')) ||
    ( a == 'scissors' && ( b =='paper' || b== 'lizard'))){
      return 'win'}else{ 
        return 'lose'
      }
 }
/*
function rulesBonus(){
  let result, player, house = '';
  player = document.getElementById('player-card').className.slice(5);
  house = document.getElementById('house-card').className.slice(5);    
 
 switch(player){
   case 'paper':
     if(house == 'rock'){
       result =  'win'
     }else if(house == 'scissors'){
       result = 'lose'
     }else{
     result =  'equal';
    }
     break;
     case 'rock':
       if(house == 'scissors'){
         result = 'win';
       }else if(house == 'paper'){
         result = 'lose'
       }else{
       result = 'equal';
     }
       break;
       case 'scissors':
         if(house == 'paper'){
           result = 'win';
         }else if(house == 'rock'){
           result = 'lose';
         }else{
         result = 'equal';
       }
         break;            
 }
 return result;
 
}*/