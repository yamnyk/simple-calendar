import $ from 'jquery'
import CalendarCell from './CalendarCell'

const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь'
];

const weekDays = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота'
];

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const calendarRender = (root = '#calendar', header = '.cal-nav__month', year = new Date().getFullYear(), month = new Date().getMonth()) => {
	$(root).empty();
	
	let lastOfMonth = new Date(year, month+1, 0);
	const lastWeekDay =lastOfMonth.getDay();
	const daysInMonth = lastOfMonth.getDate();
	let firstOfMonth = new Date(year, month, 1);
	const firstWeekDay = firstOfMonth.getDay();
	
	$(header).text(`${months[month]} ${year}`);
	
	const $fragment = $(document.createDocumentFragment());
	createDaysHeaders($fragment);
	
	console.log('fwdf',firstWeekDay);
	if(firstWeekDay !== 0) {
		addEmptyCells(1, firstWeekDay, $fragment);
	} else if(firstWeekDay === 1) {
		addEmptyCells(0, firstWeekDay, $fragment);
	} else if (firstWeekDay === 0) {
		addEmptyCells(firstWeekDay, 6, $fragment);
	}
	
	for (let i = 1; i <= daysInMonth; i++) {
		$fragment.append(new CalendarCell(year, month, i).create())
	}
	
	if(lastWeekDay !== 7 && lastWeekDay !== 0) {
		addEmptyCells(lastWeekDay, 7, $fragment);
	}
	
	$(root).append($fragment);
};

function createDaysHeaders(root) {
	root.append(`<div class="calendar__item">Понедельник</div>
        <div class="calendar__item">Вторник</div>
        <div class="calendar__item">Среда</div>
        <div class="calendar__item">Четверг</div>
        <div class="calendar__item">Пятница</div>
        <div class="calendar__item">Суббота</div>
        <div class="calendar__item">Воскресенье</div>`)
}

function addEmptyCells(from, to, fragment) {
	for (let i = from; i < to; i++) {
		console.log(i);
		fragment.append(new CalendarCell().createEmpty());
	}
	console.log('_____________');
}

calendarRender('#calendar','.cal-nav__month');

$('.switch-btn__prev').on('click', () => {
	if(currentMonth === 0) {
		currentYear -= 1;
	}
	currentMonth = currentMonth === 0 ? 11 : Math.abs(currentMonth - 1);
	console.log('current month incide click',currentMonth);
	calendarRender('#calendar','.cal-nav__month',currentYear,currentMonth);
});
$('.switch-btn__next').on('click', () => {
	if(currentMonth === 0) {
		currentYear += 1;
	}
	currentMonth = currentMonth === 11 ? 0 : Math.abs(currentMonth + 1);
	console.log('current month incide click',currentMonth);
	calendarRender('#calendar','.cal-nav__month',currentYear,currentMonth);
});
