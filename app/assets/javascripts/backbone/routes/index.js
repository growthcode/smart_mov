App.Routers.BaseRouter = Backbone.Router.extend({
  routes: {
    '' : 'rootPath',
    '/' : 'rootPath',
    'events' : 'summary',
  },

  rootPath: function(params) {
    console.log('root')
  },

  summary: function() {
    new App.Views.Summary
  }
});
