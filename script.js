let boxes = document.querySelectorAll(".box");
let results = document.querySelector("#results");
let playAgain = document.querySelector("#play-again");

let turn = "X";
let isGameOver = false;

boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      cheakWin();
      cheakDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

function cheakWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let v0 = boxes[winConditions[i][0]].innerHTML;
    let v1 = boxes[winConditions[i][1]].innerHTML;
    let v2 = boxes[winConditions[i][2]].innerHTML;

    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
      results.innerHTML = turn + " win";
      playAgain.style.display = "inline";
    }
  }
}

function cheakDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });

    if (isDraw) {
      isGameOver = true;
      results.innerHTML = "Draw";
      playAgain.style.display = "inline";
    }
  }
}
playAgain.addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  results.innerHTML = "";
  playAgain.style.display = "none";

  boxes.forEach((e) => {
    e.innerHTML = "";
  });
});
