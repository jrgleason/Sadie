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
