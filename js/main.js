
     var paper, rock, scissors, lizard, spock, equal, lose, win, messageEqual, messageLose, messageWin;     
     
      paper = 'paper';
      rock =  'rock';
      scissors = 'scissors';
      spock = 'spock';
      lizard = 'lizard';
      equal = 'equal';
      lose = 'lose';
      win = 'win';
      messageEqual = 'E q u a l';
      messageWin = 'Y o u &nbsp W i n';
      messageLose = 'Y o u &nbsp L o s e';
      
      function audio(url){
        new Audio(url).play();
      }
      

    
     
/*****START SCORE ONLOAD. SESSION VALUE IS START SCORE */
function storageScore(){
    if( isNaN(parseInt( sessionStorage.getItem('score') ))){
       document.querySelector('.score h1').innerHTML = 0;
     }else{
       document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score'));
     }
 }

/*****RULES SHOW AND HIDE */
function showRules(){
    document.querySelector(".rules").style.display = "block";
  }
  function hideRules(){
    document.querySelector(".rules").style.display = "none";
  }

 /*******GAME LOGIC , pick player card and bonus player card*/ 
 
  function pickCardPlayer(e, b, c, d, g, url){
    new Audio(url).play();

      var x = e.className;
      var playerCard = document.getElementById('player-card');
      y = x.slice(b);
      document.getElementById('player-card-image').src = './images/icon-'+ y +'.svg';
      document.querySelector(g).style.display = "none";
      document.querySelector('.start-game').style.display = "initial";
      playerCard.className = 'icon ' + y;
      document.getElementById('blank').addEventListener('click', c);
      document.getElementById('play-again').addEventListener('click', d);
  } 
  
  function pickCardHouse(){
      document.querySelector('#blank').style.display = "none";
      document.querySelector('#house-card').style.display = "flex";
      showHouseCard(3);
     setTimeout(showResult, 1000);     
  }

  function pickCardHouseBonus(){  
    document.querySelector('#blank').style.display = "none";
    document.querySelector('#house-card').style.display = "flex";
    showHouseCard(5);
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

  var rulesOfGame = {
    paper: [rock, spock],
    rock: [lizard, scissors],
    lizard: [spock, paper],
    spock: [scissors, rock],
    scissors: [paper, lizard]
  }
  
  function gameLogic(){
    let player = document.getElementById('player-card').className.slice(5);
    let house = document.getElementById('house-card').className.slice(5);
    let key = rulesOfGame[player];  
   
    if(player === house){
      return equal;
    }  
    for(let i = 0; i < key.length; i++ ){        
      if(key[i] == house ){        
       return  win;        
      }
    }  
    return lose;  
  }
   
  /****GAME RESULT SHOW AND SAVE IN SESSION - SAME FUNCTION IN BONUS*/
  function showResult(){       
    var score = parseInt(document.querySelector('.score h1').innerHTML);
    //session storage 
    sessionStorage.setItem('score', score );
    if(sessionStorage){  
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')); 
    }else{
      document.querySelector('.score h1').innerHTML = 0;
    } 
    document.getElementById('play-again').style.display = 'flex';
    console.log(gameLogic())
    switch(gameLogic()){      
      case win:      
      document.querySelector('.gradient').id = 'gradient';      
      document.querySelector('#play-again h2').innerHTML = messageWin;
      document.querySelector('#play-again h2').classList.add('animacija');
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')) + 1;
      document.querySelector('.gradient').style.display = 'initial';     
      audio('./audio/applause_short.mp3');
      break;
      case lose:      
      document.querySelector('.gradient').id = 'gradient1';
      document.querySelector('#play-again h2').innerHTML = messageLose;
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')) - 1;
      document.querySelector('.gradient').style.display = 'initial';
      audio('./audio/boo_short.mp3');
      break;
      default:
      document.querySelector('.gradient').id = '';
      document.querySelector('#house-card-image').classList.add('isto');
      document.querySelector('#player-card-image').classList.add('isto');
      document.querySelector('#play-again h2').innerHTML = messageEqual;
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score'));
      audio('./audio/coin_short.mp3');
      break;
    }
    //new score write in section
    sessionStorage.setItem('score', document.querySelector('.score h1').innerHTML)   
  }

  function playAgain(){
    document.querySelector('.second').style.display = "flex";
    document.getElementById('play-again').style.display = 'none';
    document.querySelector('#play-again h2').classList.remove('animacija');
    document.querySelector('.gradient').id = '';
    document.querySelector('.gradient').style.display = 'none';
    document.getElementById('house-card').style.display = "none";
    document.getElementById('blank').style.display = "flex";
    document.querySelector('.start-game').style.display = "none"; 
    document.querySelector('#player-card-image').classList.remove('isto');
    document.querySelector('#house-card-image').classList.remove('isto');
  }
  