var HouseListView = Backbone.View.extend({
	collection: HouseList,
	className: '.houses',
	tagName: 'ul',
	render: function(){
		this.el.html(this.model).append();
	return this;
	}
});