import $ from 'jquery'

export default class Meeting {
	constructor(name = 'Новое событие', date, participants, description) {
		this.name = name;
		this.date = date;
		this.participants = participants;
		this.description = description;
		
		this.addToStorage();
	}
	
	addToStorage () {
		if (!localStorage.getItem('meetings')) {
			localStorage.setItem('meentings', {})
		}
		console.log(this.date);
		const meetings = localStorage.getItem('meetings');
		meetings[this.date] = [
			...meetings[this.date],
			this
		];
		alert(this)
	}
}