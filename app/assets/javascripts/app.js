window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Forms: {},

  initialize: function(data) {
    window.router = new App.Routers.BaseRouter;
  }
};

$(document).ready(function(){
  App.initialize();
  Backbone.history.start({ pushState: true });
});
