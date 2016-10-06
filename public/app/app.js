angular.module('ThisWeekApp', [])

.config(['$stateProvider', 'urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
  .state('/', {
    url: '/',
    templateUrl: 'views/index.html',
    controller: 'HomeCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'views/404/html'
  });

  $locationProvider.htmlmode(true);
  $urlRouterProvider.otherwise('/404');
}])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.zip = '98122';
  $scope.radius = '5';
  $scope.text = 'tech';
  $scope.meetups = [];

  $scope.submitCity = function() {
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': $scope.zip,
        'radius': $scope.radius,
        'text': $scope.text,
        'time': ',1w',
        'key': '6e3f56396c8665c5e6e5d4d78653828'
        // page: 10
        // key: process.env.MEETUP_SECRET
      }
    }

  $http(req).then(function success(res) {
     $scope.meetups = res.data.results;
      console.log(res);
      // console.log(data2);
  }, function error(res) {

      console.log(res);
    });
  };

}]);

