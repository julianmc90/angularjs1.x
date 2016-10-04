  

/**
 * controlado de porductos
 */
  app.controller('ProductsCtrl',[
	
	'$scope', 
	
	'productsService',

	function($scope, productsService) {


		$scope.mensaje = "Hola !";

		/**
		 * almacenar producto actual
		 * @type {object}
		 */
		$scope.productoActual = undefined;

		$scope.verMensaje = function(){

			alert($scope.mensaje);
		}


		/**
		 * Arreglo de productos
		 * @type {Array}
		 */
		$scope.productos = [

			{
				nombre: 'iphone 7',
				precio: 2000000
			},

			{
				nombre: 'Samsun Galaxy  s7',
				precio: 1800000
			},
		
			{
				nombre: 'Huawei P9',
				precio: 1700000
			}
		];



		/**
		 * funcion para ver un producto
		 */
		$scope.verProducto = function(producto){

			$scope.productoActual = producto;

			//alert(producto.nombre + " - " + producto.precio);

		}
		
		/**
		 * Modelo de nuevo producto
		 * @type {Object}
		 */
		$scope.nuevoProducto = {

			nombre: '',
			precio: 0
		};

		/**
		 * Funcion agregar producto
		 * @return {[type]} [description]
		 */
		$scope.agregarProducto = function(){

			/**
			 * nuevo objeto de producto
			 * @type {Object}
			 */
			var producto = {
				nombre: $scope.nuevoProducto.nombre, 
				precio: $scope.nuevoProducto.precio
			};

			/**
			 * Agregar objeto a arreglo de productos
			 */
			$scope.productos.push(producto);

			$scope.nuevoProducto.nombre = '';

			$scope.nuevoProducto.precio = 0;
		}

  }]);
