"use strict";

import { JSBlock } from "./js-block";
import { TimerBlock } from "./timer-block";
import { JS_CREATION_DATE } from "../core/constants/settings";

export class App {
	#jsBlock;
	#timerBlock;

	constructor() {
		this.#jsBlock = new JSBlock();
		this.#timerBlock = new TimerBlock(JS_CREATION_DATE);
	}

	run() {
		const jsBLockHTML = this.#jsBlock.render();
		const timerBlockHTML = this.#timerBlock.render();
		document.body.append(jsBLockHTML, timerBlockHTML);
	}
}
