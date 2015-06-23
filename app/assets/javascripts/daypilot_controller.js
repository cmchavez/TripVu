angular
	.module('dayPilotApp', [])
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
