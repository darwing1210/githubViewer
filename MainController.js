// Code goes here
(function() {

  var app = angular.module("githubViewer");

  var myController = function($scope, $location) {

    $scope.search = function(username) {
      $location.path("/user/" + username)
    };
    
    $scope.username = 'angular';
    
  };

  app.controller('MainController', myController);

}());