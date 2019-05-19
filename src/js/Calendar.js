import $ from 'jquery'

export default class Calendar {
	constructor(root='#calendar', header='.cal-nav__month', prevBtn = '.switch-btn__prev', nextBtn = '.switch-btn__next', todayBtn = '.cal-nav__today') {
		this.$root = $(root);
		this.$header = $(header);
		this.$nextBtn = $(nextBtn);
		this.$prevBtn = $(prevBtn);
		this.$todayBtn = $(todayBtn);
		this.date = {
			year: new Date().getFullYear(),
			month: new Date().getMonth(),
			day: new Date().getDate()
		};
		
		this.weekDays = [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота'
		];
		this.months = [
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
		
		this.meetings = localStorage.getItem('meetings') ? localStorage.getItem('meetings') : {};
		
		this.calendar= [];
		
		this.$prevBtn.on('click', $.proxy(this.prevBtn,this));
		this.$nextBtn.on('click', $.proxy(this.nextBtn, this));
		this.$todayBtn.on('click', $.proxy(this.goToday, this));
		
		// this.render()
	}
	
	render() {
		this.$root.empty();
		
		this.lastOfMonth = new Date(this.date.year, this.date.month+1, 0);
		this.lastWeekDay = this.lastOfMonth.getDay();
		this.daysInMonth = this.lastOfMonth.getDate();
		this.firstOfMonth = new Date(this.date.year, this.date.month, 1);
		this.firstWeekDay = this.firstOfMonth.getDay();
		
		this.$header.text(`${this.months[this.date.month]} ${this.date.year}`);
		this.createDaysHeaders();
		
		const $fragment = $(document.createDocumentFragment());
		
		if(this.firstWeekDay !== 0) {
			this.addEmptyCells(1, this.firstWeekDay, $fragment);
		} else if(this.firstWeekDay === 1) {
			this.addEmptyCells(0, this.firstWeekDay, $fragment);
		} else if (this.firstWeekDay === 0) {
			this.addEmptyCells(this.firstWeekDay, 6, $fragment);
		}
		
		for (let i = 1; i <= this.daysInMonth; i++) {
			const day = this.createDay(this.date.year, this.date.month, i);
			$fragment.append(day)
		}
		
		if(this.lastWeekDay !== 7 && this.lastWeekDay !== 0) {
			this.addEmptyCells(this.lastWeekDay, 7, $fragment);
		}
		
		this.$root.append($fragment);
	}
	
	createDaysHeaders() {
		this.$root.append(`<div class="calendar__item">Понедельник</div>
        <div class="calendar__item">Вторник</div>
        <div class="calendar__item">Среда</div>
        <div class="calendar__item">Четверг</div>
        <div class="calendar__item">Пятница</div>
        <div class="calendar__item">Суббота</div>
        <div class="calendar__item">Воскресенье</div>`)
	}
	
	addEmptyCells(from, to, fragment) {
		for (let i = from; i < to; i++) {
			fragment.append($(`
		<div class="calendar__item">
		</div>
		`));
		}
	}
	
	createDay(year, month, day) {
		const dayNode = $(`
		<div class="calendar__item${new Date().getFullYear() === year && new Date().getMonth()=== month && new Date().getDate() === day? ' calendar__today' : ''}">
			<p class="day-num">${day}</p>
		</div>
		`);
		dayNode.data('date', {
			year: year,
			month: month,
			day: day
		});
		
		dayNode.on('click', this.newMeentingModal);
		
		if(this.meetings.length) {
			this.meetings.forEach((mtng) => {
				const mtngItem = $(`
				<p class="calendar__meeting">${mtng.name}</p>
				`);
				dayNode.append(mtngItem);
			})
		}
		
		this.calendar.push(dayNode);
		
		return dayNode;
	}
	
	prevBtn() {
		if(this.date.month === 0) {
			this.date.year -= 1;
		}
		this.date.month = this.date.month === 0 ? 11 : Math.abs(this.date.month - 1);
		this.render();
		
	};
	
	nextBtn() {
		if(this.date.month === 11) {
			this.date.year += 1;
		}
		this.date.month = this.date.month === 11 ? 0 : Math.abs(this.date.month + 1);
		
		this.render();
	};
	
	goToday() {
		this.date = {
			year: new Date().getFullYear(),
			month: new Date().getMonth(),
			day: new Date().getDate()
		};
		this.render()
	}
}