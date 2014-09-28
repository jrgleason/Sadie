var app = angular.module('jg.site',['textAngular','templates-main']);

var MainController = function($scope, $http){
  $scope.mc = this;
  if($scope.pageName != null){
    this.pageName = $scope.pageName;
  }
  if($scope.pageText != null){
    this.pageText = $scope.pageText;
  }
  this.submit = function(){
    console.log("Submitting... "+JSON.stringify(this.pageText));
    $http({
      method: 'POST',
      url: '/Page',
      data: this
    })
    .success(function() {})
    .error(function() {});
  }
}
MainController.$inject = ['$scope', '$http'];

var MainPage = function(){
  return {
    restrict: "E",
    scope:{
      pageName: "=",
      pageText: "="
    },
    templateUrl:'../partials/form.jade',
    controller:MainController
  };
}
angular.module('jg.site')
       .directive('jgMain', MainPage);

var NavbarController = function($scope){
  var _this = this;
  this.type = function(){
    if($scope.static != null && $scope.static == true){
      return 'navbar-static-top';
    }
    else{
      return 'navbar-fixed-top';
    }
  }
  $scope.classes = function(){
    console.log(_this.type());
    return _this.type();
  }
}

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
