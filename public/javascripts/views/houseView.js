var HouseView = Backbone.View.extend({
	model: House,
	className: '.house',
	tagName: 'li',
	render: function(){
		this.el.html(this.model.get('name');
	return this;
	}
});