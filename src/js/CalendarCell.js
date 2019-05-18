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
		return $(`
		<div class="calendar__item">
		</div>
		`)
	}
	
	newMeentingModal(event) {
		const meeting = new Meeting('Gogi',this,'no participants', 'lorem');
		$(event.target).append(meeting.meetingForm)
		// this.meetings.push(meeting);
	}
	
	create() {
		const dayNode = $(`
		<div class="calendar__item ${this.today ? 'calendar__today' : ''}">
			<p class="day-num">${this.day}</p>
		</div>
		`);
		dayNode.data('curCell',this);
		
		dayNode.on('click', this.newMeentingModal);
		
		if(this.meetings.length) {
			this.meetings.forEach((mtng) => {
				const mtngItem = $(`
				<p class="calendar__meeting">${mtng.name}</p>
				`);
				dayNode.append(mtngItem);
			})
		}
		
		return dayNode;
	}
}