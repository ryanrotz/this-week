
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

myApp.factory('zipFactory', function() {
  return {
    zipcode : '98225'
  };
});

myApp.controller('ParentCtrl', ['$scope', '$http', 'zipFactory', function($scope, $http, zipFactory) {

  $scope.zipcode = '';
  // $scope.zip = zipFactory.zipcode;
  // $scope.radius = '5';
  // $scope.text = '';
  // $scope.meetups = [];
  // $scope.topics = [
  //   'Outdoors',
  //   'Tech',
  //   'Moms',
  //   'Well-Being',
  //   'Sports',
  //   'Education',
  //   'Photography',
  //   'Food',
  //   'Writing',
  //   'Language',
  //   'Music',
  //   'Movements',
  //   'LGBTQ',
  //   'Film',
  //   'Games',
  //   'Beliefs',
  //   'Arts',
  //   'Fashion',
  //   'Social',
  //   'Career'
  // ]

  // $scope.bindTopic = function(topic) {
  //   $scope.text = topic;
  // }

  // $scope.submitCity = function() {

  //   var req = {
  //     url: 'https://api.meetup.com/2/open_events.json?',
  //     method: 'GET',
  //     params: {
  //       'zip': $scope.zip,
  //       'radius': $scope.radius,
  //       'text': $scope.text,
  //       'time': ',1w',
  //       'key': '6e3f56396c8665c5e6e5d4d78653828'
  //       // page: 10
  //       // key: process.env.MEETUP_SECRET
  //     }
  //   }

  // $http(req).then(function success(res) {
  //    $scope.meetups = res.data.results;
  //     console.log(res);
  //     // console.log(data2);
  // }, function error(res) {
  //     console.log(res);
  //   });
  // };


  
  $scope.showMe = false;
  $scope.showMore = true;

  $scope.swipe = function(){
    // columns move to the left
    // the column on the right appears
    $scope.showMe = !$scope.showMe;
    $scope.showMore = !$scope.showMore;
  };

}]);

myApp.controller('ColumnOneCtrl', ['$scope', '$http', 'zipFactory', function($scope, $http, zipFactory) {

  // $scope.zip = zipFactory.zipcode;
  // console.log(zipFactory.zipcode)
  // $scope.awesome = '';
  // $scope.zipcode = '';

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
    $scope.textInput = topic;
    console.log($scope.text)
  }

    // console.log("zip is " + $scope.awesome + $scope.zip);
    // console.log(zipFactory.zipcode)
    console.log('hey world')
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


myApp.controller('ColumnTwoCtrl', ['$scope', '$http', 'zipFactory', function($scope, $http, zipFactory) {

  $scope.zip = zipFactory.zipcode;
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

myApp.controller('ColumnThreeCtrl', ['$scope', '$http', 'zipFactory', function($scope, $http, zipFactory) {

  // $scope.zip = zipFactory.zipcode;
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

myApp.controller('ColumnFourCtrl', ['$scope', '$http', 'zipFactory', function($scope, $http, zipFactory) {

  // $scope.zip = zipFactory.zipcode;
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

myApp.controller('ColumnFiveCtrl', ['$scope', '$http', 'zipFactory', function($scope, $http, zipFactory) {

  // $scope.zip = zipFactory.zipcode;
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