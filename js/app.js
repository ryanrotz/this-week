angular.module('ThisWeekApp', [])


.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.zip = '98122';
  $scope.radius = '5';
  $scope.text = 'tech';
  $scope.data = [];

  $scope.submitCity = function() {
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': $scope.zip,
        'radius': $scope.radius,
        'text': $scope.text,
        'time': ',1w',
        'key': 'ADD KEY HERE'
        // page: 10
        // key: process.env.MEETUP_SECRET
      }
    }

  $http(req).then(function success(res) {
     // var data = JSON.parse(res.data) 
      // var data2 = res.data.config;   
      // console.log(res);
      console.log(res);
      // console.log(data2);
  }, function error(res) {

      console.log(res);
    });
  };

}]);



