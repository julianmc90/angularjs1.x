/**
 * Servicio de productos
 */

app.factory('productsService', ['$http', 'urls', function ($http, urls) {

	    return {
                get: function (data, success, error) {
                    $http.post(urls.BASE_API + '/Routes/deleteRoute.json',data).success(success).error(error)
                }
            };

}]);



