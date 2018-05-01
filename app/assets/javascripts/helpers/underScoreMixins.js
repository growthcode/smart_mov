// Underscore.js isDefined mixin

// =============================================================================

// Returns true if value is defined.
_.mixin({
  isDefined: function(reference) {
    return !_.isUndefined(reference);
  },
    /* _.isDefined(...) Example:
    var obj = {
        definedProperty: 10
    };
    _.isDefined(obj.definedProperty);
    => true
    _.isDefined(obj.aBunchOfCrazyMonkeysProperty);
    => false
    */

  // =============================================================================

  isNotEmpty: function(obj) {
    return !_.isEmpty(obj)
  },

  // =============================================================================

  isBlankString: function(string) {
    return (_.isUndefined(string) || _.isNull(string) || string.length === 0)
  },
  isPresentString: function(string) {
    return !_.isBlankString(string) && string.length > 0;
  },

  // =============================================================================

  // _.capitalize("heLLo woRLd") //=> "Hello world"
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  },

  // _.titleize("heLLo woRLd") //=> "Hello World"
  titleize: function(string) {
    var string_array = string.split(' ');
    string_array = string_array.map(function(string) {
      return _.capitalize(string);
    })
    return string_array.join(' ');
  },

  // =============================================================================

  // _.getQueryParams() Gets current URL query params and turns into an object
  // or you can use your own query string _.getQueryParams(queryString)
  getQueryParams: function(queryString) {
    var query = (queryString || window.location.search).substring(1); // delete ?
    if (!query) {
      return false;
    }
    return _
    .chain(query.split('&'))
    .map(function(params) {
      var p = params.split('=');
      return [p[0], decodeURIComponent(p[1])];
    })
    .object()
    .value();
  },
})
