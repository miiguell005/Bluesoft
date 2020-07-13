angular.module('tienda')
    .factory('SCargo', SCargo);

function SCargo($resource, userService) {
    var urlService = userService.urlService;

    return $resource(urlService + "api/Cargos/:id", { id: "@IdCargo" },
        {
            query: {
                method: 'GET', url: urlService + "api/Cargos", isArray: true
            },
            getCargo: {
                method: 'GET', url: urlService + "api/Cargos/:id", params: { id: "@id" }, isArray: false
            },
            post: {
                method: 'POST', url: urlService + "api/Cargos", isArray: false
            },
            remove: {
                method: 'Delete', url: urlService + "api/Cargos/:id", params: { id: "@id" }, isArray: false
            },
        });
}
