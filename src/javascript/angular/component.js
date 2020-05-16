(function() {
  "use strict";

  //Define module (or "namespace"), controller, component, and service
  angular.module("ComponentApp", [])
    .controller("ComponentController", ComponentController)
    .component("albumList", {
      template: "<h2>{{ $ctrl.title }}</h2>"
        + "<ul>"
          + "<li ng-repeat=\"album in $ctrl.albums\">"
            + "{{ album.artist }} - {{ album.title }}"
          + "</li>"
        + "</ul>",
      // controller: AlbumListController,
      // controllerAs: "ctrl",
      bindings: {
        title: "@",
        albums: "<"
      }
    })
    .service("DataService", DataService);

  /*** CONTROLLERS ***********************************************************/
  ComponentController.$inject = ["DataService"];
  function ComponentController(DataService) {
    var ctrl = this;
    ctrl.title = "Component example";
    ctrl.albums = DataService.getAlbums();
  }

  // AlbumListController.$inject = [];
  // function AlbumListController() {
  // }

  /*** SERVICES **************************************************************/
  DataService.$inject = [];
  function DataService() {
    var service = this;
    var albums = [
      { artist: "Prince", title: "1999" },
      { artist: "Simple Minds", title: "New Gold Dream" },
      { artist: "Runrig", title: "Mara" }
    ];

    service.getAlbums = function() {
      return albums;
    };
  }
})();