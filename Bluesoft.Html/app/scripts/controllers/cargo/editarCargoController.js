
angular.module('tienda')
    .controller('editarCargoController', function ($window, $routeParams, SCargo) {

        var vm = this;
        
        vm.idCargo = 0;
        
        vm.titulo = "Cear cargo";

        vm.botonGuardarSeleccionado = false;

        //Contiene todos los cargos
        vm.cargo = {};

        vm.init = function () {

            vm.idCargo = $routeParams.idCargo;

            //Es para crear un cargo
            if (vm.idCargo == "0")
                vm.cargo.IdCargo = 0;

            //Consulta el cargo
            else {
                SCargo.getCargo({ id: vm.idCargo }, function (dataCargo) {

                    vm.titulo = "Editar cargo";
                    console.log(dataCargo);
                    vm.cargo = dataCargo;

                }, function (error) {
                    console.log(error);
                });
            }
        }

        /**
         *  Edita o crea un cargo
         */
        vm.guardarCargo = function () {

            vm.botonGuardarSeleccionado = true;

            //No permite guardar hasta que todo este bien
            if (!vm.cargo.Descripcion || !vm.cargo.Salario)
                return;

            SCargo.post({}, vm.cargo, function (dataCargo) {

                toastr.success(vm.cargo.IdCargo == 0 ? "Se ha creado el cargo" : "Se ha editado el cargo");
                vm.cargo = dataCargo;

            }, function (error) {
                console.log(error);
            });

        }

        /**
         * Regresa a la página anterior
         */
        vm.irAtras = function () {
            $window.history.back();
        }

        vm.init();
    });