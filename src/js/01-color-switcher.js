let startButton = document.querySelector("[data-start]");
let stopButton = document.querySelector("[data-stop]");
let body = document.querySelector("body");
let timer = null;
stopButton.disabled = true;

startButton.addEventListener("click", () => {
	startButton.disabled = true;
	stopButton.disabled = false;
	body.style.backgroundColor = getRandomHexColor();
	timer = setInterval(() => {
		body.style.backgroundColor = getRandomHexColor();
	}, 1000);
});

stopButton.addEventListener("click", () => {
	clearInterval(timer);
	startButton.disabled = false;
	stopButton.disabled = true;
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
