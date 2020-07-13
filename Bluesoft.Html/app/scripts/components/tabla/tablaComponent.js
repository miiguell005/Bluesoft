angular.module('tienda')
    .component('tablaComponent', {
        templateUrl: 'scripts/components/tabla/tabla.html',
        bindings: {

            //Es el que muestra el icon cuando ésta cargando la página
            propiedades: "<",

            //Contiene el texto que contendrá el icono
            data: "<",

            //Url del direccionamiento
            url: "@",

            //Especifica el nombre de la propiedad Id
            id: "@",

            //Retorna el request para eliminar el reguistro
            eliminarReguistro: "&",

            //Propiedad que se utiliza para mostrar el detalle de eliminar
            propiedadAlerta: "@"
        },
        controller: 'tablaController'
    })


    .controller('tablaController', function ($scope) {
        
        var vm = this;

        vm.eliminar = function (data) {

            console.log(data[vm.propiedadAlerta], vm.propiedadAlerta)
            bootbox.confirm({
                message: "Está seguro que desea eliminar '" + data[vm.propiedadAlerta] +"'",
                buttons: {
                    confirm: {
                        label: 'Confirmar',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'Cancelar',
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {

                    if (result) {
                        vm.eliminarReguistro({ data: data });
                        
                    }
                }
            });
            
        }
    });

