var Page = function(){
  return {
    restrict: "E",
    templateUrl: function(tElement, tAttrs) {
      return ("/HTML?name=" + tAttrs.name);
    }
  }
}
angular.module('jg.site')
       .directive('jgPage',Page);
