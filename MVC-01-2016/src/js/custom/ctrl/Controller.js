import DataManager from '../model/DataManager';

class Controller {
	

	constructor() {

		$(window).on('new_content_request', this.displayNewContent.bind(this) );
	}


	displayNewContent (event, targetID ) {

		console.log('Controller :: Request for new content');

		const picUrl = DataManager.getPic(targetID);

		$(window).trigger('display_new_content',  picUrl);

	}


}

export default Controller;