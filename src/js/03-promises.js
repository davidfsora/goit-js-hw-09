let delayInput = document.querySelector('[name="delay"]');
let stepInput = document.querySelector('[name="step"]');
let amountInput = document.querySelector('[name="amount"]');
let submitForm = document.querySelector(".form");
let delay = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
	return new Promise((resolve, reject) => {
	setTimeout(() => {
		if (shouldResolve) {
			resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
		} else {
			reject(`❌ Rejected promise ${position} in ${delay}ms`);
		}
	}, delay);
});
};

submitForm.addEventListener('submit', (event) => {
	event.preventDefault();

	let firstDelay = parseInt(delayInput.value);
	let stepDelay = parseInt(stepInput.value);
	let amount = parseInt(amountInput.value);

	for (let i = 1; i <= amount; i++) {
		delay = firstDelay + (i - 1) * stepDelay;
		createPromise(i, delay)
			.then(result => console.log(result))
			.catch(error => console.error(error));
	}
});
