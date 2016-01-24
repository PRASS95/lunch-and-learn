class NavItem {

	constructor ( parentView, data, id ) {

		parentView.find('ul').append('<li class="nav-item n'+id+'" data-id="'+id+'">'+ data.label +'</li>');

		this.view = parentView.find('ul .nav-item.n'+id);

		this.view.on('mouseover', this.onMouseOver.bind(this) );
		this.view.on('mouseout', this.onMouseOut.bind(this) );
	}

	onMouseOver () {

		this.view[0].style.backgroundColor = "red";

	}

	onMouseOut () {
		this.view[0].style.backgroundColor = "transparent";
	}

}

export default NavItem;