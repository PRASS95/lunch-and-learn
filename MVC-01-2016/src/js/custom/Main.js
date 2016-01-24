import Nav from './views/Nav';
import Content from './views/Content';
import Controller from './ctrl/Controller';
import DataManager from './model/DataManager';

/**
 * 
 **/

class Main {

	constructor () {

		console.log("Entry Point");

		$( this.init.bind(this) );
		//document.addEventListener("DOMContentLoaded", this.init.bind(this), false);

	}


	init () {

		console.log("Dom ready");

		// 1) Create view
		this.nav = new Nav();
		this.content = new Content();

		// 2) Create Controller
		this.ctrl = new Controller();

		// 3) Get Data (model)
		$(window).one('data_loaded', this.start.bind(this) );
		DataManager.load();
		
	}

	start () {

		console.log('start');

		this.nav.build( DataManager.data.nav );

	}
}

var app = new Main();