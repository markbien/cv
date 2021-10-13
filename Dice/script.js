function play() {
  let img1 = document.querySelector('.img1');
  let img2 = document.querySelector('.img2');
  let h1 = document.querySelector('h1');

  function generateDice(item) {
    let randNum = Math.floor(Math.random() * 6) + 1;
    item.setAttribute('src', "images/dice" + randNum + ".png");
    return randNum;
  }

  let num1 = generateDice(img1);
  let num2 = generateDice(img2);

  if (num1 > num2) {
    h1.innerHTML = "Player 1 Wins! <i class='fas fa-flag'></i>";
  } else if (num1 < num2) {
    h1.innerHTML = "Player 2 Wins! <i class='fas fa-flag'></i>";
  } else {
    h1.textContent = "Tie!";
  }
}

window.onload = play();
