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
   document.getElementById('blank').addEventListener('click', pickHouseBonus);
   document.getElementById('play-again').addEventListener('click', playAgainBonus);
}
function pickHouseBonus(){  
  document.querySelector('#blank').style.display = "none";
  document.querySelector('#house-card').style.display = "flex";
  showHouseCardBonus();
  //console.log(rules());
  setTimeout(showResult, 1000); 
}
function showHouseCardBonus(){
  let x = Math.floor((Math.random() * 5) + 1);    
  let y = "";
  switch(x){
    case 1: 
    y = 'paper';
    break;
    case 2: 
    y = 'scissors';        
    break;
    case 3: 
    y = 'rock';
    break;
    case 4:
    y = 'spock';
    break;
    case 5:
    y = 'lizard';
    break;  
  }
  document.getElementById('house-card-image').src = './images/icon-' + y + '.svg';
  document.getElementById('house-card').className = 'icon ' + y;
}
/***same function */
function showResult(){    

  var score = parseInt(document.querySelector('.score h1').innerHTML);    

  //ssesion storage 
  sessionStorage.setItem('score', score );
  if(sessionStorage){  
    document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')); 
  }else{
    document.querySelector('.score h1').innerHTML = 0;
  } 
  switch(rulesBonus()){
    case 'win':      
    document.querySelector('.gradient').id = 'gradient';
    document.getElementById('play-again').style.display = 'flex';
    document.querySelector('#play-again h2').innerHTML = 'Y o u &nbsp W i n';
    document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')) + 1;
    break;
    case 'lose':      
    document.querySelector('.gradient').id = 'gradient1';
    document.getElementById('play-again').style.display = 'flex';
    document.querySelector('#play-again h2').innerHTML = 'Y o u &nbsp L o s e';
    document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')) - 1;
    break;
    default:
    document.querySelector('.gradient').id = '';
    document.getElementById('play-again').style.display = 'flex';
    document.querySelector('#play-again h2').innerHTML = ' E q u a l';
    document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score'));
    break;
  }
  //NEW SCORE WRITE IN SESSION
  sessionStorage.setItem('score', document.querySelector('.score h1').innerHTML)
 
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