



// **** OnLoad ****
$(function(){

var houses = new HouseList();
var housesPainter;

	housesPainter = new HouseListView({
		el: $('ul.houses'),
		collection: houses
	});

	houses.fetch()


});