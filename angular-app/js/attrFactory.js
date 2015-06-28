angular
	.module("dayPilotApp")
	.factory("attrFactory", attrFactory)

	function attrFactory($http){
		
		return {
                    "retrieveYelp": function(name, callback) {
                        var method = 'GET';
                        var url = 'http://api.yelp.com/v2/search';
                        var params = {
                                callback: 'angular.callbacks._0',
                                location: 'San+Francisco',
                                oauth_consumer_key: '028e6Wxp-UzuX6K2jc3ZPA', 
                                oauth_token: '5h_r39wNZo5GMcEGIKbaZ18busA', //Token
                                oauth_signature_method: "HMAC-SHA1",
                                oauth_timestamp: new Date().getTime(),
                                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                                term: 'food'
                            };
                        var consumerSecret = '5h_r39wNZo5GMcEGIKbaZ18busA'; 
                        var tokenSecret = 'oKSqk3Kpc3QMdPsLtHMZnzRqH-0'; //Token Secret
                        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
                        params['oauth_signature'] = signature;
                        $http.jsonp(url, {params: params}).success(callback);
                    }
                }
            }

