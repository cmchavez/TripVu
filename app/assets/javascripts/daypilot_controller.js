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
	      	  businessBeginsHour: 8,
	      	  businessEndsHour: 20	

	      };
	      $scope.init = function(busiArray)
			  {
			    $scope.businesses = busiArray
			    
			    };
			  
				      $scope.foo = "bar";

	    };

	    
   // .controller('FormCtrl', FormCtrl);
   //  	function FormCtrl($scope) {
	  //       $scope.foo="bar"; 
	  //   	console.log("controller works")
   //  };   
	

	
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

