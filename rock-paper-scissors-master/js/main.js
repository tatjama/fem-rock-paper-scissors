/*****START SCORE ONLOAD. SESSION VALUE IS START SCORE */
function storageScore(){
  // alert(sessionStorage.getItem('score')); 
    
    if( isNaN(parseInt( sessionStorage.getItem('score') ))){
       document.querySelector('.score h1').innerHTML = 0;
     }else{
       document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score'));
     }
 }
/*****RULES SHOW AND HIDE */
function showRules(){
    document.querySelector(".rules").style.display = "inherit";
  }
  function hideRules(){
    document.querySelector(".rules").style.display = "none";
  }

 /*******GAME LOGIC , pick player card and bonus player card*/ 
  function pickCard(e, b, c, d, g){
      var x = e.className;
      //console.log(x);
      y = x.slice(b);
      //console.log(y);
      document.getElementById('player-card-image').src = './images/icon-'+ y +'.svg';
      document.querySelector(g).style.display = "none";
      document.querySelector('.start-game').style.display = "initial";
      document.getElementById('player-card').className = 'icon ' + y;
      document.getElementById('blank').addEventListener('click', c);
      document.getElementById('play-again').addEventListener('click', d);
  } 
  
  function pickHouse(){
      document.querySelector('#blank').style.display = "none";
      document.querySelector('#house-card').style.display = "flex";
      showHouseCard(3);
      //console.log(rules());
     setTimeout(showResult, 1000);     
  }
  function pickHouseBonus(){  
    document.querySelector('#blank').style.display = "none";
    document.querySelector('#house-card').style.display = "flex";
    showHouseCard(5);
    //console.log(rules());
    setTimeout(showResult, 1000); 
  }

  function showHouseCard(n){
    let x = Math.floor((Math.random() * n) + 1);    
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

  /****GAME LOGIC */
  function gameResult(){
    let a = document.getElementById('player-card').className.slice(5);
    let b = document.getElementById('house-card').className.slice(5);    
      if(a == b){
        return 'equal'
      }else if((a =='paper'&& (b =='rock' ||b =='spock')) || 
      (a =='rock' && ( b =='lizard' || b =='scissors')) ||
      (a == 'lizard' && ( b =='spock' || b == 'paper')) || 
      (a == 'spock' && ( b == 'scissors' || b == 'rock')) ||
      ( a == 'scissors' && ( b =='paper' || b== 'lizard'))){
        return 'win'
      }else{ 
          return 'lose'
        }
   }
   
  /****GAME RESULT SHOW AND SAVE IN SESSION - SAME FUNCTION IN BONUS*/
  function showResult(){    
    var score = parseInt(document.querySelector('.score h1').innerHTML);
    //ssesion storage 
    sessionStorage.setItem('score', score );
    if(sessionStorage){  
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')); 
    }else{
      document.querySelector('.score h1').innerHTML = 0;
    } 
    document.getElementById('play-again').style.display = 'flex';
    
    switch(gameResult()){      
      case 'win':      
      document.querySelector('.gradient').id = 'gradient';      
      document.querySelector('#play-again h2').innerHTML = 'Y o u &nbsp W i n';
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')) + 1;
      document.querySelector('.gradient').style.display = 'initial';
      break;
      case 'lose':      
      document.querySelector('.gradient').id = 'gradient1';
      document.querySelector('#play-again h2').innerHTML = 'Y o u &nbsp L o s e';
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')) - 1;
      document.querySelector('.gradient').style.display = 'initial';
      break;
      default:
      document.querySelector('.gradient').id = '';
      document.querySelector('#play-again h2').innerHTML = ' E q u a l';
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score'));
      break;
    }
    //new score write in section
    sessionStorage.setItem('score', document.querySelector('.score h1').innerHTML)   
  }

  function playAgain(){
    document.querySelector('.second').style.display = "flex";
    document.getElementById('play-again').style.display = 'none';
    document.querySelector('.gradient').id = '';
    document.querySelector('.gradient').style.display = 'none';
    document.getElementById('house-card').style.display = "none";
    document.getElementById('blank').style.display = "flex";
    document.querySelector('.start-game').style.display = "none"; 
  }
  