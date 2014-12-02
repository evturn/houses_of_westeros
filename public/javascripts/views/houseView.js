var HouseView = Backbone.View.extend({
	model: House,
	tagName: 'li',
	className: '.house',
	render: function(){
		_.each.this.el.html(this.model.name).append('.ul');
	fetch();
	return this;
	}
});