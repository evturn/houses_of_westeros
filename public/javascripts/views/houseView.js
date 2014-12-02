var HouseView = Backbone.View.extend({
	model: House,
	tagName: 'li',
	className: '.house',
	render: function(){
		this.el.html(this.model).append('.ul');
	return this;
	}
});