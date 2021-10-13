let buttons = document.querySelectorAll('.drum');
let numOfButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numOfButtons; i++) {
  buttons[i].addEventListener('click', function() {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


document.addEventListener('keydown', function(e) {
  playSound(e.key);
  buttonAnimation(e.key);
});

function playSound(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      let audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
    case "a":
      let audio2 = new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;
    case "s":
      let audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;
    case "d":
      let audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;
    case "j":
      let audio5 = new Audio("sounds/tom-2.mp3");
      audio5.play();
      break;
    case "k":
      let audio6 = new Audio("sounds/tom-3.mp3");
      audio6.play();
      break;
    case "l":
      let audio7 = new Audio("sounds/tom-4.mp3");
      audio7.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(e){
  let activeButton = document.querySelector("." + e);
  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  },100);
}
