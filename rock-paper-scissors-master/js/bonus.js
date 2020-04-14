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
    document.getElementById('blank').removeEventListener('click', pickHouse);
   // document.getElementById('play-again').removeEventListener('click', playAgain)
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
   document.getElementById('blank').removeEventListener('click', pickHouseBonus);
   document.getElementById('play-again').removeEventListener('click', playAgainBonus);
}
 



function playAgainBonus(){  
  document.querySelector('#bonus-intro').style.display = "flex";
  document.querySelector('.second').style.display = 'none';
     /*document.getElementById('play-again').style.display = 'none';
    document.querySelector('.gradient').id = '';
    document.getElementById('house-card').style.display = "none";
    document.getElementById('blank').style.display = "flex";
    document.querySelector('.start-game').style.display = "none";*/
}
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
 
}