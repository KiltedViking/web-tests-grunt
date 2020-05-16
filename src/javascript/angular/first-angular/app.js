(function(){
  "use strict";
  
  //Create application (module) and controller
  angular.module("FirstAngularApp", [])
    .controller("FirstAngularController", FirstAngularController);

  FirstAngularController.$inject = ["$scope"];
  function FirstAngularController($scope) {
    $scope.name = "";
  }

})();