angular
	.module('dayPilotApp.controllers', [])
	.controller('DayPilotCtrl', DayPilotCtrl);
	function DayPilotCtrl($scope, $timeout, $http) {
      $scope.daysConfig = {
      	  viewType: "Days", 
      	  days: 3,
      	  businessBeginsHour: 8,
      	  businessEndsHour: 20
      };
	  $scope.foo = "bar";
	  $scope.returnYelp = returnYelp('', function(data) {
                    $scope.businesses = data.businesses;
                });
	  
	  
	  $http.get('https://rails-api-bowtie.herokuapp.com/api/bowties/', { cache: true })
	  .then(function(response){
	  	$scope.bowties = response.data
	  })
	  	


 $http.get("http://rails-api-bowtie.herokuapp.com/api/bowties", { cache: true })
 .then(function(response){
   $scope.bowties = response.data
 });





	  function returnYelp(name,callback) {
                        var method = 'GET';
                        var url = 'http://api.yelp.com/v2/search';
                        var params = {
                                callback: 'angular.callbacks._0',
                                location: 'San+Francisco',
                                oauth_consumer_key: '028e6Wxp-UzuX6K2jc3ZPA', 
                                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                                oauth_signature_method: "HMAC-SHA1",
                                oauth_token: 'UXqJ2CyAaKQD_mzqH8mMp7Y7-lIrWhqt', //Token
                                oauth_timestamp: new Date().getTime(),
                                term: 'food'           
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
    }
    ;	
