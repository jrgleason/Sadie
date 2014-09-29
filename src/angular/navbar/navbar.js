var Navbar = function(){
  return {
    restrict: "E",
    scope:{
      static: "=",
      brand: "=",
    },
    controller: NavbarController,
    templateUrl:'../partials/navbar.jade'
  };
}
angular.module('jg.site')
       .directive('jgNavbar', Navbar);
