angular
	.module('dayPilotApp.controllers', [])
	.controller('DayPilotCtrl', DayPilotCtrl);
		function DayPilotCtrl($scope, $timeout, $http) {
	      $scope.weekConfig = {
	          viewType: "Week",
	      };
	      $scope.daysConfig = {
	      	  viewType: "Days", 
	      	  days: 3,
	      	  businessBeginsHour: 5,
	      	  businessEndsHour: 20	

	      }
	      $scope.foo = "bar";
	    };
   // .controller('FormCtrl', FormCtrl);
   //  	function FormCtrl($scope) {
	  //       $scope.foo="bar"; 
	  //   	console.log("controller works")
   //  };   
	
//     .config(function($routeProvider, $locationProvider) {$routeProvider
// 	   .when('/templates/home', {
// 	    templateUrl: '<%= asset_path("home.html.erb") %>',
// 	    controller: 'DayPilotCtrl'
// 	}
// )})