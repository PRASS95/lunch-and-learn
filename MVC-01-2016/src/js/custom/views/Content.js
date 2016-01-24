

class Content {

	constructor() {
		console.log('Content');

		this.view = $('section.content');

		$(window).on('display_new_content', this.onDisplayNewContent.bind(this) );
	}

	onDisplayNewContent(event, picUrl) {

		console.log('Content :: Display new content ');

		this.view[0].style.backgroundImage = 'url('+picUrl+')';
	}
}

export default Content;