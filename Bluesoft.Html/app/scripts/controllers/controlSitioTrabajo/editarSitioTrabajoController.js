
angular.module('tienda')
    .controller('editarSitioTrabajoController', function ($window, $routeParams, STienda, SEmpleado) {

        var vm = this;

        vm.idControlSitioTrabajo = 0;

        vm.titulo = "Crear control del sitio de trabajo";

        vm.botonGuardarSeleccionado = false;

        //contiene e empleado que se va a editar
        vm.sitioTrabajo = {};

        vm.empleados = [];
        vm.tiendas = [];

        vm.init = function () {

            vm.idControlSitioTrabajo = $routeParams.idControlSitioTrabajo;

            SEmpleado.query({}, function (dataEmpleados) {

                STienda.query({}, function (dataTiendas) {

                    vm.empleados = dataEmpleados;

                    vm.tiendas = dataTiendas;

                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });

            //Es para crear una tienda
            if (vm.idControlSitioTrabajo == "0")
                vm.sitioTrabajo.IdControlSitioTrabajo = 0;

            //Consulta la tienda
            else {
                STienda.getSitioTrabajo({ id: vm.idControlSitioTrabajo }, function (dataSitioTrabajo) {

                    vm.titulo = "Editar control del sitio de trabajo";

                    dataSitioTrabajo.FechaIngreso = new Date(dataSitioTrabajo.FechaIngreso);
                    vm.sitioTrabajo = dataSitioTrabajo;

                }, function (error) {
                    console.log(error);
                });
            }
        }

        /**
         *  Edita o crea un control del sitio de trabajo
         */
        vm.guardarSitioTrabajo = function () {

            vm.botonGuardarSeleccionado = true;

            //No permite guardar hasta que todo este bien
            if (!vm.sitioTrabajo.IdTienda || !vm.sitioTrabajo.IdEmpleado || !vm.sitioTrabajo.FechaIngreso)
                return;

            STienda.postSitioTrabajo({}, vm.sitioTrabajo, function (dataSitioTrabajo) {

                toastr.success(vm.sitioTrabajo.IdControlSitioTrabajo == 0 ? "Se ha creado el control del sitio de trabajo" : "Se ha editado el control del sitio de trabajo");

                dataSitioTrabajo.FechaIngreso = new Date(dataSitioTrabajo.FechaIngreso);
                vm.sitioTrabajo = dataSitioTrabajo;

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