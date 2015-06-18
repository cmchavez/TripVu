@dayPilotApp = angular.module('dayPilotApp', ['daypilot'])

@dayPilotApp.config(['$routeProvider', ($routeProvider) -&gt;
  $routeProvider.
    otherwise({
      templateUrl: '../templates/home.html',
      controller: 'DayPilotCtrl'
    }) 
])