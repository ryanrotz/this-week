
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

// myApp.factory('zipFactory', function() {
//   return {
//     zipcode : '98225'
//   };
// });

myApp.controller('ParentCtrl', ['$scope', '$http', function($scope, $http) {

// Necessary for parent/child controllers
  $scope.radius = '';
  $scope.zipcode = '';
  
  // Swipe left and right
  $scope.showMe = false;
  $scope.showMore = true;

  $scope.swipe = function(){
    // columns move to the left
    // the column on the right appears
    $scope.showMe = !$scope.showMe;
    $scope.showMore = !$scope.showMore;
  };

}]);

myApp.controller('ColumnOneCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.text = '';
  $scope.radius = '5';
  $scope.zipcode = '98122'
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

  // $scope.appendToEl = angular.element(document.querySelector('#inputCtn'));

  $scope.bindTopic = function(topic) {
    $scope.textInput = topic;
    console.log($scope.text)
  }

//   window.navigator.geolocation.getCurrentPosition(function(pos){
//   console.log(pos);
//   $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.coords.latitude+','+pos.coords.longitude+'&sensor=true').then(function(res){
//     console.log(res);
//   });
// })

  $scope.submitCity = function(text, radius, zipcode) {
    console.log('hey hey')
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': zipcode,
        'radius': radius,
        'text': text,
        'time': ',1w',
        'key': '6e3f56396c8665c5e6e5d4d78653828'
        // page: 10
        // key: process.env.MEETUP_SECRET
      }
    }

    console.log($scope.zipcode);
    $http(req).then(function success(res) {
       $scope.meetups = res.data.results;
        console.log(res);
        // console.log(data2);
    }, function error(res) {
        console.log(res);
    });
  };

}]);


myApp.controller('ColumnTwoCtrl', ['$scope', '$http', function($scope, $http) {


  // $scope.zip = '';
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

  $scope.bindTopic = function(topic) {
    $scope.text = topic;
  }

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

myApp.controller('ColumnThreeCtrl', ['$scope', '$http', function($scope, $http) {

  // $scope.zip = '';
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

  $scope.bindTopic = function(topic) {
    $scope.text = topic;
  }

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

myApp.controller('ColumnFourCtrl', ['$scope', '$http', function($scope, $http) {

  // $scope.zip = '';
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

  $scope.bindTopic = function(topic) {
    $scope.text = topic;
  }

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

myApp.controller('ColumnFiveCtrl', ['$scope', '$http', function($scope, $http) {

  // $scope.zip = '';
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

  $scope.bindTopic = function(topic) {
    $scope.text = topic;
  }

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