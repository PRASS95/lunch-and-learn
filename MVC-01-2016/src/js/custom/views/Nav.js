import NavItem from './NavItem';

class Nav {

	constructor() {

		this.view = $('nav');
		
	}

	build( navData ) {

		$.each( navData, (i,data)=>{

			let item = new NavItem( this.view, data, i);

		});


		let navItems = this.view.find('.nav-item');

		navItems.on('click', this.onClickNavItem.bind(this) );

	}

	onClickNavItem ( event ) {

		const targetID = event.target.getAttribute('data-id');

		console.log('----');
		console.log('Nav :: Click on item #', targetID);

		$(window).trigger('new_content_request', targetID );

	}
	

}

export default Nav;