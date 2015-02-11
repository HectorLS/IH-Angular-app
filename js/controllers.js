'use strict';   // IMPORTANT!  This force to use the last version, so its a good practice
// Rails gema ruby para MVC
// Angular gema de JS para MVC


/* Controllers */

var peopleApp = angular.module('angularApp', []);

// Think in Rails
// En JS we have a Controller peopleApp.controller , and inside we have and instance and
// a function that has and scope ($scope)
//      --> scopes in js there are like glu mixin models and controller
// the .people is the Model 

peopleApp.controller('PeopleListCtrl', function ($scope, $http) {
  $http.get("http://tinder-api.herokuapp.com/people").success(function(data) {
    $scope.people = data;
  });
  // $scope.people = [
  //   {'name': 'Max',
  //    'avatar': 'http://xoart.link/200/200/man/12',
  //    'description': 'On the weekends I play cricket.'},
  //   {'name': 'Zilla',
  //    'avatar': 'http://xoart.link/200/200/woman/22',
  //    'description': 'I like pizza and icecream.'},
  //   {'name': 'Stan',
  //    'avatar': 'http://xoart.link/200/200/man/26',
  //    'description': 'Amazing double rainbow.'}
  // ];
});