
angular.module('tienda')
    .controller('editarTiendaController', function ($window, $routeParams, STienda) {

        var vm = this;

        vm.idTienda = 0;

        vm.titulo = "Crear tienda";
        
        vm.botonGuardarSeleccionado = false;

        //contiene e empleado que se va a editar
        vm.tienda = {};

        vm.init = function () {

            vm.idTienda = $routeParams.idTienda;

            //Es para crear una tienda
            if (vm.idTienda == "0")
                vm.tienda.idTienda = 0;

            //Consulta la tienda
            else {
                STienda.getTienda({ id: vm.idTienda }, function (dataTienda) {

                    vm.titulo = "Editar tienda"; 

                    vm.tienda = dataTienda;

                }, function (error) {
                    console.log(error);
                });
            }
        }

        /**
         *  Edita o crea una tienda
         */
        vm.guardarTienda = function () {

            vm.botonGuardarSeleccionado = true;

            //No permite guardar hasta que todo este bien
            if (!vm.tienda.Nombre || !vm.tienda.Direccion || !vm.tienda.Telefono)
                return;

            STienda.post({}, vm.tienda, function (dataTienda) {

                toastr.success(vm.tienda.IdTienda == 0 ? "Se ha creado la tienda" : "Se ha editado la tienda");

                vm.tienda = dataTienda;

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