
export class MainButton extends HTMLElement {
	private template = document.getElementById('main-layout');

	constructor() {
		super();

		const text = document.createElement('span');
    text.textContent = 'Hello World';

    // Append it to the shadow root
    this.template?.appendChild(text);
	}
}

customElements.define('main-button', MainButton);
