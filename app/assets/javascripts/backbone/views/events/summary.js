App.Views.Summary = Backbone.View.extend({
  template: JST['backbone/templates/todos/index'],
  el: '#js-summaryChart',
  collection: new App.Collections.SummaryChart,
  events: {
  },

  initialize: function(options){
    if (this.$el.find("#summaryChartCanvas").length > 0) {
      this.collection.fetch({
        context: this,
        success: function(){
          this.render()
        }
      })
    }
  },

  render: function(){
    var ctx = this.$el.find("#summaryChartCanvas")[0].getContext('2d');
    var titles = this.collection.pluck('title')
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.collection.pluck('title'),
        datasets: [{
          data: this.collection.pluck('value_saved'),
          backgroundColor: palette('mpn65', this.collection.length).map(function(hex) {
            // http://google.github.io/palette.js/
            return '#' + hex;
          }),
        }],
      },
      options: {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return (' $' + data.datasets[0].data[tooltipItem.datasetIndex])
            }
          }
        },
      },
    });
  },
});
