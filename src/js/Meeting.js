import $ from 'jquery'

export default class Meeting {
	constructor(name = 'Новое событие', parent, participants, description) {
		this.name = name;
		this.parent = parent;
		this.participants = participants;
		this.description = description;
		
		// this.addToStorage();
	}
	
	addToStorage () {
		if (!localStorage.getItem('meetings')) {
			localStorage.setItem('meentings', {})
		}
		const meetings = localStorage.getItem('meetings');
		localStorage.setItem('meetings', meetings[this.date] = [
			...meetings[this.date],
			this
		]);
		alert(this)
	}
}