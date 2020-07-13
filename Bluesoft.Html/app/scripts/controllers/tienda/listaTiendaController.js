
angular.module('tienda')
    .controller('listaTiendaController', function ($scope, $window, $routeParams, STienda) {

        var vm = this;

        //Contiene todos los empleados
        vm.tiendas = [];

        //Propiedades que se van a mostrar en el componente tabla
        vm.propiedades = [
            { propiedad: "Nombre", etiqueta: "Nombre" },
            { propiedad: "Direccion", etiqueta: "Dirección" },
            { propiedad: "Telefono", etiqueta: "Teléfono" }
        ];

        vm.init = function () {

            STienda.query({}, function (dataTienda) {

                vm.tiendas = dataTienda;

            }, function (error) {
                console.log(error);
            });
        }

        /**
         * Elimina el empleado confirmado
         * @param {any} data
         */
        vm.eliminarTienda = function (data) {

            STienda.remove({ id: data.IdTienda }, function (dataTienda) {

                toastr.success("Se ha eliminado el empleado");
                vm.tiendas = _.filter(vm.tiendas, function (t) { return t.IdTienda != dataTienda.IdTienda; });
                
            }, function (error) {
                console.log(error);
            })
        }

        /**
         * Regresa a la página anterior
         */
        vm.irAtras = function () {
            $window.history.back();
        }

        vm.init();
    });