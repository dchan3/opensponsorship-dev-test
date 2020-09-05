// Service to store form data for display in summary screen
function theService() {
  var service = {}, storage = [];
  service.store = function(obj) {
    this.storage = obj;
  }
  service.getStore = function() {
    return this.storage;
  }
  return service;
}

// Controller to list submissions
function listController($scope, $http) {
  $scope.athletes = [];
  $http.get('/api/get-athletes').then(function({ data }) {
    $scope.athletes = data;
    console.log(data);
  });
}

// Controller to keep track of form data
function formController($scope, theService) {
  $scope.formData = {};

  $scope.makeAthlete = function() {
    theService.store($scope.formData);
  }
}

// Controller to edit form data
function editController($scope, theService) {
  $scope.formData = theService.getStore();

  $scope.makeAthlete = function() {
    theService.store($scope.formData);
  }
}

// Controller to display form data in summary
function summaryController($scope, $http, theService) {
  $scope.formData = theService.getStore();

  $scope.makeAthlete = function() {
    $http.post('/api/create-athlete', $scope.formData);
  }
}

let athleteInput = angular.module('athleteInput', ["ngRoute"])
  .factory('theService', theService)
  .controller('mainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 }).controller('listController', listController)
  .controller('formController', formController)
  .controller('editController', editController)
  .controller('summaryController', summaryController)
  .config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl : "main.htm",
      controller: "listController"
    }).when('/add', {
      templateUrl: 'form.htm',
      controller: 'formController'
    }).when('/confirm', {
      templateUrl: 'confirm.htm',
      controller: 'summaryController'
    }).when('/edit', {
        templateUrl: 'form.htm',
        controller: 'editController'
    });
});
