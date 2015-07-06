angular
	.module('dayPilotApp.controllers', [])
	.controller('DayPilotCtrl', DayPilotCtrl);
	function DayPilotCtrl($scope, $timeout, $http) {
      $scope.foo = "bar";
      $scope.returnYelp = null
      $scope.daysConfig = {}
      $scope.tripid=null
      $scope.apiCheck=null
      $scope.calExp=[]

    
	  //Function that runs when the user inputs trip ID in the angular view. 
	  //param tripid is provided from Rails app to reference trip data
	  $scope.loadApis =function(tripid){
		  
		  //trip data api pull, from our backend rails app
		  $http.get('https://tripvu.herokuapp.com/api/trips/', { cache: true })
		  .then(function(response){
		  	//save the trip data
		  	$scope.trips = response.data
		  	//save the tripid for controller access
		  	$scope.tripid = tripid
		  	init($scope.trips,tripid)
		  	
		  });
		  $scope.apiCheck = true;

		  // pull the right trip out of the tripVu trips array
		  function init(trips,ind){
		  	$scope.trip = {
		  		id: trips[ind].id,
				location: trips[ind].location,
				starting_time: trips[ind].starting_time,
				ending_time: trips[ind].ending_time,
				experiences: [],
				// created_at: "2015-06-26T23:31:29.427Z",
				// updated_at: "2015-06-26T23:31:29.427Z"

		  	};
		  	$scope.dur = findDur($scope.trip.starting_time,$scope.trip.ending_time)
		  	$scope.returnYelp = returnYelp('', function(data) {
			                    $scope.businesses = data.businesses;
			                	});
		  	
		  	//calendar parameters
		  	$scope.daysConfig = {
	      	  viewType: "Days", 
	      	  days: $scope.dur,
	      	  businessBeginsHour: 8,
	      	  businessEndsHour: 20,
	      	  startDate: $scope.trip.starting_time
	      };
	      
	      //create DayPilot start times for calendar
	      $scope.dpStart =  DayPilot.Date($scope.trip.starting_time + "T09:00:00")
	      $scope.dpEnd = DayPilot.Date($scope.trip.starting_time + "T13:00:00")
	      console.log($scope.dpEnd)
	  	  }
	  }
		
	  		//function to add on event to the calendar, either on drop or on click
		$scope.addToCal = function(){
			for(var i=0; i<$scope.trip.experiences; i++)
				var data = {
					id: i,
					text: $scope.trip.experiences[i],
					start: $scope.dpStart,
					end: $scope.dpEnd
			}
			var newExp = new DayPilot.Event(data);
			$scope.calExp.push(newExp)
		}
		
		//function to post events array to backend api
		$scope.updateExp = function(){
			url = "https://tripvu.herokuapp.com/api/trips/" + $scope.tripid
			console.log(url)
	  		$http.post(url, {experiences: $scope.trip.experiences})
			    .success(function(result) {
			      console.log(result);
			    })
			    .error(function() {
			      console.log("error");
				})
	  	};

	  	//function to find the duration of the trip from string dates from trip data
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

		//fancy OAuth secret data for Yelp API call 
		function returnYelp(name,callback) {
	        var method = 'GET';
	        var url = 'http://api.yelp.com/v2/search';
	        var params = {
	                callback: 'angular.callbacks._0',
	                location: $scope.trip.location,
	                oauth_consumer_key: '028e6Wxp-UzuX6K2jc3ZPA', 
	                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
	                oauth_signature_method: "HMAC-SHA1",
	                oauth_token: 'UXqJ2CyAaKQD_mzqH8mMp7Y7-lIrWhqt', //Token
	                oauth_timestamp: new Date().getTime(),
	                term: 'attractions',
	                limit: 20           
	        };
	        var consumerSecret = '5h_r39wNZo5GMcEGIKbaZ18busA'; 
	        var tokenSecret = 'oKSqk3Kpc3QMdPsLtHMZnzRqH-0'; //Token Secret
	        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
	        params['oauth_signature'] = signature;
	        console.log(params);
	        $http.jsonp(url, {params: params}).success(callback);	                  
	    }

	    function randomString(length, chars) {
	        var result = '';
	        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
	        return result;
		}
    
};	
