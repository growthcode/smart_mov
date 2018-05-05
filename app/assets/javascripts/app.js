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
  $.fn.select2.defaults.set( "theme", "bootstrap4" );
  App.initialize();
  Backbone.history.start({ pushState: true });
});
