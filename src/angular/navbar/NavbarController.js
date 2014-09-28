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
