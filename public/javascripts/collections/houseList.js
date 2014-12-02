var HouseList = Backbone.Collection.extend({
	model: House,
	url: '/api/houses'
});
