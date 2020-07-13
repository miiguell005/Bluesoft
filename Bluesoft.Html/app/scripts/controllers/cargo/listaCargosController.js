
angular.module('tienda')
    .controller('listaCargosController', function ($scope, $window, $routeParams, SCargo) {

        var vm = this;

        //Contiene todos los cargos
        vm.cargos = [];

        //Propiedades que se van a mostrar en el componente tabla
        vm.propiedades = [
            { propiedad: "Descripcion", etiqueta: "Descripción" },
            { propiedad: "Salario", etiqueta: "Salario", esDinero: true },
        ];

        vm.init = function () {

            SCargo.query({}, function (dataCargos) {

                vm.cargos = dataCargos;

            }, function (error) {
                console.log(error);
            });
        }

        vm.eliminarCargo = function (data) {

            SCargo.remove({ id: data.IdCargo }, function (dataCargo) {

                toastr.success("Se ha eliminado el cargo ");
                vm.cargos = _.filter(vm.cargos, function (c) { return c.IdCargo != dataCargo.IdCargo; });
                
            }, function (error) {
                console.log(error);
            })
            console.log("Se elimino");
        }

        /**
         * Regresa a la página anterior
         */
        vm.irAtras = function () {
            $window.history.back();
        }

        vm.init();
    });