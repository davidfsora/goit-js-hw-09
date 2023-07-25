import flatpickr from "flatpickr";
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";

let startButton = document.querySelector("button");
let pickerDate = new Date();

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	dateFormat: "Y-m-d H:i",
	onClose(selectedDates) {
		pickerDate = flatpickr.formatDate(selectedDates[0], "Y-m-d H:i");

		dateValidation(getDateFromPicker(pickerDate));
	},
};

flatpickr("#datetime-picker", options);
startButton.disabled = true;

function getDateFromPicker(dateFromPicker){
	let pickedDate = (dateFromPicker).split(" ");
	let dateParts = pickedDate[0].split('-');
	let timeParts = pickedDate[1].split(':');
	let [year, month, day] = [+dateParts[0], +dateParts[1], +dateParts[2]];
	let [hours, minutes] = [+timeParts[0], +timeParts[1]];
	let selectedDate = new Date();
	selectedDate.setFullYear(year);
	selectedDate.setMonth(month - 1);
	selectedDate.setDate(day);
	selectedDate.setHours(hours);
	selectedDate.setMinutes(minutes);
	selectedDate.setSeconds(0);
	return selectedDate;
};

function dateValidation(selectedDate){
	let currentDate = Date.now();
	if (selectedDate.getTime() <= currentDate) {
		startButton.disabled = true;
		alert("Please choose a date in the future");
	}
	else {
		startButton.disabled = false;
	}
};

function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}

startButton.addEventListener('click', () => {
	startButton.disabled = true;

	timer = setInterval(() => {
		remainingTimeTimer(getDateFromPicker(pickerDate));
	}, 1000);
});

function remainingTimeTimer(date) {
	let currentDate = Date.now();
	let remainingTime = date - currentDate;
	let { days, hours, minutes, seconds } = convertMs(remainingTime);

	document.querySelector("[data-days]").textContent = addLeadingZero(days);
	document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
	document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
	document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);

	if(days == 0 & hours == 0 & minutes == 0 & seconds == 0){
		clearInterval(timer);
	}
};

function addLeadingZero(item){
	return String(item).padStart(2, '0');	
}