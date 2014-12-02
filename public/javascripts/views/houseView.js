var HouseView = Backbone.View.extend({
	model: House,
	className: '.house',
	render: function(){
		this.el.html(this.model).append();
	}
});