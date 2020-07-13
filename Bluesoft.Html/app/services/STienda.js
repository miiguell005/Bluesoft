angular.module('tienda')
    .factory('STienda', STienda);

function STienda($resource, userService) {
    var urlService = userService.urlService;

    return $resource(urlService + "api/Tiendas/:id", { id: "@IdTienda" },
        {
            query: {
                method: 'GET', url: urlService + "api/Tiendas", isArray: true
            },
            getTienda: {
                method: 'GET', url: urlService + "api/Tiendas/:id", params: { id: "@idTienda" }, isArray: false
            },
            post: {
                method: 'POST', url: urlService + "api/Tiendas", isArray: false
            },
            remove: {
                method: 'Delete', url: urlService + "api/Tiendas/:id", params: { id: "@idTienda" }, isArray: false
            },
            querySitioTrabajo: {
                method: 'GET', url: urlService + "api/Tiendas/Control/Sitio", isArray: true
            },
            getSitioTrabajo: {
                method: 'GET', url: urlService + "api/Tiendas/Control/Sitio/{id}", params: { id: "@idControlSitioTrabajo" }, isArray: true
            },
            postSitioTrabajo: {
                method: 'POST', url: urlService + "api/Tiendas/Control/Sitio", isArray: false
            },
            removeSitioTrabajo: {
                method: 'Delete', url: urlService + "api/Tiendas/Control/Sitio/:id", params: { id: "@idControlSitioTrabajo" }, isArray: false
            },
        });
}
