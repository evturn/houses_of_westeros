var HouseView = Backbone.View.extend({
	tagName: 'li',
	render: function(){
		this.$el.html(this.model.get('name'));
		return this;
	}
});