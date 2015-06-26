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
	      	  businessEndsHour: 20,
	      	  startDate: $scope.sDate

	      };
	      $scope.init = function(busiArray)
			  {
			    $scope.businesses = busiArray;

			    };
			  
		  $scope.calInit = function(datesArray){
		  	$scope.sDate = datesArray[0]
		  	$scope.eDate = datesArray[1]
		  	$scope.dur = findDur($scope.sDate, $scope.eDate)
		  	function findDur(dStart, dEnd){
		  		$scope.d1 = dStart.split("")
		  		$scope.d2 = dEnd.split("")
		  		$scope.mo1 = parseInt($scope.d1[5]+$scope.d1[6])
		  		$scope.mo2 = parseInt($scope.d2[5]+$scope.d2[6])
		  		$scope.day1 = parseInt($scope.d1[8]+$scope.d1[9])
		  		$scope.day2 = parseInt($scope.d2[8]+$scope.d2[9])
		  		console.log([$scope.d1,$scope.d2,$scope.mo1,$scope.mo2,$scope.day1,$scope.day2])

		  		if ($scope.mo1 === $scope.mo2	){
		  			if ($scope.day2 - $scope.day1 < 9){
		  				return $scope.day2 - $scope.day1 +1
		  			} else {  
		  			return 9
		  			}
		  		}else {
		  			if (($scope.day2 - $scope.day1 + 30) < 9){
		  				return $scope.day2 - $scope.day1 +31
		  			} else { 
		  				return 9 
		  			}
		  		}
		  	}


		  	$scope.daysConfig = {
	      	  viewType: "Days", 
	      	  days: $scope.dur,
	      	  businessBeginsHour: 8,
	      	  businessEndsHour: 20,
	      	  startDate: $scope.sDate

	      };
		  	console.log($scope.sDate)
		  	console.log($scope.eDate)

		  }
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

