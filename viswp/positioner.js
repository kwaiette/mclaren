class Positioner {
	//var mainViewTag
	constructor(containerTag) {
		this.mainViewTag = containerTag;
		this.cards = {};
	}
	displayPage(url) {
		if (typeof (this.cards[url]) !== "undefined") {
			//
		} else {
			this.cards[url] = new Card(url);
		}
	}
}
