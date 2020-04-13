function bonusGame(){
    document.querySelector('.logo img').src = './images/logo-bonus.svg';
    document.querySelector('#rules-image').src = './images/image-rules-bonus.svg';    
    displayRulesImageBonus(size);
    document.getElementById('bonus').style.display = 'none';
    document.getElementById('original').style.display = 'initial';
}
function originalGame(){
    document.getElementById('original').style.display = 'none';
    document.querySelector('.logo img').src = './images/logo.svg';
    document.querySelector('#rules-image').src = './images/image-rules.svg';
    displayRulesImageOriginal(size);
    document.getElementById('bonus').style.display = 'initial';

}

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