var MainPage = function(){
  return {
    restrict: "E",
    scope:{
      pageName: "=",
      pageText: "="
    },
    templateUrl:'../partials/admin.jade',
    controller:MainController
  };
}
angular.module('jg.site')
       .directive('jgMain', MainPage);
