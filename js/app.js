'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
//http://stackoverflow.com/questions/11541695/redirecting-to-a-certain-route-based-on-condition

var couldEPG = angular.module('CloudEPG', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/channels', {
          templateUrl: 'partials/channels.htm',
          controller: channelListController
      }).
      when('/channelDetails', {
          templateUrl: 'partials/channelDetails.htm',
          controller: ChannelDetailController
      }).
      when('/subMenu', {
          templateUrl: 'partials/subMenu.htm',
          controller: SubmMenuController
      }).
      when('/subMenuLevel1', {
          templateUrl: 'partials/subMenuLevel1.htm',
          controller: SubmMenuController
      }).
      when('/epg', {
          templateUrl: 'partials/epg.htm',
          controller: EPGController
      }).
      when('/mainMenu', {
          templateUrl: 'partials/mainMenu.htm',
          controller: MainMenuController
      }).
      when('/EPGDetails', {
          templateUrl: 'partials/epgDetails.htm',
          controller: EPGDetailsController
      }).
      otherwise({
        redirectTo: '/mainMenu'
      });
}]);