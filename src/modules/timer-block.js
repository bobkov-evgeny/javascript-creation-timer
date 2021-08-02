"use strict";

import * as DateUtils from "../core/utils/date";

export class TimerBlock {
	#date;
	#timerContainer;
	#timerTextHTML;

	constructor(date) {
		this.#date = date;
		this.#timerContainer = document.createElement("div");
		this.#timerTextHTML = document.createElement("h2");
	}

	#getTimerContent() {
		return DateUtils.getPresiseDateDifference(new Date(), this.#date);
	}

	#enableDateUpdate() {
		setInterval(() => {
			this.#timerTextHTML.textContent = this.#getTimerContent();
		}, 1000);
	}

	render() {
		this.#timerContainer.id = "timer";
		this.#timerTextHTML.className = "timer-text";
		this.#timerTextHTML.textContent = this.#getTimerContent();

		const todayDateHTML = document.createElement("div");
		const todatDateFormat = DateUtils.getTodayDateFormat(new Date());
		todayDateHTML.className = "today-date";
		todayDateHTML.textContent = `Сегодня: ${todatDateFormat}`;

		this.#timerContainer.append(this.#timerTextHTML, todayDateHTML);

		this.#enableDateUpdate();

		return this.#timerContainer;
	}
}
