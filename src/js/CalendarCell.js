import $ from 'jquery'
import Meeting from "./Meeting";

export default class CalendarCell {
	constructor(year = new Date().getFullYear(), month = new Date().getMonth(), day = new Date().getDate(), weekDay = new Date().getDay(),meetings = []) {
		this.year = year;
		this.month = month;
		this.day = day;
		this.weekDay = weekDay;
		this.meetings = meetings;
		this.today = this.isToday();
	}
	
	isToday() {
		const dayToCompare = new Date(this.year, this.month, this.day);
		const today = new Date();
		return today.getFullYear() === dayToCompare.getFullYear()
			&& today.getMonth() === dayToCompare.getMonth()
			&& today.getDate() === dayToCompare.getDate()
	}
	
	createEmpty() {
		const dayItem = $(`
		<div class="calendar__item">
		</div>
		`);
		return dayItem
	}
	
	newMeentingModal(event) {
		// console.log($(event.target).index()-7);
		const meeting = new Meeting('Gogi',this,'no participants', 'lorem');
		this.meetings.push(meeting);
		console.log(this.meetings);
	}
	
	create() {
		const dayItem = $(`
		<div class="calendar__item ${this.today ? 'calendar__today' : ''}">
			<p class="day-num">${this.day}</p>
		</div>
		`);
		
		dayItem.on('click', this.newMeentingModal);
		
		if(this.meetings.length) {
			this.meetings.forEach((mtng) => {
				const mtngItem = $(`
				<p class="calendar__meeting">${mtng.name}</p>
				`);
				dayItem.append(mtngItem);
			})
		}
		return dayItem;
	}
}