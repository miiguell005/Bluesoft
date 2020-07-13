angular.module('tienda')

    .service('userService', function ($rootScope) {

        var vm = this;

        //Contiene la tura relativa de la aplicación
        this.urlService = "http://localhost:49404/";
        
    });
