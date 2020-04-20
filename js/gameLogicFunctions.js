/* function gameLogic(){
    let a = document.getElementById('player-card').className.slice(5);
    let b = document.getElementById('house-card').className.slice(5);    
      if(a == b){
        return equal;
      }else if((a == paper && (b == rock || b == spock)) || 
      (a == rock && ( b == lizard || b == scissors)) ||
      (a == lizard && ( b == spock || b == paper)) || 
      (a == spock && ( b == scissors || b == rock)) ||
      (a == scissors && ( b == paper || b == lizard))){
        return win;
      }else{ 
          return lose;
        }
   }*/

   /*function gameLogic(){
     let player = document.getElementById('player-card').className.slice(5);
     let house = document.getElementById('house-card').className.slice(5);     

     switch(player+house){
       case (player+player): return equal;
       break;
       case (paper+rock): return win;
       break;
       case (paper+spock): return win;
       break;
       case (rock+lizard): return win;
       break;
       case (rock+scissors): return win;
       break;
       case (lizard+spock): return win;
       break;
       case (lizard+paper): return win;
       break;
       case (spock+scissors): return win;
       break;
       case (spock+rock): return win;
       break;
       case (scissors+paper): return win;
       break;
       case (scissors+lizard): return win;
       break;
       default: return lose;       
     }
   }*/
 