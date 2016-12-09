
var myApp = angular.module('ThisWeekApp', ['ui.router', 'ngAnimate', 'ngTouch', 'ui.bootstrap', 'ngSanitize']);

myApp.config([
  '$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider', 
  function($stateProvider, $urlRouterProvider, $locationProvider) {
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

// Parent Controller. All other controllers are children of this.
myApp.controller('ParentCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.cols = [
  // Separate html documents which each have different controllers so users can view different data in each column
    {content: 'app/views/columns/column1.html'},
    {content: 'app/views/columns/column2.html'},
    {content: 'app/views/columns/column3.html'},
    {content: 'app/views/columns/column4.html'},
    {content: 'app/views/columns/column5.html'},
    {content: 'app/views/columns/column6.html'}
    ];

  $scope.currentIndex = 0;

  $scope.setCurrentIndex = function(index) {
    $scope.currentIndex = index;
  };

  $scope.isCurrentIndex = function(index) {
    return $scope.currentIndex === index;
  };

  $scope.prevCol = function() {
    $scope.currentIndex = ($scope.currentIndex < $scope.cols.length - 1) ? ++$scope.currentIndex : 0;
  };

  $scope.nextCol = function() {
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.cols.length - 1;
  };

// Necessary for parent/child controllers
  $scope.radius = '';
  $scope.zipcode = '';
  
  // Swipe left and right. Used for screens 768px and larger.
  $scope.showMe = false;
  $scope.showMore = true;

  $scope.swipe = function(){
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
    }, function error(res) {
    });
  };

}]);


myApp.controller('ColumnTwoCtrl', ['$scope', '$http', function($scope, $http) {
  
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

  $scope.bindTopic = function(topic) {
    $scope.textInput = topic;
    console.log($scope.text)
  }

  $scope.submitCity = function(text, radius, zipcode) {
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': zipcode,
        'radius': radius,
        'text': text,
        'time': ',1w',
        'key': '6e3f56396c8665c5e6e5d4d78653828'
      }
    }

    console.log($scope.zipcode);
    $http(req).then(function success(res) {
       $scope.meetups = res.data.results;
    }, function error(res) {
    });
  };
}]);

myApp.controller('ColumnThreeCtrl', ['$scope', '$http', function($scope, $http) {

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

  $scope.bindTopic = function(topic) {
    $scope.textInput = topic;
    console.log($scope.text)
  }

  $scope.submitCity = function(text, radius, zipcode) {
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': zipcode,
        'radius': radius,
        'text': text,
        'time': ',1w',
        'key': '6e3f56396c8665c5e6e5d4d78653828'
      }
    }

    console.log($scope.zipcode);
    $http(req).then(function success(res) {
       $scope.meetups = res.data.results;
    }, function error(res) {
    });
  };
}]);

myApp.controller('ColumnFourCtrl', ['$scope', '$http', function($scope, $http) {

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

  $scope.bindTopic = function(topic) {
    $scope.textInput = topic;
    console.log($scope.text)
  }

  $scope.submitCity = function(text, radius, zipcode) {
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': zipcode,
        'radius': radius,
        'text': text,
        'time': ',1w',
        'key': '6e3f56396c8665c5e6e5d4d78653828'
      }
    }

    console.log($scope.zipcode);
    $http(req).then(function success(res) {
       $scope.meetups = res.data.results;
    }, function error(res) {
    });
  };

}]);

myApp.controller('ColumnFiveCtrl', ['$scope', '$http', function($scope, $http) {

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

  $scope.bindTopic = function(topic) {
    $scope.textInput = topic;
    console.log($scope.text)
  }

  $scope.submitCity = function(text, radius, zipcode) {
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': zipcode,
        'radius': radius,
        'text': text,
        'time': ',1w',
        'key': '6e3f56396c8665c5e6e5d4d78653828'
      }
    }

    console.log($scope.zipcode);
    $http(req).then(function success(res) {
       $scope.meetups = res.data.results;
    }, function error(res) {
    });
  };

}]);

myApp.controller('ColumnSixCtrl', ['$scope', '$http', function($scope, $http) {

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

  $scope.bindTopic = function(topic) {
    $scope.textInput = topic;
    console.log($scope.text)
  }

  $scope.submitCity = function(text, radius, zipcode) {
    var req = {
      url: 'https://api.meetup.com/2/open_events.json?',
      method: 'GET',
      params: {
        'zip': zipcode,
        'radius': radius,
        'text': text,
        'time': ',1w',
        'key': '6e3f56396c8665c5e6e5d4d78653828'
      }
    }

    console.log($scope.zipcode);
    $http(req).then(function success(res) {
       $scope.meetups = res.data.results;
    }, function error(res) {
    });
  };

}]);