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
