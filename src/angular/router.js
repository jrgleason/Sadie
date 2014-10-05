var RouteHandler = function($stateProvider,   $urlRouterProvider){
  $urlRouterProvider.otherwise('/jg');
  $stateProvider
    .state("home", {
      url: "/jg",
      views:{
        "MainView":{
          templateUrl:"/HTML?name=Yo"
        }
      }
    })
    .state("admin", {
      url: "/admin",
      views:{
        "AdminView":{
          template:"<h1>Test</h1>"
        }
      }
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
