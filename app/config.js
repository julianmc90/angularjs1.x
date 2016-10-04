
/**
 * Configuracion de la app
 */

/**
 * definicion de constantes
 */
app.constant('urls', {
    
            API: 'http://localhost/ejemplo/api',
});


/**
 * configuracion del enrutador ui-router
 */
app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  /**
   * Estado de home
   */
    .state('home', {
	    url: '/home',
	    templateUrl: 'views/home/home.html',
	    controller: 'HomeCtrl'
  	})

	/**
	 * Estado de productos
	 */
    .state('products', {
	    url: '/products',
	    templateUrl: 'views/products/products.html',
	    controller: 'ProductsCtrl'
  	});


    /**
     * redireccion por defecto
     */
    $urlRouterProvider.otherwise('/home');

});
