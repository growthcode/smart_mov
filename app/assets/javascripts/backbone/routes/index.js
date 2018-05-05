App.Routers.BaseRouter = Backbone.Router.extend({
  routes: {
    '' : 'rootPath',
    '/' : 'rootPath',
    'events' : 'summary',
    'events/new' : 'recordMov',
  },

  rootPath: function(params) {
    console.log('root')
  },

  recordMov: function() {
    new App.Views.RecordMov
  },

  summary: function() {
    new App.Views.Summary
  }
});
