import $ from 'jquery'

export default class Meeting {
	constructor(name = 'Новое событие', parent, participants, description) {
		this.name = name;
		this.parent = parent;
		this.participants = participants;
		this.description = description;
		
		this.meetingForm = $(`<form class="new-meeting">
			<input type="text" class="new-meeting__name" placeholder="New meeting">
			<input type="text" class="new-meeting__participants" placeholder="participants">
			<textarea  class="new-meeting__desc"></textarea>
			<input type="submit" class="new-meeting__submit">
		</form>`);
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