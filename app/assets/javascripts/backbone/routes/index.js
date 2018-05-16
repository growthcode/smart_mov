App.Routers.BaseRouter = Backbone.Router.extend({
  routes: {
    '' : 'rootPath',
    '/' : 'rootPath',
    'events' : 'summary',
    'events/new' : 'recordMov',
    'activities' : 'recordMov',
  },

  rootPath: function(params) {
    console.log('root')
  },

  recordMov: function() {
    new App.Views.RecordMov
  },

  summary: function() {
    new App.Views.RecordMov
    new App.Views.Summary
  }
});
