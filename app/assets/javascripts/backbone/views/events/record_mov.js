App.Views.RecordMov = Backbone.View.extend({
  el: '#js-recordMov',

  events: {
    'change #js-toggleForms': 'toggleMovHtml',
    // 'change #js-reuseMovsSelect': 'toggleMovHtml',
  },

  initialize: function(options){
    this.$toggleForms = this.$el.find('#js-toggleForms')
    this.$reuseActivity = this.$el.find('#js-reuseActivity')
    this.$newActivityForm = this.$el.find('#js-newActivityForm')
    this.$reuseMovsSelect = this.$el.find('#js-reuseMovsSelect')
    this.$headlineMovPage = this.$el.find('#js-headlineMovPage')
    _.each(this.$el.find('select'), function(selectInput){
      $(selectInput).select2()
    })

    this.toggleMovHtml()
  },

  toggleMovHtml: function(){
    if (this.$toggleForms.is(":checked")) {
      this.$headlineMovPage.html('Create Mov')
      this.$reuseActivity.addClass('d-none')
      this.$newActivityForm.removeClass('d-none')
    } else {
      this.$headlineMovPage.html('Record Mov')
      this.$reuseActivity.removeClass('d-none')
      this.$newActivityForm.addClass('d-none')
    }
  },
});
