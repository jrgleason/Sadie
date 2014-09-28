var Panel = function(){
  return {
    restrict: "E",
    scope:{
      header:"="
    },
    transclude: true,
    templateUrl:'../partials/panel.jade'
  };
}
angular.module('jg.site')
       .directive('jgPanel', Panel);
