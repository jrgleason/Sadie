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
