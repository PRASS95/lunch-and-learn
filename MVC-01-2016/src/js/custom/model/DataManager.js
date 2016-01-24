class DataManager {


	static load() {

		$.ajax({
            type        : "GET",
            dataType    : "json",
            url         : 'data/data.json' ,
            success     : (response) => {

            	DataManager.data = response;

            	$(window).trigger('data_loaded');

            },
            error       : (err) => { console.error("Data error: ", err); }
        });

	}


	static getPic ( itemID ) {

		console.log('DataManager :: get Pic :: ',DataManager.data.pics[itemID]);

		return DataManager.data.pics[itemID];
	}
}

export default DataManager;