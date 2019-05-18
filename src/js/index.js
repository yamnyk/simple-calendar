import $ from 'jquery'
import Calendar from './Calendar'
// import CalendarCell from './CalendarCell'
const calendar = new Calendar();
calendar.render();
// const months = [
// 	'Январь',
// 	'Февраль',
// 	'Март',
// 	'Апрель',
// 	'Май',
// 	'Июнь',
// 	'Июль',
// 	'Август',
// 	'Сентябрь',
// 	'Октябрь',
// 	'Ноябрь',
// 	'Декабрь'
// ];
//
// const weekDays = [
// 	'Воскресенье',
// 	'Понедельник',
// 	'Вторник',
// 	'Среда',
// 	'Четверг',
// 	'Пятница',
// 	'Суббота'
// ];
//
// const currentCalendar = [];
//
// let currentYear = new Date().getFullYear();
// let currentMonth = new Date().getMonth();
//
// const calendarRender = (root = '#calendar', header = '.cal-nav__month', year = new Date().getFullYear(), month = new Date().getMonth()) => {
// 	$(root).empty();
//
// 	let lastOfMonth = new Date(year, month+1, 0);
// 	const lastWeekDay =lastOfMonth.getDay();
// 	const daysInMonth = lastOfMonth.getDate();
// 	let firstOfMonth = new Date(year, month, 1);
// 	const firstWeekDay = firstOfMonth.getDay();
//
// 	$(header).text(`${months[month]} ${year}`);
//
// 	const $fragment = $(document.createDocumentFragment());
// 	createDaysHeaders($fragment);
//
// 	if(firstWeekDay !== 0) {
// 		addEmptyCells(1, firstWeekDay, $fragment);
// 	} else if(firstWeekDay === 1) {
// 		addEmptyCells(0, firstWeekDay, $fragment);
// 	} else if (firstWeekDay === 0) {
// 		addEmptyCells(firstWeekDay, 6, $fragment);
// 	}
//
// 	for (let i = 1; i <= daysInMonth; i++) {
// 		const calendarCell = new CalendarCell(year, month, i);
// 		currentCalendar.push(calendarCell);
// 		$fragment.append(calendarCell.create())
// 	}
//
// 	if(lastWeekDay !== 7 && lastWeekDay !== 0) {
// 		addEmptyCells(lastWeekDay, 7, $fragment);
// 	}
//
// 	$(root).append($fragment);
// };
//
// function createDaysHeaders(root) {
// 	root.append(`<div class="calendar__item">Понедельник</div>
//         <div class="calendar__item">Вторник</div>
//         <div class="calendar__item">Среда</div>
//         <div class="calendar__item">Четверг</div>
//         <div class="calendar__item">Пятница</div>
//         <div class="calendar__item">Суббота</div>
//         <div class="calendar__item">Воскресенье</div>`)
// }
//
// function addEmptyCells(from, to, fragment) {
// 	for (let i = from; i < to; i++) {
// 		fragment.append(new CalendarCell().createEmpty());
// 	}
// }
//
// const prevBtn = () => {
// 	if(currentMonth === 0) {
// 		currentYear -= 1;
// 	}
// 	currentMonth = currentMonth === 0 ? 11 : Math.abs(currentMonth - 1);
// 	calendarRender('#calendar','.cal-nav__month',currentYear,currentMonth);
// };
//
// const nextBtn = () => {
// 	if(currentMonth === 0) {
// 		currentYear += 1;
// 	}
// 	currentMonth = currentMonth === 11 ? 0 : Math.abs(currentMonth + 1);
// 	calendarRender('#calendar','.cal-nav__month',currentYear,currentMonth);
// };
//
//
// $('.switch-btn__prev').on('click', prevBtn);
//
// $('.switch-btn__next').on('click', nextBtn);
//
// $('#today').on('click', () => {
// 	calendarRender('#calendar','.cal-nav__month',new Date().getFullYear(),new Date().getMonth())
// });
//
// calendarRender('#calendar','.cal-nav__month');
//
// console.log(currentCalendar);
//
