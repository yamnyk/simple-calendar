import $ from 'jquery'
import CallendarCell from './CalendarCell'

const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Март',
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


const calendarRender = (root = '#calendar', header = '.cal-nav__month', year = new Date().getFullYear(), month = new Date().getMonth()) => {
	let lastOfMonth = new Date(year, month+1, 0);
	const lastWeekDay =lastOfMonth.getDay();
	const daysInMonth = lastOfMonth.getDate();
	let firstOfMonth = new Date(year, month, 1);
	const firstWeekDay = firstOfMonth.getDay();
	
	$(header).text(`${months[month]} ${year}`);
	
	const fragment = $(document.createDocumentFragment());
	
	if(firstWeekDay !== 0) {
		addEmptyCells(firstWeekDay, fragment);
	}
	
	for (let i = 1; i < daysInMonth; i++) {
		fragment.append(new CallendarCell(year, month, i).create())
	}
	
	if(lastWeekDay !== 7) {
		addEmptyCells(lastWeekDay-1, fragment);
	}
	
	$(root).append(fragment);
};

function addEmptyCells(amount, fragment) {
	for (let i = 1; i < amount; i++) {
		fragment.append(new CallendarCell().createEmpty());
	}
}

calendarRender();

$('switch-btn__prev').onclick(() => {
	
});
