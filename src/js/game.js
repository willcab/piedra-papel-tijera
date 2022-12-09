const states = ["paper", "scissors", "rock"];
const scoreHtml = document.querySelector("[data-score]");
const board = document.getElementById("board");
const leyend = document.getElementById("leyend");
const buttons = document.getElementsByClassName("button");
score = [0, 0];
function game(id) {
	let computer = states[Math.floor(Math.random() * 3)];
	show(id, computer);
	setTimeout(result, 1000, id, computer);
	setTimeout(resetBoard, 2000);
}

function result(id, computer) {
	if (computer != id) {
		switch (id) {
			case "paper":
				computer == "rock" ? winner() : lose();
				break;
			case "scissors":
				computer == "paper" ? winner() : lose();
				break;
			case "rock":
				computer == "scissors" ? winner() : lose();
				break;
		}
	} else {
		draw();
	}
}
function resetBoard() {
	leyend.style.visibility = "visible";
	board.innerHTML = `
    <div class="line"></div>
    `;
	for (let button of buttons) {
		button.disabled = false;
	}
}
function show(id, computer) {
	leyend.style.visibility = "hidden";
	for (let button of buttons) {
		button.disabled = true;
	}
	board.innerHTML = `
    <img
    src="../assets/hand-${id}-svgrepo-com.svg"
    height="87"
    width="100"
    />
    <div class="line"></div>
    <img
    src="../assets/hand-${computer}-svgrepo-com.svg"
    height="87"
    width="100"
    />
    `;
}
function winner() {
	score[0] += 1;
	scoreHtml.textContent = score[0] + "-" + score[1];
	board.innerHTML = `
    <h1>Ganaste</h1>
  `;
}
function lose() {
	score[1] += 1;
	scoreHtml.textContent = score[0] + "-" + score[1];
	board.innerHTML = `
    <h1>Perdiste</h1>
  `;
}
function draw() {
	board.innerHTML = `
    <h1>Empate</h1>
  `;
}
