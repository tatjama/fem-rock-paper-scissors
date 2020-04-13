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
 /*******GAME LOGIC */ 
  function pickCard(e){
      var x = e.className;
      console.log(x);
      y = x.slice(5);
      console.log(y);
      document.getElementById('player-card-image').src = './images/icon-'+ y +'.svg';
      document.querySelector('.second').style.display = "none";
      document.querySelector('.start-game').style.display = "initial";
      document.getElementById('player-card').className = x;
      
  }
  function pickHouse(){
      document.querySelector('#blank').style.display = "none";
      document.querySelector('#house-card').style.display = "flex";
      showHouseCard();
      console.log(rules());
     setTimeout(showResult, 1000);
     
  }
  function showHouseCard(){
      let x = Math.floor((Math.random() * 3) + 1);    
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
      }
      document.getElementById('house-card-image').src = './images/icon-' + y + '.svg';
      document.getElementById('house-card').className = 'icon ' + y;

  }
   function rules(){
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
  /****GAME RESULT SHOW AND SAVE IN SESSION */
  function showResult(){    

    var score = parseInt(document.querySelector('.score h1').innerHTML);    

    //ssesion storage 
    sessionStorage.setItem('score', score );
    if(sessionStorage){  
      document.querySelector('.score h1').innerHTML = parseInt(sessionStorage.getItem('score')); 
    }else{
      document.querySelector('.score h1').innerHTML = 0;
    } 
    switch(rules()){
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
  function playAgain(){
    document.querySelector('.second').style.display = "flex";
    document.getElementById('play-again').style.display = 'none';
    document.querySelector('.gradient').id = '';
    document.getElementById('house-card').style.display = "none";
    document.getElementById('blank').style.display = "flex";
    document.querySelector('.start-game').style.display = "none"; 
  }
  function showScore(){

  }