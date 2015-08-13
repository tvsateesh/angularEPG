'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
//http://stackoverflow.com/questions/11541695/redirecting-to-a-certain-route-based-on-condition

var couldEPG = angular.module('CloudEPG', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/subMenu', {
          templateUrl: 'partials/subMenu.htm',
          controller: SubmMenuController
      }).
      when('/subMenuLevel1', {
          templateUrl: 'partials/subMenuLevel1.htm',
          controller: SubmMenuController
      }).
      when('/mainMenu', {
          templateUrl: 'partials/mainMenu.htm',
          controller: MainMenuController
      }).
      otherwise({
        redirectTo: '/mainMenu'
      });
}]);