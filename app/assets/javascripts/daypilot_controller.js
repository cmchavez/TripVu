angular
	.module('dayPilotApp.controllers', [])
	.controller('DayPilotCtrl', DayPilotCtrl);
		function DayPilotCtrl($scope, $timeout, $http) {
	      $scope.weekConfig = {
	          viewType: "Week",
	      };
		};
	
	// .controller('FormCtrl', FormCtrl);
	// 	function FormCtrl($scope) {
	// 		$scope.foo=bar 
	// 	};   
//     .config(function($routeProvider, $locationProvider) {$routeProvider
// 	   .when('/templates/home', {
// 	    templateUrl: '<%= asset_path("home.html.erb") %>',
// 	    controller: 'DayPilotCtrl'
// 	}
// )})

