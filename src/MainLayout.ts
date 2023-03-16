import { MainButton } from "./Button";

export class Layout extends HTMLElement {
	private button = new MainButton()
	private label = this.querySelector('slot[name=label]')

	constructor() {
		super();

		const mainLayout = (document.getElementById('main-layout') as HTMLTemplateElement)?.content;
		const shadowRoot = this.attachShadow({
			mode: 'open'
		});
		shadowRoot.appendChild(mainLayout.cloneNode(true));
	}
}

customElements.define('main-layout', Layout);
