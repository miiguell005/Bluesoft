angular.module('tienda')
    .factory('SEmpleado', SEmpleado);

function SEmpleado($resource, userService) {
    var urlService = userService.urlService;

    return $resource(urlService + "api/Empleados/:id", { id: "@IdEmpleado" },
        {
            query: {
                method: 'GET', url: urlService + "api/Empleados", isArray: true
            },
            getEmpleado: {
                method: 'GET', url: urlService + "api/Empleados/:id", params: { id: "@idEmpleado" }, isArray: false
            },
            post: {
                method: 'POST', url: urlService + "api/Empleados", isArray: false
            },
            remove: {
                method: 'Delete', url: urlService + "api/Empleados/:id", params: { id: "@idEmpleado" }, isArray: false
            },
        });
}
