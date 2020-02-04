class Card {
	constructor(url) {
		this.url = url;
	}
	bodyClickHandler() {
		//
	}
	generateCard() {
		//
	}
	fetchPage() {
		$.get(this.url, this.cb_fetchPage);
	}
	cb_fetchPage(pageData) {
		//oc = original content
		this.oc = pageData;
	}
}
