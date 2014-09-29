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
