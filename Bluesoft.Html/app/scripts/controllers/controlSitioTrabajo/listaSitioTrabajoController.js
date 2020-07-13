
angular.module('tienda')
    .controller('listaSitioTrabajoController', function ($scope, $window, $routeParams, STienda, SCargo, SEmpleado) {

        var vm = this;

        //Contiene todos los empleados
        vm.sitioTrabajos = [];

        //Propiedades que se van a mostrar en el componente tabla
        vm.propiedades = [
            { propiedad: "FechaIngreso", etiqueta: "Fecha de ingreso", esFecha: true },
            { propiedad: "NombreTienda", etiqueta: "Tienda" },
            { propiedad: "NombreEmpleado", etiqueta: "Empleado" },
            { propiedad: "Cargo", etiqueta: "Cargo" }
        ];

        vm.filtro = {
            desde: null,
            hasta: null,
            idEmpleado: null,
            idCargo: null,
            idTienda: null
        }

        vm.tiendas = [];
        vm.empleados = [];
        vm.cargos = []

        vm.init = function () {

            if (vm.tiendas.length == 0)
                STienda.query({}, function (dataTienda) {
                    SEmpleado.query({}, function (dataEmpleado) {
                        SCargo.query({}, function (dataCargo) {

                            vm.tiendas = dataTienda;
                            vm.tiendas.unshift({ IdTienda: null, Nombre: "Todos" });

                            vm.empleados = dataEmpleado;
                            vm.empleados.unshift({ IdEmpleado: null, Nombre: "Todos", Apellido: "" });

                            vm.cargos = dataCargo;
                            vm.cargos.unshift({ IdCargo: null, Descripcion: "Todos"});
                        });
                    });
                });

            STienda.querySitioTrabajo(vm.filtro, function (dataSitioTrabajo) {

                vm.sitioTrabajos = dataSitioTrabajo;

            }, function (error) {
                console.log(error);
            });
        }

        /**
         * Elimina el empleado confirmado
         * @param {any} data
         */
        vm.eliminarSitioTrabajo = function (data) {

            STienda.removeSitioTrabajo(vm.filtro, function (dataSitioTrabajo) {

                toastr.success("Se ha eliminado el control sitio de trabajo");
                vm.sitioTrabajos = _.filter(vm.sitioTrabajos, function (t) { return t.IdControlSitioTrabajo != dataSitioTrabajo.IdControlSitioTrabajo; });

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