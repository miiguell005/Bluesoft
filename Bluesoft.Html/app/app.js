
var app = angular.module('tienda', ["ngAnimate", "ngRoute", "ngResource", 'ngSanitize', 'ui.bootstrap' ])

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/cargo/listaCargos.html',
            controller: 'listaCargosController',
            controllerAs: '$ctrl'
        })
        .when('/cargos', {
            templateUrl: 'views/cargo/listaCargos.html',
            controller: 'listaCargosController',
            controllerAs: '$ctrl'
        })
        .when('/cargos/:idCargo', {
            templateUrl: 'views/cargo/editarCargo.html',
            controller: 'editarCargoController',
            controllerAs: '$ctrl'
        })

        .when('/empleados', {
            templateUrl: 'views/empleado/listaEmpleados.html',
            controller: 'listaEmpleadosController',
            controllerAs: '$ctrl'
        })
        .when('/empleados/:idEmpleado', {
            templateUrl: 'views/empleado/editarEmpleado.html',
            controller: 'editarEmpleadoController',
            controllerAs: '$ctrl'
        })

        .when('/tiendas', {
            templateUrl: 'views/tienda/listaTiendas.html',
            controller: 'listaTiendaController',
            controllerAs: '$ctrl'
        })
        .when('/tiendas/:idTienda', {
            templateUrl: 'views/tienda/editarTienda.html',
            controller: 'editarTiendaController',
            controllerAs: '$ctrl'
        })

        .when('/sitioTrabajo', {
            templateUrl: 'views/controlSitioTrabajo/listaSitioTrabajo.html',
            controller: 'listaSitioTrabajoController',
            controllerAs: '$ctrl'
        })
        .when('/sitioTrabajo/:idControlSitioTrabajo', {
            templateUrl: 'views/controlSitioTrabajo/editarSitioTrabajo.html',
            controller: 'editarSitioTrabajoController',
            controllerAs: '$ctrl'
        })

        .otherwise({
            redirectTo: '/'
        });
})