var HouseListView = Backbone.View.extend({
	collection: HouseList,
	className: '.houses',
	tagName: 'ul',
	template: _.template( $( '.houses' ).html()),
  render: function() {
    each.this.$el.html(this.template(this.model.toJSON()));
    return this;
		}
});