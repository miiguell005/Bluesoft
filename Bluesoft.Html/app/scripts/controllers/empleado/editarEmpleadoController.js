
angular.module('tienda')
    .controller('editarEmpleadoController', function ($window, $routeParams, SEmpleado, SCargo) {

        var vm = this;

        vm.idEmpleado = 0;

        vm.titulo = "Crear empleado";

        vm.generos = [
            { propiedad: "Masculino", etiqueta: "Masculino" },
            { propiedad: "Femenino", etiqueta: "Femenino" }
        ]

        //Contiene todos los cargos para poder seleccionar uno para el empleado
        vm.cargos = [];

        vm.botonGuardarSeleccionado = false;

        //contiene e empleado que se va a editar
        vm.empleado = {};

        vm.init = function () {

            vm.idEmpleado = $routeParams.idEmpleado;

            SCargo.query({}, function (dataCargos) {

                vm.cargos = dataCargos;

            }, function (error) {
                console.log(error);
            });

            //Es para crear un empleado
            if (vm.idEmpleado == "0")
                vm.empleado.IdEmpleado = 0;

            //Consulta el empleado
            else {
                SEmpleado.getEmpleado({ id: vm.idEmpleado }, function (dataEmpleado) {

                    vm.titulo = "Editar empleado";
                    dataEmpleado.FechaNacimiento = new Date(dataEmpleado.FechaNacimiento);
                    console.log(dataEmpleado);
                    vm.empleado = dataEmpleado;

                }, function (error) {
                    console.log(error);
                });
            }
        }

        /**
         *  Edita o crea un empleado
         */
        vm.guardarEmpleado = function () {

            vm.botonGuardarSeleccionado = true;

            //No permite guardar hasta que todo este bien
            if (!vm.empleado.IdCargo || !vm.empleado.Nombre || !vm.empleado.Apellido ||
                !vm.empleado.NumeroDocumento || !vm.empleado.FechaNacimiento || !vm.empleado.Genero)
                return;

            SEmpleado.post({}, vm.empleado, function (dataEmpleado) {

                toastr.success(vm.empleado.IdEmpleado == 0 ? "Se ha creado el empleado" : "Se ha editado el empleado");

                dataEmpleado.FechaNacimiento = new Date(dataEmpleado.FechaNacimiento);
                vm.empleado = dataEmpleado;

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