
var myApp = angular.module('ThisWeekApp', ['ui.router', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

myApp.config([
  '$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider', 
  function($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/main.html',
    controller: 'ParentCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);

myApp.controller('ParentCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.zip = '';
  $scope.radius = '5';
  $scope.text = '';
  $scope.meetups = [];
  $scope.topics = [
    'Outdoors',
    'Tech',
    'Moms',
    'Well-Being',
    'Sports',
    'Education',
    'Photography',
    'Food',
    'Writing',
    'Language',
    'Music',
    'Movements',
    'LGBTQ',
    'Film',
    'Games',
    'Beliefs',
    'Arts',
    'Fashion',
    'Social',
    'Career'
  ]

  // $scope.status = function() {
  //   $scope.isopen = false;
  // };

  $scope.bindTopic = function(topic) {
    $scope.text = topic;
  }

  $scope.submitCity = function() {
    // console.log($scope.zip)
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': $scope.zip.one,
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

 $scope.showActions = false;
  
  $scope.someFunction = function(){
    $scope.showActions = !$scope.showActions;
  };

  
  $scope.showMe = false;
  $scope.showMore = true;

  $scope.swipe = function(){
    // columns move to the left
    // the column on the right appears
    $scope.showMe = !$scope.showMe;
    $scope.showMore = !$scope.showMore;
  };

}]);

myApp.controller('ChildCtrl', ['$scope', '$http', function($scope, $http) {

}]);
