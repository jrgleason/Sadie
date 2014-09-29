var app = angular.module('jg.site',[
  'textAngular',
  'templates-main',
  'ui.router' 
]);

var MainController = function($scope, pageService){
  $scope.mc = this;
  if($scope.pageName != null){
    this.pageName = $scope.pageName;
  }
  if($scope.pageText != null){
    this.pageText = $scope.pageText;
  }
  this.submit = function(){
    console.log("Submitting... "+JSON.stringify($scope.mc.pageText));
    pageService.addPage(this)
               .success(function() {})
               .error(function() {});
  }
}
MainController.$inject = ['$scope', 'pageService'];

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
    var result = [];
    result.push(_this.type());
    return result;
  }
}

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

var PageService = function($http,$q){
  this.addPage = function(data){
     return $http({
      method: 'POST',
      url: '/Page',
      data: data
    });
  }
}
angular.module('jg.site')
       .service('pageService', PageService);

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

var RouteHandler = function($stateProvider,   $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state("home", {
    url: "/",
    templateUrl:"/HTML?name=Yo"
  });
}
angular.module('jg.site')
.run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      $rootScope.$state = $state;
    }
  ]
)
.config(
  [          
    '$stateProvider', '$urlRouterProvider',
    RouteHandler
  ]
);
