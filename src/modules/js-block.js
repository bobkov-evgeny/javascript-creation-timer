"use strict";
import JS_IMAGE from "../../assets/js.png";

export class JSBlock {
	#container;

	constructor() {
		this.#container = document.createElement("div");
		this.#container.className = "js-block";
	}

	render() {
		const mainTitle = document.createElement("h1");
		mainTitle.className = "main-title";
		mainTitle.textContent = "JavaScript";

		const JSImageHtml = document.createElement("img");
		JSImageHtml.className = "js-image";
		JSImageHtml.src = JS_IMAGE;

		const foundedText = document.createElement("p");
		foundedText.textContent = "С момента создания JavaScript проошло:";
		foundedText.className = "founded-text";

		this.#container.append(mainTitle, JSImageHtml, foundedText);

		return this.#container;
	}
}
