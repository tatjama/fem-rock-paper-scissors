function showRules(){
    document.querySelector(".rules").style.display = "inherit";

  }
  function hideRules(){
    document.querySelector(".rules").style.display = "none";
  }
  function startGame(){
      document.querySelector('.second').style.display = "none";
      document.querySelector('.start-game').style.display = "initial";
  }
  function pick(){
      document.querySelector('#blank').style.display = "none";
      document.querySelector('#house').style.display = "initial";
      document.querySelector('#house').style.display = "flex";
  }