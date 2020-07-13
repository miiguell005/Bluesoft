
angular.module('tienda')
    .controller('listaEmpleadosController', function ($scope, $window, $routeParams, SEmpleado) {

        var vm = this;

        //Contiene todos los empleados
        vm.empleados = [];

        //Propiedades que se van a mostrar en el componente tabla
        vm.propiedades = [
            { propiedad: "Nombre", etiqueta: "Nombre" },
            { propiedad: "Apellido", etiqueta: "Apellido" },
            { propiedad: "nombreCargo", etiqueta: "Cargo" },
            { propiedad: "NumeroDocumento", etiqueta: "Número de documento" },
            { propiedad: "FechaNacimiento", etiqueta: "Fecha de nacimiento", esFecha: true },
            { propiedad: "Genero", etiqueta: "Genero" },
        ];

        vm.init = function () {

            SEmpleado.query({}, function (dataEmpleado) {

                _.each(dataEmpleado, function (e) {
                    e.nombreCargo = e.Cargo.Descripcion;
                });

                vm.empleados = dataEmpleado;

            }, function (error) {
                console.log(error);
            });
        }

        /**
         * Elimina el empleado confirmado
         * @param {any} data
         */
        vm.eliminarEmpleado = function (data) {

            SEmpleado.remove({ id: data.IdEmpleado }, function (dataEmpleado) {

                toastr.success("Se ha eliminado el empleado");
                vm.empleados = _.filter(vm.empleados, function (e) { return e.IdEmpleado != dataEmpleado.IdEmpleado; });
                
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