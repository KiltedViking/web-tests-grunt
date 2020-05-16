(function() {
  "use strict";

  angular.module("DefaultButtonApp", [])
    .controller("DefaultButtonController", DefaultButtonController);

  DefaultButtonController.$inject = [];
  function DefaultButtonController() {
    var ctrl = this;
    ctrl.output = "";

    ctrl.sendForm = function($event) {
      ctrl.output = ctrl.name;

      $event.preventDefault();
    }; 
  }
})();