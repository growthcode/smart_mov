App.Views.RecordMov = Backbone.View.extend({
  el: '#js-recordMov',
  initialize: function(options){
    this.$el.find('select').select2()
  },
});
