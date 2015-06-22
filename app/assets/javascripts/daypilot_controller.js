angular
	.module('dayPilotApp.controllers', [])
	.controller('DayPilotCtrl', DayPilotCtrl);
		function DayPilotCtrl($scope, $timeout, $http) {
	      $scope.weekConfig = {
	          viewType: "Week",
	      };
	      $scope.foo = "bar";
	    console.log("controller works")
	    };

//     .config(function($routeProvider, $locationProvider) {$routeProvider
// 	   .when('/templates/home', {
// 	    templateUrl: '<%= asset_path("home.html.erb") %>',
// 	    controller: 'DayPilotCtrl'
// 	}
// )})