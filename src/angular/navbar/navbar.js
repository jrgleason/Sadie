var Navbar = function(){
  return {
    restrict: "E",
    scope:{
      static: "="
    },
    controller: NavbarController,
    templateUrl:'../partials/navbar.jade'
  };
}
angular.module('jg.site')
       .directive('jgNavbar', Navbar);
