/**
 * Home controller.
 *
 * @constructor
 * @ngInject
 * @export
 */
var MainController = function($scope, $state, $location, pageService){
  $scope.mc = this;
  $scope.$state = $state;
  $state.go('admin');
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
  };
  this.tabs = [
    { title:'Media' },
    { title:'Pages', active:'true' }
  ];
  this.redirect = function(location){
    console.log("Location is "+location);
    $location.path('/'+location)
  }
}
MainController.$inject = ['$scope', '$state', '$location', 'pageService'];
